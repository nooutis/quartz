---
publish: true
title: Il dilemma democratico
created: 2026-05-20T15:57:50.875Z
modified: 2026-08-11T15:39:11.727Z
---

# Tra Necessità e Impossibilità

> [“In questo mondo di peccato e di dolore sono state sperimentate molte forme di governo, e altre ne seguiranno. Nessuno pretende che la democrazia sia perfetta o infallibile. Anzi, è stato detto che la democrazia è la peggiore forma di governo, a parte tutte le altre che sono state sperimentate di volta in volta”](https://api.parliament.uk/historic-hansard/commons/1947/nov/11/parliament-bill)
>
> Winston Churchill, House of Commons, 11 Novembre 1947, 207

## Cosa è la democrazia?

È necessario, come prima cosa, chiarire cosa sia la democrazia: in generale, è un termine ombrello che identifica diversi ordinamenti politici e sociali, caratterizzati dalla partecipazione di tutti i membri di una comunità alla gestione del potere, sia esso politico, economico, familiare o di altro tipo. Il termine nasce in contesto esclusivamente politico, ma si è successivamente espanso fino a comprendere qualsiasi contesto sociale [^2][^3]: si parla quindi di democrazia economica, democrazia sul posto di lavoro e di pedagogia democratica. [^4][^5]. Prima di esaminare i limiti dei processi decisionali democratici, è importante spiegare il motivo per cui sono necessari e preferibili: fondamentalmente, la democrazia ha due vantaggi rispetto ad altre forme di governo: esse tendono ad essere più giuste e funzionare meglio. Riprendendo la prospettiva di John Rawls, è possibile considerare la democrazia come intrinsecamente giusta perché attua l’uguaglianza formale e politica dei cittadini,  permettendo agli stessi di partecipare alla creazione delle norme a cui sono sottoposti: partendo dal presupposto che gli esseri umani siano uguali nei diritti e che una società sia giusta quando gli individui raggiungono un accordo astraendosi da ogni interesse particolare, individuale o privato, si raggiunge la conclusione che è possibile parlare di giustizia solo quando la partecipazione è collettiva. Per quanto riguarda la funzionalità, la presenza di forti istituzioni democratiche è correlata a minori tassi di corruzione, a prosperità economica e a una maggiore qualità della vita. [^6][^7] . Esiste anche una questione di stabilità: le democrazie ben consolidate tendono a essere più stabili rispetto a altre forme di governo: il riferimento non è tanto alla longevità dei governi o alla loro omogeneità ideologica, quanto piuttosto al fatto che le democrazie, quando ben consolidate, tendono a mantenere le proprie caratteristiche strutturali anche in periodi di crisi. In particolare vale una relazione simile a quella di un ferro di cavallo: le autocrazie più spietate, spesso economicamente legate alla produzione di materie prime, tendono ad essere stabili, insieme alle democrazie più consolidate, mentre i regimi intermedi, tendono a essere più instabili e ad avere cambiamenti strutturali più frequenti. [^8]
Nell'ambito dell'organizzazione politica, esistono principalmente due forme in cui si può implementare il processo decisionale democratico:

1. La democrazia rappresentativa, in cui gli elettori utilizzano processi decisionali per scegliere i propri rappresentanti, che possono avere più o meno libertà di azione in base al sistema di riferimento.
2. La democrazia diretta, in cui gli elettori partecipano direttamente al processo decisionale, senza intermediari, utilizzando strumenti come il referendum.
   In entrambi i casi, è necessario definire un sistema che assegni alle preferenze degli elettori un risultato, che può essere la scelta di uno o più candidati da eleggere, l'abrogazione o l'approvazione di una legge, ecc.

## I paradossi nei processi di decisione

Se valutiamo la qualità di un sistema politico in base alla sua capacità di orientare le decisioni politiche in modo che realizzino la volontà della collettività, cercando di soddisfare i bisogni della maggior parte dei cittadini, dobbiamo prendere in considerazione gli effetti dei sistemi utilizzati per prendere le decisioni. Per quanto sia essenziale  il primo fenomeno interessante da analizzare è il paradosso di Condorcet, che si verifica quando si impone un ordinamento totale di preferenza in un sistema con tre o più candidati. Un ordinamento totale di preferenza è una lista di preferenze di candidati in cui valgono le seguenti proprietà per ogni candidato $a$, $b$ e $c$ nella lista di candidati (il simbolo “$\leq$” indica che il secondo elemento è preferito al primo oppure che sono equivalenti):

1. $a \leq a$ (Ogni elemento è evidentemente equivalente a se stesso)
2. Se $a \leq b$ e $b \leq c$, allora $a \leq c$ (Proprietà transitiva)
3. Se $a \leq b$ e $b \leq a$, allora $a = b$
4. Per ogni coppia di elementi, abbiamo che $a \leq b$ oppure $b \leq a$ (Questo è ciò che rende l'ordinamento totale)
   In questo caso è possibile che il risultato delle elezioni dipenda interamente dall’ordine in cui sono presentate le votazioni. Facciamo un esempio con tre elettori e tre candidati:

| Elettore | Prima scelta | Seconda scelta | Terza scelta |
| -------- | ------------ | -------------- | ------------ |
| $A$      | $X$          | $Y$            | $Z$          |
| $B$      | $Y$          | $Z$            | $X$          |
| $C$      | $Z$          | $X$            | $Y$          |
La maggioranza preferisce $X$ a $Y$ ($A$ e $C$ contro $B$), $Y$ a $Z$ ($A$ e $B$ contro $C$) e infine $Z$ a $X$ ($B$ e $C$ contro $A$). Mettendo insieme queste informazioni si ottiene l’assurda relazione per cui $X$ è meglio di $Y$, che è meglio di $Z$, che è meglio di $X$. Non esiste quindi un vincitore assoluto e il risultato finale dipende da una scelta arbitraria dei singoli candidati.

### Il teorema di impossibilità di Arrow

Ancora più sorprendente è il teorema di impossibilità di Arrow che, ponendo quattro criteri per un sistema elettorale, dimostra che non è possibile soddisfarli. I quattro criteri sono:

1. Per ogni risultato delle votazioni deve essere possibile trovare un vincitore
2. Se tutti gli elettori preferiscono $X$ a $Y$, allora $X$ sarà preferito a $Y$ dal sistema elettorale
3. Se due profili di preferenze concordano su $X$ e $Y$, allora anche il sistema elettorale deve concordare su $X$ e $Y$, ossia non devono esistere candidati spoiler.
4. Non deve esistere un individuo il cui solo voto determina il risultato delle elezioni.

#### [Dimostrazione](http://dido.econ.yale.edu/~gean/art/p1116.pdf)

Dimostriamolo prendendo in considerazione di avere:

- un insieme di elettori $N = \{1,2,\dots,n\}$ con $n \geq 2$ ;
- un insieme di candidati $X$ contenente almeno $4$ elementi
  Consideriamo un candidato, $b \in X$ e supponiamo che ogni elettore abbia posto $b$ in fondo alla propria lista di preferenze. Ne deduciamo che $b$ deve essere in fondo alla lista di preferenze (2). Ora supponiamo che $b$ passi dal fondo al primo posto nella lista di preferenze per ogni elettore, uno a uno, finché, arrivati all'elettore $n$, la proprietà (2) fa in modo che $b$ sia il candidato preferito dal sistema elettorale.

Sappiamo quindi che esiste un singolo elettore, che chiamiamo $k$, che rappresenta il pivot di questo processo: è, cioè, l'elettore dopo cui $b$ passa a essere il candidato preferito dal sistema elettorale.

Consideriamo quindi i seguenti profili:

- **Profilo 1**: I votanti $1, \dots, k-1$ hanno $b$ come candidato preferito; i votanti $k,\dots,n$ hanno $b$ in fondo. Il sistema elettorale pone $b$ in fondo alla lista di preferenza
- **Profilo 2**: Il votante $k$ ha scelto $b$ come candidato preferito. I votanti $1,\dots,k$ ora hanno $b$ come candidato preferito: il sistema elettorale pone $b$ come candidato preferito

Consideriamo ora altri due candidati  $a$ e $c$, diversi da $b$. Costruiamo ora il **Profilo 3**:
il votante $k$ cambia le sue preferenze in modo tale da avere la seguente catena di preferenze: $a >b>c$.  Gli altri elettori cambiano la loro preferenza mantenendo $b$ nella stessa posizione in cui si trovava prima.

Valutiamo le preferenze della società nel **Profilo 3**:
Per (3), abbiamo che la società preferisce $a$ a $b$:

- infatti abbiamo le stesse preferente relative del **Profilo 1**;
  la società preferisce $b$ a $c$:
- infatti abbiamo le stesse preferente relative del **Profilo 2**;
  Per la transitività, abbiamo che la società preferisce $a$ a $c$.

Non abbiamo imposto ipotesi sulla posizione di $a$ e $c$ nelle liste di preferenze degli elettori diversi da $k$, quindi la scelta della società dipende interamente da $k$, ossia $k$ è un dittatore per le coppie che non includono $b$. Dato che $b$ è stato scelto arbitrariamente, possiamo ripetere il questo processo con $c$, trovando un nuovo pivot $k'$. Ripercorrendo lo stesso ragionamento, abbiamo che $k'$ è un dittatore sulla coppie che escludono $c$. Visto che esistono delle coppie che non includono né $b$ né $c$, il dittatore $k$ e $k'$ coincidono: non possono esistere due dittatori contemporaneamente.

### Teorema di Gibbard-Satterthwaite

Questa limitazione teorica è ancora più profonda di quanto il teorema di Arrow suggerisca: un teorema successivo, il teorema di Gibbard-Satterthwaite, mostra che l'unico sistema elettorale non manipolabile è di tipo dittatoriale. Per evitare di appesantire eccessivamente il discorso, mi limito a citare i passaggi della dimostrazione:

#### Bozza di dimostrazione

Come prima cosa si dimostra che la proprietà di non manipolabilità implica la monoticità: se un'alternativa $x$ vince sotto il profilo $P$. e uno o più elettori migliorano la posizione di $x$ senza modificare le altre, allora $x$ deve continuare a vincere. Da questo deriviamo che se tutti gli elettori concordano, allora la scelta è obbligata. Da qui si può dimostrare che esiste un dittatore locale, che può essere poi esteso all'essere un dittatore globale.

### Teorema di Gibbard

Per concludere questa sezione sui problemi strutturali della democrazia, consideriamo il teorema di Gibbard. Questo è un'estensione del teorema di Gibbard-Satterthwaite, e dimostra che, per ogni sistema elettorale, vale una delle seguenti proprietà:

1. il processo elettorale è dittatoriale;
2. ci sono solo due possibilità di scelta;
3. il sistema elettorale è manipolabile;

## Quanto sono importanti questi limiti?

Il teorema di Gibbard ci dà un limite importante a ciò che permette di fare un sistema elettorale, ma bisogna anche considerare la quantità di informazioni necessarie per manipolarlo: una cosa è manipolare un voto con tre candidati e tre elettori, uno dei casi più semplici, un’altra cosa è manipolare elezioni in cui ci sono decine di candidati e milioni di elettori, come nel caso delle democrazie contemporanee. La difficoltà, non è, in realtà, di carattere puramente computazionale, ma immaginando che ci sia un manipolatore, esso dovrebbe ottenere le intenzioni di voto sincere di milioni di elettori, operazione resa più difficile, volontariamente, attraverso il meccanismo del voto segreto.
In ogni caso bisogna considerare che , anche se non esiste la perfezione matematica, i sistemi elettorali possono e devono essere migliorati: sistemi elettorali come il collegio  elettorale  statunitense,  costruito per favorire i Repubblicani, il complesso sistema elettorale francese, costruito per favorire l'establishment liberale di centro-destra e i collegi uninominali del Regno Unito, sono solo alcuni esempi dei pessimi sistemi elettorali che esistono ancora oggi e che sono stati costruiti per favorire gli interessi di gruppi di potere e non per garantire la rappresentanza dei cittadini. Si potrebbe argomentare che questi sistemi siano costruiti per creare un compromesso tra stabilità e rappresentanza, ma questo non giustifica il fatto che un candidato possa teoricamente vincere le elezioni con un quarto dei voti [(Stati Uniti)](https://www.npr.org/2016/11/02/500112248/how-to-win-the-presidency-with-27-percent-of-the-popular-vote), o che il partito più votato possa non essere il partito con più rappresentanti in parlamento [(Francia, 2024)](https://fr.wikipedia.org/wiki/Élections_législatives_françaises_de_2024), oppure che i risultati elettorali possano essere completamente diversi rispetto ai voti espressi dai cittadini [(Regno Unito, 2015)](https://en.wikipedia.org/wiki/2015_United_Kingdom_general_election#Results).

[^2]: https://www.britannica.com/topic/democracy

[^3]: https://www.researchgate.net/publication/399568335_Gergana_Dimova_Democracy_Beyond_Elections_Government_Accountability_in_the_Media_Age_London_Palgrave_Macmillan_2020

[^4]: https://www.edizionianicia.it/prodotto/democrazia-e-educazione/

[^5]: https://www.cambridge.org/core/books/participation-and-democratic-theory/75E1EDCA6842303901349FB5D3B0F261

[^6]: https://ourworldindata.org/data-insights/democracies-tend-to-have-lower-levels-of-corruption

[^7]: https://www.americanprogress.org/article/democracies-deliver-better-economic-opportunities-rights-and-health-for-their-people/

[^8]: Slinko, E., Bilyuga, S., Zinkina, J., & Korotayev, A. (2017). Regime Type and Political Destabilization in Cross-National Perspective. _Cross-Cultural Research, 51_, 26 - 50. https://doi.org/10.1177/1069397116676485
