---
publish: true
title: Il sistema elettorale perfetto
created: 2026-08-12T12:50:58.852Z
modified: 2026-10-30T11:12:46.629Z
tags:
  - democracy
  - economy
  - math
  - politics
---

[[The Perfect Electoral System| English]]

Nell'articolo [[Il dilemma democratico]], abbiamo visto che non può esistere un sistema elettorale perfetto con una funzione di preferenza qualsiasi, perché questo porterebbe alla presenza di un dittatore; tuttavia, scegliendo una funzione di preferenza che soddisfi alcune condizioni, possiamo ottenere un sistema non manipolabile.

## Preferenze unimodali

Un'assunzione che possiamo fare quando parliamo di preferenze all'interno di uno spettro, come può essere lo spettro della temperatura di una camera oppure quello di uno spettro destra-sinistra, è che ci sia un punto di preferenza massima e che allontanandosi verso gli estremi la preferenza diminuisca: se io preferissi, ad esempio una temperatura di 24°C, per me sarebbe meglio una temperatura di 23°C rispetto a una di 22°C, e simmetricamente, sarebbe meglio una temperatura di 25°C rispetto a una di 26°C.

Matematicamente, assumendo di avere un insieme di alternative $X$, totalmente ordinato e una funzione di preferenza $u$, possiamo definire una funzione di preferenza unimodale se esiste un punto $x^*$ che soddisfa queste due condizioni:

1. Dati $x,y$ appartenenti a $X$, con $x < y \leq x^*$, vale che $u(x) < u(y)$.
2. Se invece vale $x^* \leq x \leq y$, allora vale che: $u(y) < u(x)$l

## Teorema dell'elettore mediano

Assumendo quindi di avere preferenze unimodali ed elettori razionali, cioè elettori che votano sempre l'opzione che garantisce il risultato più desiderato, si dimostra che una funzione che restituisce il voto dell'elettore mediano, ossia, disponendo in ordine gli elettore in base alla loro preferenza, si sceglie come risultato il voto che si trova nel mezzo di questa fila (nella posizione  $\frac{n+1}{2}$), dà come risultato un vincitore di Condorcet.

#### Dimostrazione

Vogliamo dimostrare che, se si vota tra il punto $y$ e il punto mediano, il vincitore sarà il punto mediano.
Prendiamo in considerazione due casi e un numero di elettori $n$ dispari:

##### L'alternativa $y$ è maggiore del punto mediano

Consideriamo tutti gli elettori che hanno come preferenza un punto minore o uguale al punto mediano: per costruzione, questi elettori sono in numero $\frac{n+1}{2}$, cioè una maggioranza stretta degli elettori. Ciascuno di essi preferisce il punto mediano a $y$, quindi il punto mediano ha la maggioranza assoluta degli elettori.

Il secondo caso, quello in cui l'alternativa $y$ è minore del punto mediano,  è simmetrico rispetto al primo.

Nel caso con numero pari di elettori abbiamo un intervallo mediano, che ha come estremi la preferenza del punto in posizione $\frac{n}{2}$ e di quello in posizione $\frac{n}{2}+ 1$. In questo caso è necessario prevedere una regola in caso di parità.

## Teorema di Moulin

Una caratteristica speciale dell'elettore mediano, è che, oltre a dare come risultato un vincitore di Condorcet, la sua scelta garantisce che il sistema elettorale non sia manipolabile, soddisfacendo quindi il requisito che tutti gli elettori votino il candidato che preferiscono sinceramente. Ecco una dimostrazione rapida:

- Consideriamo un votante che ha una preferenza al di sotto della mediana. Votare al di sotto della propria preferenza non cambia la mediana; votare al di sopra di essa può non avere alcun effetto oppure può aumentare la mediana. In ogni caso, il votante non ottiene il risultato desiderato.
- Allo stesso modo consideriamo il caso in cui la preferenza dell'elettore sia al di sopra della mediana. Votare al di sopra della propria preferenza non cambia la mediana; votare al di sotto di essa può non avere alcun effetto oppure può diminuire la mediana: anche in questo caso il votante non ottiene il risultato desiderato.

## Conseguenze e Criticità

Questo sistema ha una caratteristica fondamentale: poiché l'elettore a essere premiato è l'elettore mediano, il centro viene favorito rispetto agli estremi, dunque la convenienza del politico è quella di spostarsi verso il centro, ottenendo sia i voti dei moderati che quelli dei radicali. Nella realtà, però, avvengono due fenomeni che rendono la strategia di spostarsi verso il centro fallimentare, soprattutto se fatto a sinistra: l'inefficacia del modello di preferenza unimodale e l'allontanamento degli elettori dal paradigma della scelta razionale.

1. Spesso gli elettori non hanno una preferenza unimodale, ma bimodale, ossia preferiscono gli estremi rispetto al centro, indipendentemente dall'ideologia degli estremisti. In particolare sembra che ci sia una fascia di elettori che preferisce un'azione concreta del governo rispetto alla percezione di un'inazione [^1].
2. Soprattutto a sinistra, gli elettori preferiscono non votare che votare per un partito che, sebbene sia il più vicino alle loro idee, si trova troppo poco a sinistra. [^2] Questo potrebbe derivare dal fatto che a sinistra il voto tende ad avere valore ideologico e non solo di utilità pratica.

### Conclusioni

L'illusione di una scelta razionale e delle preferenze unimodali, che renderebbero possibile un sistema perfetto, sono sfortunatamente incapaci di spiegare in modo soddisfacente il comportamento degli esseri umani, caratterizzati da comportamenti irrazionali. Questo implica che la strategia dell'elettore mediano, a prima vista così convincente e logica, non è adatta a vincere le elezioni, soprattutto a sinistra. La soluzione, come vedremo in seguito, è la radicalizzazione, che può essere portata avanti in diversi modi.

[^1]: https://www.researchgate.net/publication/271817998_Do_Something_Politics_and_Double-Peaked_Policy_Preferences

[^2]: https://www.cambridge.org/core/books/beyond-social-democracy/losing-the-middle-ground/5BC955192A4328004AE46990F5B54826
