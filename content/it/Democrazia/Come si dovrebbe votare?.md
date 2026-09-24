---
publish: true
title: Come si dovrebbe votare?
created: 2026-08-11T14:55:52.204Z
modified: 2026-09-23T12:18:37.668Z
tags:
  - democracy
  - economy
  - math
  - politics
---

[[How should we vote?|English]]

## Definizioni e terminologia

Votare non è solo l'atto di esprimere la propria volontà politica in quanto sottende una serie di procedure e di regole che determinano lo svolgimento di qualsiasi processo decisionale collettivo. Ci sono due tipi fondamentali di sistemi elettorali:

- I sistemi elettorali in cui è necessario eleggere un singolo candidato
- I sistemi elettorali in cui è possibile eleggere più candidati

La prima parte dell'articolo si occupa del primo tipo, mentre la seconda parte si occupa del secondo.

## Sistemi elettorali a vincitore singolo

### Il maggioritario

Il sistema maggioritario è un sistema decisionale estremamente semplice, in cui si sceglie una singola preferenza in una lista di opzioni e si sceglie l’opzione che ha ottenuto il maggior numero di preferenze.

Quando bisogna compiere una scelta tra due opzioni ci sono due caratteristiche fondamentali da tenere in considerazione:

1. Una delle due opzioni avrà sempre una maggioranza assoluta, escludendo gli astenuti
2. Si impone una singola preferenza, che, in questo caso, comporta di esprimere una preferenza tra tutte le opzioni disponibili.

#### I problemi del maggioritario

Nel momento in cui si cerca di espandere il numero di opzioni disponibili per una scelta la situazione si complica:

1. L'opzione più votata non ottiene necessariamente la maggioranza assoluta.
2. L'elettore dà una singola preferenza facendo perdere qualsiasi ordine di preferenza all'interno della lista di opzioni.

Entrambi questi problemi si traducono in effetti reali, in particolare si verifica l'effetto della cosiddetta [legge di Duverger](https://en.wikipedia.org/wiki/Duverger%27s_law): in un sistema maggioritario, si tende a formare un sistema bipartitico, in quanto un terzo partito finirebbe solo per rubare voti al partito ideologicamente più vicino a sé e un elettore che vota in modo razionale è costretto a non votare partiti emergenti per evitare di disperdere il proprio voto. Un elettore che non segue il paradigma della scelta razionale, invece, potrebbe anche non votare affatto. Tale metodo soffre anche di altri effetti paradossali, ben noti, approfonditi all'interno dell'articolo [[Paradossi e criteri dei sistemi elettorali]].

### Sistemi di voto a preferenza multipla

Per superare i problemi del maggioritario uno dei modi più comuni è quello di adottare un sistema di voto a preferenza multipla.

Il primo metodo che viene in mente è semplicemente quello di permettere all’elettore di esprimere più preferenze; si prende dunque il candidato che ha ottenuto la maggior parte dei voti. Questo sistema di voto è il migliore per prendere decisioni velocemente in situazioni informali. Esiste anche il sistema di voto opposto: si votano i candidati che si vogliono escludere. In entrambi i casi, però, c'è il forte rischio di manipolazione: basta votare (o non farlo) selettivamente per i candidati che hanno il rischio di vincere e non sono graditi.

Un altro sistema è l'utilizzo di sistemi di voto in cui si dà un valore pesato ad ogni candidato: ad esempio assegnando ad ognuno un voto da 1 a 10. Anche in questo caso c'è un forte rischio di manipolazione, attraverso il cosiddetto "burial", ossia la strategia di dare un valore estremamente basso al candidato favorito, nel caso in cui questo non sia il proprio preferito.

Non potendo esistere strumenti perfetti e non manipolabili, a causa dei teoremi di impossibilità esposti in [[Il dilemma democratico]], è necessario trovare un compromesso tra la non manipolabilità e il rispetto di vari criteri, esposti nell'articolo [[Paradossi e criteri dei sistemi elettorali]]. Esponiamo ora l'IRV, l'Instant-runoff voting, il cui funzionamento è questo:

