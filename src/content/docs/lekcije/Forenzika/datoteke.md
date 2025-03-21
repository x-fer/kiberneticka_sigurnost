---
title: Datoteke
description: Što su to zapravo datoteke
---

Krenimo sad sa jednim jednostavnim primjerom. Preuzmimo zadatke i pogledajmo zad1.pdf daototeku.

![Folder](/images/forenzika/folder1.png)

Na prvu nam se čini kao da je ovo obična pdf datoteka no ako ju pokušamo otvoriti dobijemo.

![Opening](/images/forenzika/cannot_open.png)

Na prvu možemo predpostaviti da je datoteka uistinu oštećena no pogledamo je li to uistinu točno. Datoteku možemo otvoriti u programima kao što su xxd ili neki drugi.

Pogledajmo ono što datoteku uistinu čini slikom, a to su magic bytes (file signatures). Magic bytes su bitovi na početku datoteke koji označavaju tip datoteke. Svaki tip datoteke ima svoj unikatne magic bytes. Cijelu listu njih možete pronaći na [Poveznici](https://www.garykessler.net/library/file_sigs.html)

Ako bolje pogledamo naš file signature vidimo da odgovara file signatureu JPEG datoteke, što znači da je ovo slika, a ne PDF dokument.

![File Signature](/images/forenzika/xxd1.png)

Sad kad znamo tu informaciju možemo jednostavno koristeći naredbu mv preimenovati u točnu datoteku i sad dobijemo sliku.

```bash
mv zad1.pdf zad1.jpg
```

![Result](/images/forenzika/zad1_result.png)

Sad vidimo da nastavak datoteke (filename extention) zapravo ne znači puno. Već više služi samom operacijskom sustavu kao uputstvo kako će se nositi s danom datotekom. Upravo ta oznaka daje doznanja operacijskom sustavu da recimo pdf datoteku treba poslati programu koji čita i prikazuje pdf datoteke, isto je i za slike, videa itd.

Uz sve navedeno možemo koristiti i program koji se zove file. File zapravo radi istu stvar, pročita file signature i pogleda strukturu daoteteke te dadne malo više informacija.

```bash
file zad1.pdf
```

