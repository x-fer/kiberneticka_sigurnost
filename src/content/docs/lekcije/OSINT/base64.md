---
title: Base64
description: Kratki opis base64
---

Base64 je način enkodiranja podataka u internet komunikaciji. Njime se pretvaraju (enkodira) binarni podatci u tekstualni oblik. To nam omogućava da lakše prenesemo podatke preko mreže, npr. slike, videe, arhive i slično. Uglavnom svugdje se koristi i omogućuje da podatci butu čitljivi ljudima. 
Nije kriptografski siguran pa se ne koristi se za enkripciju. Pogledajmo tablicu.

![base64](/images/osint/base64.png)

Znamenka u Base64 predstavlja 6 bitova te ima problem s pretvaranjem Unicodea. Unicode je standard za predstavljanje i kodiranje tekstualnih znakova iz različitih jezika i kultura širom svijeta. 
Opći workaround je ovaj: Unicode → Binary format → Base64, a za nazad je potrebna informacija formata.

Budući da se znakovi zapisuju u 8 bitnom zapisu a base64 tablica je 6 bitna, to nam znači da će se u nekim trenutcima morati dodati padding. To popunjavanje praznina (padding) će se dodavati sve dok duljina originalnog stringa ne bude djeljiva sa 6. Padding označavamo znakom "=". Primjer base64 stringa.

![base64string](/images/osint/base64encoded.png)

Uz base64 postoje i base256, base32, base16 i slično. Vidimo da broj nakon riječi base određuje veličinu tablice.

## Repetitions (picoCTF)

![Repetitions](/images/osint/repetitions.png)

Zadatak se nalazi u materijalima.

Dobili smo base64 (b64) enkodiran string i trebamo ga dekodirati. Za ovo možemo koristiti program [base64decode](https://www.base64decode.org), a i uz to CyberChef će isto poslužiti. Pa pokušajmo dekodirati.

![RepetitionsTry](/images/osint/repetitonsTry.png)

Hm vidimo da nismo dobili željeni izlaz no primjećujemo da se base64 dekodirao u drugi base64! Ovo znači da se base64 može enkodirati u samog sebe neograničen broj puta!

Ako ponovimo proceduru dekodiranja još par puta dobivamo:

![RepetitionsResult](/images/osint/repetitonsResult.png)

## Dodatne informacije
- [Base64](https://www.freecodecamp.org/news/what-is-base64-encoding/)