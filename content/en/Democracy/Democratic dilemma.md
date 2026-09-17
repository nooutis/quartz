---
publish: true
title: Democratic dilemma
created: 2026-08-11T15:58:12.280Z
modified: 2026-08-19T17:12:01.805Z
tags:
  - democracy
  - economy
  - math
  - philosophy
  - politics
---

[[Il dilemma democratico|Italiano]]

# On Necessity and Impossibility

> “\[In this world of sin and woe. No one pretends that democracy is perfect or all-wise. Indeed, it has been said that democracy is the worst form of Government except all those other forms that have been tried from time to time]" (https://api.parliament.uk/historic-hansard/commons/1947/nov/11/parliament-bill)
>
> Winston Churchill, House of Commons, November 11, 1947, 207

## What is Democracy?

It is necessary, as a first step, to clarify what democracy is: generally, it is an umbrella term that identifies various political and social systems, characterized by the participation of all members of a community in the management of power, whether it be political, economic, familial, or otherwise. The term originated in a purely political context, but has subsequently expanded to encompass any social context. [^2][^3] We speak of economic democracy, democracy in the workplace, and democratic pedagogy. [^4][^5]. Before examining the limitations of democratic decision-making processes, it is important to explain why they are necessary and preferable: fundamentally, democracy has two advantages over other forms of government: it tends to be more just and function better. Drawing on John Rawls’ perspective, it is possible to consider democracy as intrinsically just because it embodies formal and political equality among citizens, allowing them to participate in the creation of the rules to which they are subject. Assuming that human beings are equal in rights, and that a society is just when individuals reach an agreement, abstracting from any particular, individual, or private interest, we arrive at the conclusion that justice can only be achieved through collective participation. As for functionality, the presence of strong democratic institutions is correlated with lower rates of corruption, greater economic prosperity, and a higher quality of life. [^6][^7]. There is also a question of stability: well-established democracies tend to be more stable than other forms of government. The reference is not so much to the longevity of governments or their ideological homogeneity, but rather to the fact that democracies, when well-established, tend to maintain their structural characteristics even during periods of crisis. Specifically, a similar relationship exists to that of a horseshoe: the most ruthless autocracies, often economically linked to the production of raw materials, tend to be stable alongside well-established democracies, while intermediate regimes tend to be more unstable and experience more frequent structural changes. [^8]

Within the framework of political organization, there are primarily two forms in which democratic decision-making can be implemented:

1. Representative democracy, in which voters use decision-making processes to choose their representatives, who may have more or less freedom of action depending on the system in question.
2. Direct democracy, in which voters participate directly in the decision-making process, without intermediaries, using tools such as referendums.

In both cases, it is necessary to define a system that assigns a result to the preferences of voters, which may be the selection of one or more candidates to be elected, the repeal or approval of a law, and so on.

## Paradoxes in Decision-Making Processes

If we evaluate the quality of a political system based on its ability to orient political decisions in a way that realizes the will of the collective, seeking to satisfy the needs of the majority of citizens, we must consider the effects of the systems used to make decisions. The first interesting phenomenon to analyze is Condorcet’s paradox, which occurs when a total ordering of preferences is imposed in a system with three or more candidates. A total ordering of preferences is a list of candidate preferences in which the following properties hold for each candidate $a, b,$ and $c$ in the list of candidates (the symbol “$≤$” indicates that the second element is preferred to the first, or that they are equivalent):

1. $a$ ≤ $a$ (Each element is evidently equivalent to itself)
2. If $a ≤ b$ and $b ≤ c$, then $a ≤ c$ (Transitive property)
3. If $a ≤ b$ and $b ≤ a$, then $a = b$
4. For each pair of elements, we have that $a ≤ b$ or $b ≤ a$ (This is what makes the ordering total).

In simple terms, a total ordering consists, for each voter, of a list of candidate preferences.

In this case, it is possible for the outcome of the elections to depend entirely on the order in which the votes are presented. Let us consider an example with three voters and three candidates:

| Voter | First Choice | Second Choice | Third Choice |\
| ----- | ------------ | ------------- | ------------ |
| A     | X            | Y             | Z            |\
| B     | Y            | Z             | X            |\
| C     | Z            | X             | Y            |

The majority prefers X to Y (A and C against B), Y to Z (A and B against C), and finally, Z to X (B and C against A). Combining this information, we obtain the absurd relationship that X is better than Y, which is better than Z, which is better than X. Therefore, there is no absolute winner, and the final result depends on an arbitrary choice of individual candidates.

### Arrow’s Impossibility Theorem

Even more surprising is Arrow’s Impossibility Theorem: by imposing four criteria on an electoral system, it is impossible to satisfy them all. The four criteria are:

1. For every possible outcome of the vote, it must be possible to find a winner.
2. If all voters prefer X to Y, then X will be preferred to Y by the electoral system.
3. If two preference profiles agree on X and Y, then the electoral system must also agree on X and Y, that is, there should not be spoiler candidates.
4. There should not exist an individual whose vote alone determines the outcome of the election.

#### [Proof](http://dido.econ.yale.edu/~gean/art/p1116.pdf)

Let us consider a situation with:

- a set of voters N = {1, 2, …, n} with n ≥ 2;
- a set of candidates X containing at least 4 elements.

