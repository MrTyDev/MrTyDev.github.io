---
title: Stay-Deepfake
summary: Two state-of-the-art deepfake detectors were looking at the background, not the face. We guided ours towards the face instead.
role: Pair project with Jeet Purohit, Deep Machine Learning
when: May 2026
order: 2
date: 2026-05-24
tags: [xai, research]
featured: true
cover: ./images/stay-deepfake-gradcam.jpg
coverAlt: Two Grad-CAM heatmaps of the same news anchor. On the left the heat sits on the studio logos, on the right on the face.
coverCaption: "Grad-CAM on the same fake image. Left: the published detector, reading the studio logos. Right: ours, reading the face. Frames from the FaceForensics++ dataset (Rössler et al., 2019), figures from our paper."
evidenceTitle: In short
evidence:
  - { label: What changed, value: "The model's attention moved from the background to the face" }
  - { label: How, value: "A ReLU and non-negative weights on the last layer, so real features count for nothing" }
  - { label: Verified with, value: "Grad-CAM and LIME, not just a test score" }
  - { label: Not the point, value: "Accuracy rose 49% to 73%, on a model we never had time to tune" }
links:
  - { label: "Read the paper (PDF)", url: "https://mrtydev.github.io/papers/stay-deepfake-purohit-alfaro-2026.pdf" }
stack: [PyTorch, ResNet-18, OpenCV, Grad-CAM, LIME, FaceForensics++]
gallery:
  - { src: ./images/stay-deepfake-before.jpg, alt: "The diffusion-based detector on a deepfake image. Grad-CAM heat sits on the studio logos, and the prediction is wrong.", caption: "The published detector on a fake image. Grad-CAM puts the heat on the studio logos, LIME agrees, and the model calls it real." }
  - { src: ./images/stay-deepfake-after.jpg, alt: "Stay-Deepfake on the same image. Grad-CAM heat sits on the face, and the prediction is correct.", caption: "Ours on the same image. The heat has moved to the face, and it gets the answer right. Frames from FaceForensics++ (Rössler et al., 2019)." }
---

Deepfake detectors score well on benchmarks and then fail on real images. We wanted to know why, so we ran Grad-CAM and LIME on two state-of-the-art models.

They weren't looking at the face. They were reading the **background**: studio logos and on-screen text. Whatever those benchmark numbers measured, it wasn't the ability to spot a manipulation.

## The contribution

Stay-Deepfake guides the model towards the manipulated part of the image. That's the result, and the Grad-CAM panels above are the evidence for it.

The idea comes from Stay-Positive, a fake-image detection paper by Rajan and Lee. We freeze the feature layers and retrain only the last layer, with a ReLU and weights kept non-negative. Fake features keep positive values and get a gradient; real features end up at zero. That guides the model to ignore real features, like the background, and to learn from the fake ones.

## About the accuracy numbers

They went up, from 49% to 73% on full uncropped images, with recall from 47% to 99%. I don't think that's the interesting part, and I wouldn't lean on it.

This was a course project on a deadline. We never got to optimise the model, tune it properly, or run an ablation study, so the scores say more about how little time we had than about how good the architecture is. What the scores can't explain away is *where the model is looking*, and that is what we set out to change.

[Read the full paper (PDF)](/papers/stay-deepfake-purohit-alfaro-2026.pdf), written with Jeet Purohit.
