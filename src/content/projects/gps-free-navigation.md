---
title: Flying blind without GPS
summary: Three small models that keep a drone's sense of position and wind when GNSS is jammed.
role: Individual project, Advanced Machine Learning (grade A)
when: April 2026
order: 3
date: 2026-04-24
tags: [defence, research, xai]
featured: true
cover: ./images/gps-drift.jpg
coverAlt: A chart of horizontal position drift against GPS-denied duration, comparing raw IMU dead reckoning with the corrected model
coverCaption: Position drift during GPS denial, measured over 99 flight windows. Red is plain dead reckoning, green is with the velocity corrector.
evidenceTitle: In short
evidence:
  - { label: Drift after 60 s, value: "26 m, against 45 m with dead reckoning" }
  - { label: Drift after 120 s, value: "75 m, against 120 m" }
  - { label: Wind estimate, value: "Locked onto the true wind on 9 of 10 flights" }
  - { label: Flown, value: "63 simulated flights, 6 hours, 233,000 rows" }
links:
  - { label: "Read the paper (PDF)", url: "https://mrtydev.github.io/papers/gps-denied-navigation-alfaro-2026.pdf" }
stack: [Python, scikit-learn, Optuna, SHAP, PX4 SITL, Gazebo]
gallery:
  - { src: ./images/gps-wind-lock.jpg, alt: "Two density plots of predicted wind speed, with the GPS-aided and GPS-denied curves peaking on the true wind value", caption: "The wind estimator with GPS, and with GPS replaced by the corrected IMU. Both peaks still sit on the true wind." }
  - { src: ./images/gps-error-floor.jpg, alt: "A table comparing airspeed estimators against the achievable error floor", caption: "The negative result. A per-flight average already gets 40% of the way, and the achievable floor is 97%. My model couldn't beat the average." }
---

A drone that loses GNSS falls back on its IMU. The IMU measures every force on the airframe at once, so it cannot tell the wind pushing the drone apart from the drone's own thrust, and the position estimate drifts away within seconds.

I built three small models against that problem, trained on 53 simulated flights in PX4 SITL and Gazebo and validated on 10 more the models had never seen. The features come from physics rather than from throwing raw sensor channels at a network: the wind triangle, and thrust geometry from Blade Element Momentum theory.

## What worked

**A velocity corrector.** It predicts the error accumulating in the IMU's own velocity estimate. One minute into a GPS blackout, the drone's position is off by 26 m instead of 45 m, and at two minutes by 75 m instead of 120 m. That's still drift, but it's drift you can navigate home on.

**A wind estimator.** Instead of trusting a single prediction, it takes the mode of a distribution of predictions over a moving window, because the individual predictions are noisy and their peak is far steadier than their average. It converged on the true wind on every validation flight. Then I cut GPS out entirely and fed it the corrected IMU velocity instead: it still locked onto the true wind on 9 of 10 flights, and to the same accuracy, only slower, 82 seconds instead of 61.

That suggests a way to use it: get a wind lock while GPS is still there, then hold that estimate through the jamming.

## What didn't

The third model was supposed to predict airspeed, and it failed. I could have reported it as a modest improvement over doing nothing, because it was one, but I measured it against an analytical error floor instead. A per-flight average, which is barely a model at all, already captures 40% of the available error reduction. Mine captured 41%.

A quick test with a small neural network did better than both, which says the signal is in the data but classical regression can't pull it out. The task needs representation learning, and I wrote that down rather than dressing up a number.

I used SHAP throughout to check which features each model was actually using, and Optuna to tune them.

[Read the full paper (PDF)](/papers/gps-denied-navigation-alfaro-2026.pdf).
