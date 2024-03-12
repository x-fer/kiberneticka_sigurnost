---
title: Netcat
description: Kako koristiti netcat
---

Program netcat je alat za čitanje i pisanje podatka koji koristi TCP i UDP transportnih protokola u računalnim mrežama. Omogućuje skeniranje portova, slušanje na portovima i prebacivanje datoteka. Netcat je vrlo svestran alat koji može biti koristan u različitim situacijama. Ovaj alat dosta se koristi na CTF natjecanjima. Pogledajmo primjer u Linuxu:

```bash
nc mercury.picoctf.net 22902
```

nc je pozivanje programa Netcat. Na drugom mjestu slijedi IP adresa koja može biti i URL, te na kraju je port na koji se spajamo.

## Nice netcat (picoCTF)

Zadatak nam je povezati se s netcatom na host i port:

![niceNetcat](/images/osint/niceNetcat.png)

Ovo ćemo ovako pokrenuti u terminalu:

```bash
nc mercury.picoctf.net 22902 > output.txt
```

Konkretno što znači ovaj dio " > output.txt "? Prvo operator > označava da se izlaz (output) naredbe netcat preusmjerava u file. Taj file smo nazvali output.txt, ako taj file ne postoji on će se kreirati, a ako postoji sadržaj tog filea će se prepisati (overwrite).  Uz to imamo i operator >> koji se ponaša isto uz razliku da u postojeću datoteku output.txt dodaje podatke na kraj bez prebrisavanja (append).

Nakon što izvršimo navedenu naredbu dobijemo:

![niceNetcatData](/images/osint/niceNetcatData.png)

Podsjeća li nas ovo na nešto. Da! Ovo je dekadski zapis u ASCII tablici pa ga pretvorimo u znakove.

![niceNetcatResult](/images/osint/niceNetcatResult.png)

Ovime smo dobili zastavicu.

## Dodatni linkovi

[Netcat Dokumentacija](https://nmap.org/ncat/guide/index.html)