---
title: QR
description: Sve o QR
---

QR kodovi (Quick Response codes) su prirodni nastavak barkodova nastali 1994. godine od DENSO Corporation. Pohranjuju podatke u dvije dimenzije u obliku niza područja visokog kontrasta. Koriste markere visokog kontrasta koji omogućavaju skeniranje digitalnom kamerom. Uz navedeno koriste [Reed-Solomon](https://en.wikipedia.org/wiki/Reed–Solomon_error_correction) error correction voljen posebno u radio tehnologijama i satelitskim komunikacijama.
Reed-Solomon se temelji na ispravljanju pogrešaka pri oporavku od greške u čitanju (uzrokovanih mrljom, loše ispisanim kodom ili drugim).

Pogledajmo strukturu QR koda:

![QR](/images/osint/qr.png)

Vidimo da svi QR kodovi imaju nekakvu strukturu te dijele određene elemente:

- Tiha zona (sve "okolo" našeg QR koda)
- Orijentacija (ako QR kod stoji uspravno su raspoređeni u 3 kuta)
- Poravnanje (kvadrat koji sprječava distorziju kamere)
- Vremenske oznake (koriste se za sinkronizaciju čitača)
- Verzija QR koda
- Informacije o formatu

Uz ove postoje i iQR kodovi ali ove godine o njima nećemo govoriti.

No kako su podaci posloženi? Podaci su posloženi u kućice i čitaju se cik-cak. Pogledajmo na slici:

![QRPayload](/images/osint/qrPayload.png)

No što je s error correctionom? Tj. ako je neki dio QR koda oštećen, Reed-Solomon će osigurati da je kod i dalje čitljiv. Što je veći broj zalihosnih bitova, QR kod može pretrpjeti veća oštećenja. Količinu koju možemo oporaviti svrstavamo u par kategorija:

- low (obnavlja 7% podataka)
- medium (obnavlja 15% podataka)
- quartile (obnavlja 25% podataka)
- high (obnavlja 30% podataka)

Sad pogledajmo kako raste kompleksnost QR koda povećavanjem zalihosnih bitova:

![QR Error](/images/osint/qrError.png)

Sad probajte skenirati neke i skužiti zašto rade ili ne rade.

![Scan qr](/images/osint/scanQr.png)

## Broken QR (Tennable CTF 2021)

Dobili smo QR kod koji ne radi, možemo li ga popraviti?

![Broken QR](/images/osint/brokenQr.png)

Odgovor je da i to uz pomoć painta ili nekog drugog alata za modifikaciju slika.

![Broken QR Fix](/images/osint/brokenQrFix.png)

Prvo ćemo iskopirati orijentaciju i zalijepiti ju u gornji lijevi kut. Nakon toga možemo uzeti vremenske oznake i rotirati ih za 90 stupnjeva i zalijepiti na lijevi dio. Na kraju možemo ručno obojiti ostatak podataka (čak i ako smo ovdje u krivu Reed-Solomon nam uskače u pomoć). Na kraju smo dobili QR koji možemo skenirati.

## Dodatni linkovi

[Qr kodovi](https://www.datagenetics.com/blog/november12013/index.html)