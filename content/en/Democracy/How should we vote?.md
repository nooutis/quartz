---
publish: true
title: How should we vote?
created: 2026-08-17T15:01:01.808Z
modified: 2026-08-19T17:06:23.775Z
tags:
  - democracy
  - economy
  - math
  - politics
---

[[Come si dovrebbe votare?|Italiano]]

## Definitions and Terminology

Voting is not simply the act of expressing one's political will; it involves a series of procedures and rules that determine the functioning of any collective decision-making process. There are two fundamental types of electoral systems:

- Systems in which it is necessary to elect a single candidate.
- Systems in which it is possible to elect multiple candidates.

The first part of this article deals with the first type, while the second part deals with the second type.

## Single-Winner Electoral Systems

### The Plurality System

The plurality system is an extremely simple decision-making system in which voters choose a single preference from a list of options and the option receiving the most votes wins.

When faced with a choice between two options, there are two fundamental characteristics to consider:

1. One of the two options will always have an absolute majority, excluding abstentions.
2. A single preference is required, which, in this case, means giving a precise to all possible options.

### Problems with the Plurality System

When attempting to expand the number of available options, the situation becomes more complex:

1. The option receiving the most votes does not necessarily obtain an absolute majority.
2. The voter expresses a single preference, effectively eliminating any ranking of preferences within the list of options.