1. Gli elettori esprimono la loro preferenza ordinando i candidati secondo la loro preferenza
2. Il candidato con meno preferenze viene eliminato e i suoi voti redistribuiti in base alle preferenze degli elettori
3. Se non c'è un candidato che supera la maggioranza si ripete il passo 2.

Questo sistema elettorale, seppur migliorato rispetto al maggioritario, ha dei problemi, che non si presentano nei sistemi maggioritari: il problema particolare è quello legato alla mancanza di monotonicità: l'aumento del supporto a un candidato può portare alla sconfitta. Facciamo un esempio con tre candidati e cento elettori:

| Numero di Elettori | Ordine di Preferenza |
| ------------------ | -------------------- |
| 28                 | $A > B >C$           |
| 27                 | $B>C>A$              |
| 45                 | $C > A > B$          |

Nel primo turno si elimina B, che ha 27 preferenze. I voti di B vengono redistribuiti a $C$, che quindi vince con 72 voti.

Ora consideriamo un nuovo caso in cui due elettori di $A$ cambiano idea e decidono di votare $C$. La situazione diventa:

| Numero di Elettori | Ordine di Preferenza |
| ------------------ | -------------------- |
| 26                 | $A > B >C$           |
| 27                 | $B>C>A$              |
| 47                 | $C > A > B$          |

Questa volta si elimina $A$, che ha 26 preferenze. I voti vanno a $B$, che quindi vince le elezioni con 53 voti.

