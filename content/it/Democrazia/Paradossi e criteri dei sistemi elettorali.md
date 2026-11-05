---
publish: true
title: Paradossi e criteri dei sistemi elettorali
created: 2026-08-11T17:32:47.693Z
modified: 2026-08-19T17:11:45.982Z
tags:
  - democracy
  - politics
  - economy
  - math
---

[[Paradoxes and Criteria of Electoral Systems|English]]

# I risultati di un sistema imperfetto

Come dimostrato nell'articolo [[Il dilemma democratico]], non esistono sistemi elettorali che possano essere manipolati; non abbiamo tuttavia visto nel dettaglio quali siano le manifestazioni pratiche di questo fenomeno. Passeremo ora in rassegna alcuni criteri che possono essere utilizzati per valutare l'efficacia di un sistema elettorale, con degli esempi di applicazione.

## Criterio della maggioranza

> Se un candidato è il preferito della maggioranza assoluta degli elettori, allora deve essere eletto.

Un esempio di sistema elettorale che fallisce questo criterio è il sistema di voto in cui si vota per i candidati che non si vogliono eleggere, ossia il voto di [antipluralità](https://en.wikipedia.org/wiki/Anti-plurality_voting)
Facciamo un esempio:

| **Numero di elettori** | **Ordine di preferenza** | **Veto assegnato (ultima scelta)** |
| ---------------------- | ------------------------ | ---------------------------------- |
| **60**                 | $A > B > C$              | $C$                                |
| **40**                 | $C > B > A$              | $A$                                |
$A$ è preferito dal 60% degli elettori, ma $B$ ha 0 veti, quindi sarà lui a essere eletto.

## Criterio della sconfitta della maggioranza

> Se la maggioranza assoluta degli elettori non ha dato la sua preferenza a un candidato, allora questo non deve essere eletto.

Questo è il primo esempio di criterio che il maggioritario non soddisfa[^1]. È molto semplice immaginare una votazione con tre candidati in cui nessuno dei tre prende la maggioranza assoluta dei voti. In questo caso il candidato eletto non ha il supporto della maggioranza assoluta degli elettori.

## Criterio della maggioranza mutuale

> Se la maggioranza assoluta degli elettori preferisce un gruppo di candidati a tutti gli altri, allora il vincitore deve essere parte di questo gruppo

Anche in questo caso il maggioritario non soddisfa il criterio. Prendiamo come esempio una situazione con tre candidati e cento elettori.

| **Numero di elettori** | **Ordine di preferenza** | \*\*Voto assegnato \*\* |
| ---------------------- | ------------------------ | ------------------- |
| **25**                 | $A > B > C$              | $A$                 |
| **35**                 | $B > A > C$              | $B$                 |
| **40**                 | $C > A >B$               | $C$                 |
La maggioranza formata da $A$ e $B$ è preferita a $C$ nel 60% dei casi, tuttavia la vittoria andrà a $C$.

## Criterio del vincitore di Condorcet

> Il candidato eletto deve essere in grado di vincere in uno scontro diretto con tutti gli altri candidati.

Da [[Il dilemma democratico#I paradossi nei processi di decisione|Il dilemma democratico]], sappiamo che non sempre esiste un vincitore di Condorcet. Anche quando c'è, non è detto che il maggioritario lo scelga, come accade nell'esempio precedente. Anche sistemi più complessi, come l'[IRV](https://en.wikipedia.org/wiki/Instant-runoff_voting), falliscono questo criterio: prendiamo come esempio una situazione con quattro candidati e cento elettori:

| **Quota elettori** | **Ordine di preferenza** |
| ------------------ | ------------------------ |
| **35 elettori**    | $B > A > D > C$          |
| **33 elettori**    | $C > A > D > B$          |
| **32 elettori**    | $D > A > B > C$          |
| **0 elettori**     | $A$ come 1ª scelta       |
$A$ viene eliminato subito, nonostante sia un vincitore di Condorcet (ossia vince uno scontro diretto con tutti gli altri candidati).

## Criterio dello sconfitto di Condorcet

> Il vincitore delle elezioni non deve essere un perdente di Condorcet, ossia un candidato che perderebbe in uno scontro diretto con tutti gli altri candidati.

L'esempio di [[Paradossi e criteri dei sistemi elettorali#Criterio della maggioranza mutuale]] è valido anche per questo criterio: $C$ perderebbe in uno scontro diretto sia con $A$ che con $B$

## Pareto-Efficienza

> Se tutti preferiscono $A$ a $B$, allora nel risultato delle elezioni la posizione di $A$ deve essere superiore a quella di $B$.

Prendiamo come esempio una situazione di tre candidati e cento elettori con il sistema di voto di anti-pluralità

| **Numero di elettori** | **Ordine di preferenza** | \*\*Veto assegnato \*\* |
| ---------------------- | ------------------------ | ------------------- |
| **100**                | $A > B > C$              | $C$                 |

Nonostante $A$ sia preferito a $B$ unanimemente, a seconda di come il sistema elettorale gestisce lo spareggio, $B$ potrebbe vincere.

## Criterio di appartenenza all'insieme di Smith

> Il vincitore delle elezioni appartiene all'insieme di Smith, ossia il più piccolo insieme tale che per ogni confronto diretto tra due candidati, vince sempre un candidato contenuto nell’insieme.

Essendo l'insieme contenente solo il vincitore di Condorcet un esempio di insieme di Smith, [[#Criterio del vincitore di Condorcet|il criterio del vincitore di Condorcet]] è implicato da questo criterio. Facciamo un esempio con quattro candidati e 33 elettori:

| **Gruppo**   | **Elettori** | **Ordinamento di preferenza** |
| ------------ | ------------ | ----------------------------- |
| **Gruppo 1** | **9**        | $A > C > D > B$               |
| **Gruppo 2** | **8**        | $B > C > A > D$               |
| **Gruppo 3** | **6**        | $C > B > A > D$               |
| **Gruppo 4** | **10**       | $D > C > A > B$               |

L'insieme di Smith è $\{ A,B,C\}$ , ma $D$ è il vincitore delle elezioni.

## Monotonicità

> L'aumento delle preferenze a un candidato non deve peggiorare la sua posizione finale nelle elezioni.

L'IRV è famosamente non monotonico. L'esempio è contenuto nell'articolo [[Come si dovrebbe votare?#Sistemi di voto a preferenza multipla| Come si dovrebbe votare?]]

## Consistenza

> Se si uniscono due insiemi di preferenze in cui $A$ è preferito a $B$, allora il risultato delle elezioni con l'insieme unione come insieme di preferenze deve preferire $A$ a $B$.

L'IRV ha il difetto di non essere consistente. Ecco l'esempio:

### Primo collegio:

| **Elettori** | **Ordine di preferenza** |
| ------------ | ------------------------ |
| **5**        | $A > C > B$              |
| **5**        | $C > B > A$              |
| **3**        | $B > A > C$              |
Vincitore: $A$

### Secondo collegio:

| **Elettori** | **Ordine di preferenza** |
| ------------ | ------------------------ |
| **5**        | $A > B > C$              |
| **6**        | $B > C > A$              |
| **3**        | $C > A > B$              |
Vincitore: $A$

### Unione dei due collegi:

#### Prime preferenze

- **$A$:** $5 + 5 = 10$ voti
- **$B$:** $3 + 6 = 9$ voti
- **$C$:** $5 + 3 = 8$ voti

#### Svolgimento IRV:

1. Round 1: $C$ si trova all'ultimo posto con 8 voti e viene eliminato.
2. Trasferimento dei voti di $C$:
   - I 5 elettori del Collegio 1 ($C > B > A$) passano a **$B$**.
   - I 3 elettori del Collegio 2 ($C > A > B$) passano ad **$A$**.
3. Round 2:
   - **$B$:** $9 + 5 = 14$ voti
   - **$A$:** $10 + 3 = 13$ voti

Quindi $B$ vince le elezioni, nonostante perda nei due collegi se separati.

## Criterio della Partecipazione

> Il fatto di aumentare il numero di preferenze per un candidato non deve fare in modo che lo stesso perda le elezioni.

Come nel caso della monotonicità, questo criterio non è rispettato dall'IRV[^2]

## Voto sincero

> Un elettore non ha incentivi a votare per qualcunno che non sia il suo candidato preferito

Tutti i sistemi di voto che abbiamo visto finora, ad eccezione dell'antipluralità, non sono in grado di soddisfare questo criterio. Tuttavia, nelle elezioni reali, la manipolazione delle preferenze è così complessa che non è possibile stabilire a priori cosa convenga votare se si utilizza un sistema di voto resistente alla manipolazione (Vedi  [[Il dilemma democratico]]).

[^1]: https://en.wikipedia.org/wiki/Plurality_voting

[^2]: [[Come si dovrebbe votare?]]
