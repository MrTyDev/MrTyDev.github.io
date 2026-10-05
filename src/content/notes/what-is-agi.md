---
title: What is AGI?
date: 2026-10-05
summary: Intelligence is a space whose axes we can't list, so AGI can never be verified, only falsified. An essay, with a 1969 proof as the example.
---

The term AGI is used everywhere, yet no one agrees on what it means. Before proposing a definition, I need to say what I mean by intelligence, since every definition of AGI depends on one.

## What is intelligence?

I define intelligence as the ability to take in information, process it through whatever mechanisms an agent has, and apply it to the real world. What counts is the measurable output. Thinking about how to solve a problem does not guarantee a solution; only by applying it do we learn whether the problem is actually solved. This does not mean the internal process is unimportant, only that it is not what determines whether an agent is intelligent.

Consider two students who read the same book. One understands the material and applies it on day one; the other applies it on day two. The reasons for the difference may be incidental, but the result is the same: both perform the intelligent action. Speed, then, is not part of this definition. Acting faster does not guarantee a solution, and acting slower does not prevent one.

I also believe that, at present, intelligence cannot truly be measured. The obstacle is not that intelligence has no ceiling. Mastery along any single capability may well be unbounded, but that alone would not stop us from measuring it. The obstacle is that we do not know the axes.

Think of intelligence as a space of possible directions rather than a single scale. Measurement presupposes a coordinate system: to place something in a space, you must first know what dimensions the space has. We have no census of those dimensions. Any test we build selects a handful of axes and scores along them, which tells us where a system sits within that chosen subspace and nothing at all about the axes we did not select. Every measurement of intelligence is therefore a projection of a space of unknown dimensionality onto a few dimensions we happened to pick, and we have no way to know what the projection discarded.

Two consequences follow. First, intelligence is not time-dependent, though it does live in the time domain, since action requires time. Second, intelligence is multidimensional. One can be intelligent at sewing textiles, or at forming metal into tools. If a system cannot learn one of these, no matter how much time it is given, it lacks that axis of intelligence.

## Testing the standard definition

The most widely cited definition of AGI is OpenAI's: "highly autonomous systems that outperform humans at most economically valuable work."[^charter] Its strength is that it judges a system by its output, which matches the view of intelligence above. Its weakness is everything else.

First, "outperform" smuggles in speed. Economically, outperforming a human often means doing the same work faster or cheaper. I have argued that speed is not intelligence, so a system could satisfy this definition by being quick within a narrow range of tasks without being any more general.

Second, "economically valuable work" is a projection. It picks the axes the market happens to pay for and scores a system along them. That is a legitimate economic benchmark, but it says nothing about the axes the market ignores.

Third, and most seriously, the target moves. The set of valuable work is not fixed: jobs appear, disappear, and change form. Each new kind of work is, in my terms, a new axis. This leaves the definition with a dilemma. If it refers to today's work, then a frozen system that never learns anything new could qualify, and would stop qualifying as soon as the economy shifted. If it refers to whatever work becomes valuable in the future, then it silently requires the system to adapt, but it never says so. Either way, the definition does not say what it needs to say.

Fourth, "most" excuses the long tail. A system can satisfy the definition by mastering common, well-documented work while failing at rare work entirely. This matters because current machine learning depends on large amounts of data, and rare work produces little of it. A craft with only a few practitioners may leave almost no record to learn from, yet a human apprentice can learn it from a single master. The same applies to new work: when a job first appears, there is no data about it at all. A definition built on "most" never asks whether a system can learn from scarcity, which is precisely the situation in which human learning is most general.

## A better definition

These problems point to what "general" should mean. A system is general not because it covers a particular list of tasks, but because it can acquire new ones. I therefore define AGI as a system that, given unbounded time and no more examples than a human would need, can acquire any axis of intelligence a human can acquire.

This definition inherits the limits argued above. Because we cannot enumerate the axes, AGI can never be verified outright. It can only be falsified, by finding a skill a human can learn and the system cannot.

Since time is unbounded, a missing axis is not shown by waiting but by proof: an argument that the system's structure cannot acquire the skill, the same way mathematics proves things about infinity without counting to it. There is a classic example. In 1969, Marvin Minsky and Seymour Papert proved that a single-layer perceptron can never learn XOR, the function that is true when exactly one of its two inputs is true, no matter how much time or data it is given.[^perceptrons] A perceptron can only split its inputs with one straight line, and no straight line splits XOR's cases. Any human can learn XOR in a minute. The perceptron provably lacks that axis.

<figure class="xor-figure">
  <svg viewBox="0 0 360 260" role="img" aria-labelledby="xor-title xor-desc">
    <title id="xor-title">XOR is not linearly separable</title>
    <desc id="xor-desc">Four points on a grid. The true cases, (0,1) and (1,0), sit on opposite corners, as do the false cases, (0,0) and (1,1). A dashed straight line attempts to separate them and fails, leaving a true and a false case on the same side.</desc>
    <g class="xor-axes">
      <line x1="60" y1="210" x2="320" y2="210" />
      <line x1="60" y1="210" x2="60" y2="20" />
    </g>
    <text class="xor-label" x="318" y="232" text-anchor="end">input A</text>
    <text class="xor-label" x="52" y="30" text-anchor="end">B</text>
    <text class="xor-tick" x="100" y="232" text-anchor="middle">0</text>
    <text class="xor-tick" x="260" y="232" text-anchor="middle">1</text>
    <text class="xor-tick" x="46" y="174" text-anchor="end">0</text>
    <text class="xor-tick" x="46" y="64" text-anchor="end">1</text>
    <line class="xor-try" x1="170" y1="20" x2="330" y2="150" />
    <text class="xor-try-label" x="176" y="16">any single line fails</text>
    <circle class="xor-false" cx="100" cy="170" r="13" />
    <circle class="xor-false" cx="260" cy="60" r="13" />
    <circle class="xor-true" cx="100" cy="60" r="13" />
    <circle class="xor-true" cx="260" cy="170" r="13" />
    <text class="xor-pt" x="100" y="175" text-anchor="middle">0</text>
    <text class="xor-pt" x="260" y="65" text-anchor="middle">0</text>
    <text class="xor-pt on" x="100" y="65" text-anchor="middle">1</text>
    <text class="xor-pt on" x="260" y="175" text-anchor="middle">1</text>
  </svg>
  <figcaption>XOR. The two "true" cases (orange) sit on opposite corners, so no single straight line can put both on one side and both "false" cases on the other. A single-layer perceptron draws exactly one line, so it can never learn this.</figcaption>
</figure>

AGI is therefore not a finish line to be crossed, but a claim that survives every attempt to find a missing axis.

[^charter]: OpenAI Charter, <https://openai.com/charter/>. The surrounding clause, "benefits all of humanity," states OpenAI's mission for AGI and is not part of the definition itself.

[^perceptrons]: Marvin Minsky and Seymour Papert, *Perceptrons: An Introduction to Computational Geometry*, MIT Press, 1969.