Il sistema elettorale migliore in questo caso è [il metodo di Tideman](https://en.wikipedia.org/wiki/Ranked_pairs)[^1]. Il metodo consiste nel valutare la preferenza tra tutte le possibili coppie di candidati singoli, per poi usarle per determinare un vincitore, partendo dalle coppie con una differenza di preferenze più alta in ordine discendente. Prendiamo in considerazione il caso di prima:

- $A$ contro $B$:
  - Preferiscono $A$: $28 + 45 = 73$
  - Preferiscono $B$: $27$
  - $A$ vince contro $B$ con un margine di $46$ voti
- $C$ contro $A$:
  - Preferiscono $C$: $27+45 = 72$
  - Preferiscono $A$: $28$
  - $C$ vince contro $A$ con un margine di $44$ voti
- $B$ contro $C$:
  - Preferiscono $B$: $28 + 27 =55$
  - Preferiscono $C$: $45$
  - $B$ vince contro $C$ con un margine di $10$ voti

Ordiniamo ora le coppie in ordine discendente:
1\. $A > B$  $(+46)$
2\. $C > A$ $(+44)$
3\. $B > C$ $(+10)$

Fissiamo $A > B$ , poi proviamo a fissare $C>A$ e otteniamo il risultato $C > A > B$; proviamo a fissare $B>C$ ma non riusciamo, in quanto questo creerebbe un ciclo.

Questo metodo funziona anche in caso di ordinamenti parziali, in quanto si assumono all'ultimo posto in parità tutte le scelte che non sono state assegnate.

## Sistemi elettorali a vincitore multiplo

Esistono alcuni casi, come ad esempio le elezioni dei membri dei parlamenti, in cui è possibile che più candidati vincano. La soluzione più semplice a questo problema è dividere del territorio del paese in distretti elettorali, ognuno dei quali con uguale popolazione, per poi utilizzare il sistema maggioritario per assegnare i singoli distretti. Abbiamo così ottenuto un sistema elettorale maggioritario a vincitore multiplo attraverso i cosiddetti seggi uninominali. Questa estensione del maggioritario soffre di tutti i difetti del sistema da cui deriva.

### Gerrymandering

La divisione del territorio in circoscrizioni elettorali crea un problema: lo stesso territorio, diviso in distretti con forme diverse, può avere risultati elettorali variegati. Facciamo un esempio con una popolazione di 25 abitanti da dividere in 5 distretti. Supponiamo che il 60% degli elettori voti il partito $A$ e il 40% il partito $B$. Se li dividiamo uniformemente nei cinque distretti, otterremo tre distretti per il partito $A$ e due per il partito $B$, ma possiamo dividerli anche in altro modo: per esempio potremmo fare due distretti contenente solo elettori di $A$ e dividere in modo uniforme gli elettori rimanenti nei restanti tre distretti. In questo modo il partito $B$ otterebbe tre distretti pur essendo stato votato da una minoranza degli elettori. Nel caso di un sistema non bipartitico, come ad esempio il Regno Unito, questo fenomeno può essere ancora più accentuato: ad esempio nelle ultime elezioni il Partito Laburista ha ottenuto il 33% dei voti e il 63% dei seggi (mentre Reform UK di Nigel Farage ha ottenuto meno dell'1% dei seggi con il 14% dei voti)[^2]. In quest'ultimo caso il gerrymandering non è volontario, ma in molti altri casi lo è, come nel caso di alcuni distretti all'interno del [collegio elettorale statunitense](https://thefulcrum.us/electoral-reforms/worst-gerrymandered-districts). Ironicamente, il modo migliore per combattere il gerrymandering, senza modificare il sistema elettorale, sarebbe proprio quello di manipolare i distretti in modo da avere come risultato l'elezione dei candidati in modo proporzionale al voto.

### Il proporzionale

Il modo più semplice per distribuire i seggi in funzione delle scelte degli elettori è il sistema proporzionale: ogni partito riceve un numero di seggi proporzionale al numero di voti ottenuti.
I problemi principali di questo sistema sono:

1. l'impossibilità di esprimere più di una preferenza,
2. la soglia di sbarramento,
3. la maggiore difficoltà a formare un governo stabile.
   Il primo problema è dovuto principalmente al secondo: molte persone non votano partiti da cui sono sinceramente attratte per via della paura che il partito non superi la soglia di sbarramento, castrando i piccoli partiti. Il terzo problema è dovuto al fatto che difficilmente un partito riesce a ottenere una maggioranza assoluta dei voti: è quasi sempre necessario formare una coalizione di governo e non sempre il primo partito riesce a governare, come successo, ad esempio, [dopo le elezioni del parlamento spagnolo nel 2023](https://es.wikipedia.org/wiki/Elecciones_generales_de_España_de_2023). Questo non è necessariamente un problema: una coalizione di governo può comunque rappresentare la maggioranza assoluta degli elettori, ma il fenomeno della "große Koalition", ossia di una coalizione di governo composta da partiti eterogenei ideologicamente, ai fini della formazione del governo, può essere visto come una forma di tradimento che rende il proprio voto inutile: i cittadini sentono che il loro voto non ha vere ripercussioni sul governo e che i politici non sono responsabili del loro operato.

#### Premi di maggioranza

Un modo per risolvere il problema della governabilità è quello di premiare i partiti che riescono a raggiungere la maggioranza relativa dei voti. Il suo uso è molto pericoloso, in quanto dare grandi maggioranze ai singoli partiti può portare a derive autoritarie: questo accade quando i partiti ottengono una maggioranza qualificata (solitamente i $\frac{2}{3}$ dei seggi) che permette loro di mettere mano alla Costituzione o di manipolare gli organi di controllo.

### L'STV e il PAV

Non esiste un consenso accademico su quale sia il miglior sistema elettorale a vincitore multipli. Esistono fondamentalmente due soluzioni:

1. STV (Single Transferable Vote)
2. PAV (Proportional Approval Voting)
   Nel primo caso l’elettore può esprimere più preferenze, ordinandole in base alla propria preferenza. Se un partito non supera la soglia necessaria a ottenere un seggio oppure ottiene più voti di quanti siano necessari a vincere il seggio, questi vengono ridistribuiti. Il funzionamento è simile all'[[#Sistemi di voto a preferenza multipla| IRV]]; esistono dei sistemi correttivi come il [CPO-STV](https://en.wikipedia.org/wiki/CPO-STV) che compara il risultato di tutte le possibili elezioni per trovare quella che più si avvicina al risultato desiderato dagli elettori. Non tutti i problemi sono risolti: ad esempio, anche il CPO-STV non possiede la proprietà di monotonicità, ma è più difficile da manipolare rispetto all'STV tradizionale. Il più grande problema è la difficoltà computazionale: trovare il risultato per un'elezione fatta con il CPO-STV senza computer è praticamente impossibile.

Il [PAV](https://en.wikipedia.org/wiki/Proportional_approval_voting) funziona in modo diverso: si scelgono tutti i candidati che si gradiscono (senza ordinarli). Dopodiché si valuta ogni possibile risultato elettorale e gli si assegna un punteggio. Il numero di voti per ogni candidato viene moltiplicato per $H(r) = 1 +\frac{1}{2}+ \dots + \frac{1}{r}$, dove $r$ è il numero di candidati eletti. Lo scenario con il maggior numero di punti vince. Facciamo un esempio con tre candidati e due eletti:
consideriamo i tre candidati $A,B,C$ e tre gruppi di elettori:

1. il primo gruppo ha votato $A, B$  (45%)
2. il secondo gruppo ha votato $C$ (35%)
3. il terzo gruppo ha votato $A$ (20%)
   Costruiamo la tabella con i possibili risultati elettorali:

| **Eletti** | Punteggio Gruppo 1 (45)              | Punteggio Gruppo 2 (35) | Punteggio Gruppo 3 (20) | Punteggio Totale |
| ---------- | ------------------------------------ | ----------------------- | ----------------------- | ---------------- |
| $A, B$     | $45 \times (1 + \frac{1}{2}) = 67,5$ | $35 \times 0 = 0$       | $20 \times 1 = 20$      | 87,5             |
| $A, C$     | $45 \times 1 = 45$                   | $35 \times 1 = 35$      | $20 \times 1 = 20$      | **100**          |
| $B, C$     | $45 \times 1 = 45$                   | $35 \times 1 = 35$      | $20 \times 0 = 0$       | 80               |

Il risultato è quindi $A,C$. Questo sistema di voto, diversamente dall'STV, soddisfa il criterio di monotonicità. Il problema più grande di questo metodo è la sua grande richiesta di sforzo computazionale: per ogni seggio aggiunto si devono calcolare il doppio dei possibili risultati.  Per approssimare questo problema si può usare il metodo chiamato [SPAV](https://en.wikipedia.org/wiki/Sequential_proportional_approval_voting) (Sequential Proportional Approval Voting) che segue questo schema logico:

1. Ogni voto vale $\frac{1}{\text{Numero dei candidati già eletti } + 1}$
2. Si elegge il candidato con più voti.
3. Se ci sono ancora seggi da assegnare, si ritorna al punto 1.

Questo metodo è computazionalmente molto più semplice e può essere implementato anche a mano.

Personalmente preferisco il CPO-STV nel caso di paesi senza una struttura federale e una forma di CPO-STV applicato su collegi plurinominali in una circoscrizione elettorale che sia il più ampia possibile, in modo da limitare il più possibile gli effetti del gerrymandering, nei paesi in cui è necessario avere un equilibrio di potere tra un governo centrale e un governo locale. In un mondo ideale con potenza di calcolo illimitata, preferirei il PAV in quanto ha la proprietà di monotonicità.

[^1]: Schulze, M. (2023). Comment on “The best Condorcet‑compatible election method: Ranked Pairs”. _Constitutional Political Economy, 35_, 439 - 442. https://doi.org/10.1007/s10602-023-09415-y

[^2]: https://en.wikipedia.org/wiki/2024_United_Kingdom_general_election
