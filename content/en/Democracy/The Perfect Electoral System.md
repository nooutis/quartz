---
publish: true
title: The Perfect Electoral System
created: 2026-10-07T19:12:26.186Z
modified: 2026-10-07T19:16:49.499Z
tags:
  - democracy
  - economy
  - math
  - politics
---

[[Il sistema elettorale perfetto| Italiano]]

In the article [[Democratic dilemma]], we saw that there can be no perfect electoral system with just any preference function, because this would lead to the emergence of a dictator; however, by choosing a preference function that satisfies certain conditions, we can achieve a system that cannot be manipulated.

## Unimodal Preferences

One assumption we can make when discussing preferences along a spectrum—such as the temperature spectrum of a room or a left-right political spectrum—is that there is a point of maximum preference and that preference decreases as we move toward the extremes: if, for example, I preferred a temperature of 24°C, a temperature of 23°C would be better for me than one of 22°C, and symmetrically, a temperature of 25°C would be better than one of 26°C.

Mathematically, assuming we have a totally ordered set of alternatives $X$ and a preference function $u$, we can define a unimodal preference function if there exists a point $x^*$ that satisfies these two conditions:

1. Given $x, y$ belonging to $X$, with $x < y \leq x^*$, it holds that $u(x) < u(y)$
2. If, on the other hand, $x^* \leq x \leq y$, then it holds that: $u(y) < u(x)$

## Median Voter Theorem

Assuming, therefore, that we have unimodal preferences and rational voters—that is, voters who always vote for the option that guarantees the most desired outcome—it can be shown that a function that returns the vote of the median voter—that is, by ranking the voters in order of their preferences, the vote in the middle of this sequence (at position $\frac{n+1}{2}$) is chosen as the result, yields a Condorcet winner.

#### Proof

We want to prove that, if a vote is cast between point $y$ and the median, the winner will be the median.
Let’s consider two cases and an odd number of voters $n$:

##### Alternative $y$ is greater than the median

Consider all voters whose preference is a point less than or equal to the median: by construction, there are $\frac{n+1}{2}$ such voters, that is, a narrow majority of the voters. Each of them prefers the median to $y$, so the median has an absolute majority of the voters.

The second case, in which alternative $y$ is less than the median, is symmetric with respect to the first.

In the case of an even number of voters, we have a median interval, bounded by the preferences of the voter in position $\frac{n}{2}$ and the voter in position $\frac{n}{2} + 1$. In this case, a tie-breaking rule must be established.

## Moulin’s Theorem

A special feature of the median voter is that, in addition to yielding a Condorcet winner, its choice ensures that the electoral system cannot be manipulated, thereby satisfying the requirement that all voters vote for the candidate they sincerely prefer. Here is a quick proof:

- Consider a voter whose preference is below the median. Voting below one’s preference does not change the median; voting above it may have no effect or may raise the median. In either case, the voter does not achieve the desired result.
- Similarly, consider the case where the voter’s preference is above the median. Voting above one’s preference does not change the median; voting below it may have no effect or may lower the median: in this case as well, the voter does not achieve the desired result.

## Consequences and Critical Issues

This system has a fundamental characteristic: since the median voter is the one who is rewarded, the center is favored over the extremes; therefore, it is in the politician’s interest to move toward the center, thereby securing the votes of both moderates and radicals. In reality, however, two phenomena occur that render the strategy of moving toward the center ineffective, especially when done from the left: the ineffectiveness of the unimodal preference model and voters’ deviation from the paradigm of rational choice.

1. Voters often do not have a unimodal preference but rather a bimodal one; that is, they prefer the extremes over the center, regardless of the extremists’ ideology. In particular, there appears to be a segment of voters who prefer concrete government action over the perception of inaction [^1]
2. Especially on the left, voters would rather not vote than vote for a party that, although closest to their ideas, is not far enough to the left. [^2] This may stem from the fact that, on the left, voting tends to have ideological value rather than merely practical utility.

### Conclusions

The illusion of rational choice and unimodal preferences—which would make a perfect system possible—unfortunately fails to satisfactorily explain human behavior, which is characterized by irrationality. This implies that the median voter strategy, which at first glance seems so convincing and logical, is not suitable for winning elections, especially on the left. The solution, as we will see, is radicalization, which can be pursued in various ways.

[^1]: https://www.researchgate.net/publication/271817998_Do_Something_Politics_and_Double-Peaked_Policy_Preferences

[^2]: https://www.cambridge.org/core/books/beyond-social-democracy/losing-the-middle-ground/5BC955192A4328004AE46990F5B54826
