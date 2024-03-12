---
title: ASCII
description: Kratki opis ASCII i base64
---

Za početak podsjetit ćemo se naše dobre stare ASCII tablice.

![ASCII](/images/osint/ascii.png)

ASCII (American Standard Code for Information Interchange) je 7 bitovno enkodiranje znakova koji predstavlja standard u komunikacijama. Od 128 pozicija (CodePoint) 95 njih je moguće ispisati, dok su ostali znakovi 
specijalne operacije npr. (kraj teksta, tabulator, escape i slično). Razlog tomu što je ASCII 7 bitovni je to što
u vrijeme njegovog nastanka nije postojao standard spremanja znakova u 8 bitova (1 bajt). Postoji ASCII opcija 
i od 8 bita koja sadržava dodatne funkcionalnosti i znakove. Gornja tablica nam je vrlo zgodna jer uz dekadski sustav prikazuje još i heksadekadsku znamenku. 

## ASCII Numbers (picoCTF)

Razmotrimo zadatak:

![ASCIINumbers](/images/osint/asciiNumbers.png)

Vrlo jednostavno, trebamo pretvoriti ovaj zapis iz heksadekadskog sustava u ASCII znakove. Za ovo možemo koristiti program [CyberChef](https://gchq.github.io/CyberChef/). Alat funkcionira kao kuharica, na ulaz ćemo staviti niz znakova, odaberemo recept "From Hex" te pritisnemo Bake! U output polju je naše rješenje.

![CyberChef](/images/osint/cyberchef.png)

## Dodatne informacije
- [ASCII tablica](https://www.asciitable.com/)
- [Why ASCII is 7 bit](https://stackoverflow.com/questions/14690159/is-ascii-code-in-matter-of-fact-7-bit-or-8-bit)