Both of these problems lead to real-world effects, particularly the so-called [Duverger's Law](https://en.wikipedia.org/wiki/Duverger%27s_law): in a plurality system, there is a tendency to form a two-party system, as a third party is likely to simply siphon votes away from the party ideologically closest to it. A voter acting rationally is therefore compelled to avoid voting for emerging parties, fearing that their vote will be wasted. Voters who do not adhere to the principle of rational choice may even choose not to vote at all. The system also suffers from other well-known paradoxical effects, explored in more detail in the article [[Paradoxes and Criteria of Electoral Systems]].

### Multiple-Preference Voting Systems

To overcome the problems associated with the plurality system, one common approach is to adopt a multiple-preference voting system.

The simplest method is to allow voters to express multiple preferences, ranking candidates in order of preference. The candidate receiving the most votes wins. This system is best suited for making quick decisions in informal settings. There is also the system of voting to exclude candidates. However, both methods carry a significant risk of manipulation: it is possible to selectively vote (or not vote) for candidates who are likely to win but are undesirable.

Another system involves assigning a weighted value to each candidate, for example, assigning a score from 1 to 10. Even in this case, there is a significant risk of manipulation, through a strategy called "burying", where voters assign a very low score to a candidate who's not their favorite if they're projected to win the elections.

Since it is impossible to create a perfectly fair and unmanipulable system, due to the impossibility theorems discussed in [[Democratic dilemma]], it is necessary to find a compromise between unmanipulability and adherence to various criteria, as discussed in the article [[Paradoxes and Criteria of Electoral Systems]]. We will now examine Instant-Runoff Voting (IRV), which functions as follows:

1. Voters express their preferences by ranking candidates in order of preference.
2. The candidate with the fewest votes is eliminated, and their votes are redistributed based on the voters' next preference.
3. If no candidate receives a majority, step 2 is repeated.

While improved compared to the plurality system, IRV still presents certain problems that do not arise in plurality systems: a particular issue is the lack of monotonicity. An increase in support for a candidate can, paradoxically, lead to their defeat. Consider an example with three candidates and one hundred voters:

| Number of Voters | Preference Order |\
| ----------------- | ----------------- |\
| 28 | A > B > C |\
| 27 | B > C > A |\
| 45 | C > A > B |

In the first round, B is eliminated, having 27 votes. B's votes are redistributed to C, who therefore wins with 72 votes.

Now, consider a new scenario in which two voters who initially supported A change their minds and decide to vote for C. The situation becomes:

| Number of Voters | Preference Order |\
| ----------------- | ----------------- |\
| 26 | A > B > C |\
| 27 | B > C > A |\
| 47 | C > A > B |

This time, A is eliminated, having 26 votes. A's votes are redistributed to B, who therefore wins the election with 53 votes.

A better system in this case is [Ranked pairs](https://en.wikipedia.org/wiki/Ranked_pairs)[^1]. The method involves evaluating the preference between all possible pairs of candidates, then using these comparisons to determine a winner, starting with the pairs with the largest difference in preference. Consider the previous scenario:

- A vs. B:
  - Prefer A: 28 + 55 = 83
  - Prefer B: 27
  - A wins against B by a margin of 56 votes.
- C vs. A:
  - Prefer C: 27 + 45 = 72
  - Prefer A: 28
  - C wins against A by a margin of 44 votes.
- B vs. C:
  - Prefer B: 28 + 27 = 55
  - Prefer C: 45
  - B wins against C by a margin of 10 votes.

Now, order these pairs in descending order:

1. A > B (56)
2. C > A (44)
3. B > C (10)

First, fix A > B, then try fixing C > A, resulting in C > A > B. Try fixing B > C, but this creates a cycle.

This method also works with partial rankings, as it assumes that all unassigned choices are tied.

## Multi-Winner Electoral Systems

In some cases, such as elections for parliamentary members, it may be possible for multiple candidates to win. One simple solution is to divide the country into electoral districts, each with a roughly equal population, and then use the plurality system to assign individual districts. This creates a multi-winner plurality system, also known as single-member districts. This extension of the plurality system suffers from all the defects of the system from which it derives.

### Gerrymandering

Dividing a territory into electoral districts creates a problem: the same territory, divided into districts with different shapes, can produce varied electoral results. Consider an example with a population of 25 people to be divided into 5 districts. Suppose that 60% of voters support party A and 40% support party B. If divided uniformly into five districts, we would obtain three districts for party A and two for party B. However, we could also divide them in another way: we could create one district containing only voters for party A and divide the remaining voters uniformly among the remaining four districts. In this way, party B would receive three districts, despite receiving less than half of the votes. In a non-two-party system, such as the United Kingdom, this phenomenon can be even more pronounced: in the most recent election, the Labour Party received 33% of the votes and 63% of the seats (while Reform UK, led by Nigel Farage, received less than 1% of the seats with 14% of the vote)[^2]. In the latter case, gerrymandering is not intentional, but it often is, as seen in some districts within the [United States Electoral College](https://thefulcrum.us/electoral-reforms/worst-gerrymandered-districts). Ironically, the best way to fight gerrymandering, without changing the electoral system, would be to manipulate the districts in such a way as to achieve a result that is proportional to the vote.

### Proportional Representation

The simplest way to distribute seats in proportion to voters' choices is through proportional representation: each party receives a number of seats proportional to the number of votes received. The main problems are:

1. The inability to express more than one preference.
2. The threshold for representation.
3. The greater difficulty in forming a stable government.

The first problem is largely due to the second: many voters avoid voting for parties they genuinely support, fearing that the party will not surpass the threshold for representation, effectively crippling smaller parties. The third problem is due to the fact that it is difficult for any party to obtain an absolute majority of votes: it is almost always necessary to form a coalition government, and the most voted party can be excluded from forming a coalition government, as happened, for example, [after the 2023 Spanish parliamentary elections](https://es.wikipedia.org/wiki/Elecciones_generales_de_España_de_2023). This is not necessarily a problem: a coalition government can still represent the majority of voters, but the phenomenon of a "grand coalition" – a coalition government composed of ideologically diverse parties – can be seen as a form of betrayal, rendering voters' votes meaningless: citizens feel that their vote has no real impact on the government, and that politicians are not accountable for their actions.

### Majority Bonuses

One way to address the issue of governability is to award bonuses to parties that achieve a relative majority of votes. However, its use is very dangerous, as giving large majorities to individual parties can lead to authoritarian tendencies: this occurs when parties obtain a qualified majority (usually two-thirds of the seats), allowing them to amend the constitution or manipulate control bodies.

### STV and PAV

There is no academic consensus on which is the best multi-winner electoral system. There are fundamentally two solutions:

1. Single Transferable Vote (STV)
2. Proportional Approval Voting (PAV)

In the first case, voters can express multiple preferences, ranking candidates in order of preference. If a party fails to surpass the necessary threshold to win a seat, or receives more votes than are necessary to win a seat, these votes are redistributed. This system is similar to [[#Multiple-Preference Voting Systems|IRV]], and there are corrective systems such as [CPO-STV](https://en.wikipedia.org/wiki/CPO-STV), which compares the results of all possible elections to find the one that best reflects voters' desires. While not all problems are solved – for example, even CPO-STV does not possess the property of monotonicity – it is less susceptible to manipulation than traditional STV. The biggest problem is computational: finding the result of an election using CPO-STV without a computer is practically impossible.

[PAV](https://en.wikipedia.org/wiki/Proportional_approval_voting) works differently: voters choose all candidates they support (without ranking them). Then, it evaluates all possible election outcomes and assigns a score to each. The number of votes for each candidate is multiplied by H(r) = 1 + 1/2 + ... + 1/r, where r is the number of elected candidates. The scenario with the highest score wins. Consider an example with three candidates and two elected:

Consider three candidates A, B, and C, and three groups of voters:

1. The first group voted for A and B (45%).
2. The second group voted for C (35%).
3. The third group voted for A (20%).

Construct a table with the possible election outcomes:

| **Elected** | Score Group 1 (45%) | Score Group 2 (35%) | Score Group 3 (20%) | Total Score |\
| ---------- | ------------------- | ------------------- | ------------------- | ----------- |\
| A, B | 45 x (1 + 1/2) = 67.5 | 35 x 0 = 0 | 20 x 1 = 20 | 87.5 |\
| A, C | 45 x 1 = 45 | 35 x 1 = 35 | 20 x 1 = 20 | 100 |\
| B, C | 45 x 1 = 45 | 35 x 1 = 35 | 20 x 0 = 0 | 80 |

The result is A, C. This voting system, unlike STV, satisfies the monotonicity criterion. The biggest problem with this method is its high computational requirements: for each seat added, it is necessary to calculate twice as many possible outcomes. To approximate this problem, we can use the Sequential Proportional Approval Voting (SPAV) method, which follows this logical principle:

1. Each vote is worth 1 / (Number of candidates already elected + 1).
2. Elect the candidate with the most votes.
3. If there are still seats to be filled, return to step 1.

This method is computationally much simpler and can be implemented manually.

Personally, I prefer CPO-STV in countries without a federal structure and a CPO-STV applied to multi-member districts in a constituency that is as large as possible, in order to limit the effects of gerrymandering as much as possible, in countries where it is necessary to have a balance of power between a central government and a local government. In an ideal world with unlimited computing power, I would prefer PAV because it has the property of monotonicity.

[^1]: Schulze, M. (2023). Comment on “The best Condorcet‑compatible election method: Ranked Pairs”. _Constitutional Political Economy, 35_, 439 - 442. https://doi.org/10.1007/s10602-023-09415-y

[^2]: https://en.wikipedia.org/wiki/2024_United_Kingdom_general_election