Consider a candidate, b ∈ X, and assume that every voter has placed b at the bottom of their preference list. We deduce that b must be at the bottom of the preference list (2). Now, assume that b moves from the bottom to the top of the preference list for each voter, one at a time, until, for voter n, the property (2) dictates that b is the candidate preferred by the system.

We therefore know that there exists a single voter, whom we call k, who represents the pivot of this process: that is, the voter after whom b becomes the candidate preferred by the system.

Now, consider the following profiles:

- **Profile 1**: Voters 1, …, k-1 have b as their preferred candidate; voters k, …, n have b at the bottom of their list. The system places b at the bottom of the preference list.
- **Profile 2**: Voter k has chosen b as their preferred candidate. Voters 1, …, k now have b as their preferred candidate: the system places b as the preferred candidate.

Now, consider two other candidates, a and c, different from b. Construct now **Profile 3**:

Voter k changes their preferences so that they have the following chain of preferences: a > b > c. The other voters maintain their preference, keeping b in the same position it was in before.

Let us evaluate the preferences of society in **Profile 3**:

For (3), we have that society prefers a to b:

- indeed, we have the same relative preferences as in **Profile 1**;

and society prefers b to c:

- indeed, we have the same relative preferences as in **Profile 2**;

By transitivity, we have that society prefers a to c.

We have not imposed any assumptions about the position of a and c in the preference lists of voters other than k, so the society’s choice depends entirely on k; that is, k is a dictator for pairs that do not include b. Since b was chosen arbitrarily, we can repeat this process with c, finding a new pivot k’. Repeating the same reasoning, we find that k’ is a dictator on pairs that exclude c. Since there are pairs that exclude neither b nor c, the dictators k and k’ coincide: it is not possible for two dictators to exist simultaneously.

### Gibbard-Satterthwaite Theorem

This theoretical limitation is even more profound than that suggested by Arrow’s theorem. A subsequent theorem, Gibbard-Satterthwaite’s theorem, shows that the only non-manipulable electoral system is one of a dictatorial type. To avoid overburdening the discussion, I will limit myself to citing the steps of the proof:

#### Outline of Proof

First, it is demonstrated that the non-manipulation property implies monotonicity: if an alternative x improves its position under profile P, and no other voters change their preferences, then x must continue to win. From this, we derive that if all voters agree, then the choice is obligatory. From here, it can be demonstrated that a dictator exists locally, which can then be extended to be a global dictator.

### Gibbard’s Theorem

To conclude this section on structural problems of democracy, let us consider Gibbard’s theorem. This is an extension of Gibbard-Satterthwaite’s theorem, and demonstrates that for any electoral system, one of the following properties holds:

1. The electoral process is dictatorial;
2. There are only two possible choices;
3. The electoral system is manipulable.

## How Important Are These Limitations?

Gibbard’s theorem gives us an important limitation on what an electoral system can achieve, but we must also consider the amount of information needed to manipulate it. One thing is to manipulate a vote with three candidates and three voters, one of the simplest cases; quite another is to manipulate elections with dozens of candidates and millions of voters, as in the case of contemporary democracies. The difficulty is not, in reality, of a purely computational nature, but rather, assuming there is a manipulator, it must obtain the sincere voting intentions of millions of voters, an operation made more difficult, intentionally, through the mechanism of secret ballots.

In any case, we must consider that even if mathematical perfection does not exist, electoral systems can and must be improved. Electoral systems such as the United States’ Electoral College, built to favor Republicans; the complex electoral system in France, built to favor the center-right liberal establishment; and the single-member constituencies in the United Kingdom, are only a few examples of the poor electoral systems that still exist today and that have been built to favor the interests of powerful groups, rather than to guarantee citizen representation. One could argue that these systems are built to create a compromise between stability and representation, but this does not justify the fact that a candidate can theoretically win elections with only a quarter of the votes [(United States)](https://www.npr.org/2016/11/02/500112248/how-to-win-the-presidency-with-27-percent-of-the-popular-vote), or that the party that received the most votes may not be the party with the most representatives in parliament [(France, 2024)](https://fr.wikipedia.org/wiki/Élections_législatives_françaises_de_2024), or that electoral results can be completely different from the votes cast by citizens [(United Kingdom, 2015)](https://en.wikipedia.org/wiki/2015_United_Kingdom_general_election#Results).

[^2]: https://www.britannica.com/topic/democracy

[^3]: https://www.researchgate.net/publication/399568335_Gergana_Dimova_Democracy_Beyond_Elections_Government_Accountability_in_the_Media_Age_London_Palgrave_Macmillan_2020

[^4]: https://www.edizionianicia.it/prodotto/democrazia-e-educazione/

[^5]: https://www.cambridge.org/core/books/participation-and-democratic-theory/75E1EDCA6842303901349FB5D3B0F261

[^6]: https://ourworldindata.org/data-insights/democracies-tend-to-have-lower-levels-of-corruption

[^7]: https://www.americanprogress.org/article/democracies-deliver-better-economic-opportunities-rights-and-health-for-their-people/

[^8]: Slinko, E., Bilyuga, S., Zinkina, J., & Korotayev, A. (2017). Regime Type and Political Destabilization in Cross-National Perspective. _Cross-Cultural Research, 51_, 26 - 50. https://doi.org/10.1177/1069397116676485
