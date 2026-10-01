---
publish: true
title: How should we vote?
created: 2026-08-19T16:59:47.231Z
modified: 2026-08-19T17:11:51.881Z
tags:
  - democracy
  - economy
  - math
  - politics
---

[[Paradossi e criteri dei sistemi elettorali|Italiano]]

## The Results of an Imperfect System

As demonstrated in the article [[Democratic dilemma]], there are no electoral systems that can be entirely free from manipulation; however, we have not yet examined in detail the practical manifestations of this phenomenon. We will now review several criteria that can be used to evaluate the effectiveness of an electoral system, providing examples of their application.

## Majority Criterion

> If a candidate is the preferred choice of the majority of voters, then that candidate should be elected.

An example of an electoral system that fails to meet this criterion is a voting system where voters cast ballots for candidates they do not want to elect, known as [anti-plurality voting](https://en.wikipedia.org/wiki/Anti-plurality_voting).

Let's consider an example:

| **Number of Voters** | **Order of Preference** | **Vote Assigned (Last Choice)** |\
| ---------------------- | ------------------------ | ---------------------------------- |\
| **60** | $A > B > C$ | $C$ |\
| **40** | $C > B > A$ | $A$ |

Candidate A is preferred by 60% of the voters, but candidate B receives zero votes, so B will be elected.

## Majority-lose Criterion

> If the majority of voters do not give their preference to a candidate, then that candidate should not be elected.

This is the first criterion that plurality voting fails to meet[^1]. It is easy to imagine a vote with three candidates where none of the three receives a majority of the votes. In this case, the elected candidate does not have the support of the majority of voters.

## Mutual Majority Criterion

> If the majority of voters prefer a group of candidates to all others, then the winner must be part of that group.

Again, plurality voting fails to meet this criterion. Consider a situation with three candidates and one hundred voters:

| **Number of Voters** | **Order of Preference** | **Vote Assigned** |\
| ---------------------- | ------------------------ | ------------------- |\
| **25** | $A > B > C$ | $A$ |\
| **35** | $B > A > C$ | $B$ |\
| **40** | $C > A > B$ | $C$ |

The majority, consisting of A and B, is preferred to C in 60% of cases; however, C will win.

## Condorcet Winner Criterion

> The elected candidate must be able to win in a head-to-head contest with all other candidates.

From [[Democratic dilemma#Paradoxes in Decision-Making Processes|Democratic dilemma]], we know that a Condorcet winner does not always exist. Even when one does exist, plurality voting does not necessarily choose that winner, as seen in the previous example. Even more complex systems, such as [IRV](https://en.wikipedia.org/wiki/Instant-runoff_voting), fail to meet this criterion. Consider a situation with four candidates and one hundred voters:

| **Percentage of Voters** | **Order of Preference** |\
| ------------------ | ------------------------ |\
| **35 voters** | $B > A > D > C$ |\
| **33 voters** | $C > A > D > B$ |\
| **32 voters** | $D > A > B > C$ |\
| **0 voters** | $A$ as first choice |

Candidate A is eliminated early, despite being a Condorcet winner (i.e., winning a head-to-head contest with all other candidates).

## Condorcet Loser Criterion

> The election winner should not be a Condorcet loser, i.e., a candidate who would lose in a head-to-head contest with all other candidates.

The example from [[#Criterion of Mutual Majority|Paradoxes and Criteria of Electoral Systems]] is also applicable to this criterion: Candidate C would lose in a head-to-head contest against both A and B.

## Pareto Efficiency

> If everyone prefers A to B, then the outcome of the election should reflect that by placing A in a better position than B.

Consider a situation with three candidates and one hundred voters using an anti-plurality voting system:

| **Number of Voters** | **Order of Preference** | **Vote Assigned** |\
| ---------------------- | ------------------------ | ------------------- |\
| **100** | $A > B > C$ | $C$ |

Even though A is preferred to B unanimously, depending on how the electoral system handles tiebreakers, B could win.

## Smith's Set Criterion

> The election winner belongs to Smith's set, which is the smallest set such that for every head-to-head comparison between two candidates, a candidate within the set always wins.

Since a set containing only the Condorcet winner is an example of Smith's set, the [[#condorcet-winner-criterion|Condorcet Winner Criterion]] is implied by this criterion. Consider an example with four candidates and 33 voters:

| **Group** | **Voters** | **Order of Preference** |\
| ------------ | ------------ | ----------------------------- |\
| **Group 1** | **9** | $A > C > D > B$ |\
| **Group 2** | **8** | $B > C > A > D$ |\
| **Group 3** | **6** | $C > B > A > D$ |\
| **Group 4** | **10** | $D > C > A > B$ |

Smith's set is {A, B, C}, but D wins the election.

## Monotonicity

> Increasing a candidate’s preference should not worsen their final position in the election.

IRV is notoriously non-monotonic. The example is found in the article [[How should we vote?#Multiple Preference Voting Systems|How Should We Vote?]].

## Consistency

> If two preference sets are combined where A is preferred to B, then the outcome of the election with the combined set as the preference set should also prefer A to B.

IRV has the defect of being inconsistent. Consider this example:

### First District:

| **Voters** | **Order of Preference** |\
| ------------ | ------------------------ |\
| **5** | $A > C > B$ |\
| **5** | $C > B > A$ |\
| **3** | $B > A > C$ |

Winner: A

### Second District:

| **Voters** | **Order of Preference** |\
| ------------ | ------------------------ |\
| **5** | $A > B > C$ |\
| **6** | $B > C > A$ |\
| **3** | $C > A > B$ |

Winner: A

### Combined Districts:

#### First Preferences:

- **A:** 5 + 5 = 10 votes
- **B:** 3 + 6 = 9 votes
- **C:** 5 + 3 = 8 votes

#### IRV Process:

1. Round 1: C is in last place with 8 votes and is eliminated.
2. Transfer of C’s votes:

- The 5 voters from District 1 (C > B > A) transfer their votes to B.
- The 3 voters from District 2 (C > A > B) transfer their votes to A.

3. Round 2:

- **B:** 9 + 5 = 14 votes
- **A:** 10 + 3 = 13 votes

Therefore, B wins the election, even though they lose in both districts when considered separately.

## Participation Criterion

> Increasing the number of preferences for a candidate should not cause that same candidate to lose the election.

As with monotonicity, this criterion is not met by IRV[^2].

## Sincere Voting

> A voter should have no incentive to vote for someone other than their most preferred candidate.

All the voting systems we have examined so far, except for anti-plurality, fail to meet this criterion. However, in real-world elections, manipulating preferences is so complex that it is impossible to determine in advance what is advantageous when using a voting system designed to resist manipulation (See [[Democratic dilemma]]).

[^1]: https://en.wikipedia.org/wiki/Plurality_voting

[^2]: [[How should we vote?]]
