---
title: Strings
description: Naredba strings
---

Strings je vrlo jednostavan alat koji u bilo kojem tipu podataka traži duljinu ispisive znakove (barem 4 smislena znaka). Kraj stringa koji se može ispisati označava znak koji se ne može ispisati. Zastavica -n označava koliku duljinu stringa tražimo.

Prisjetimo se da je svaki file zapravo niz nula i jedinica, pa ga možemo otvoriti u nekom hex editoru npr.

![Hex](/images/osint/hex.png)

Ovdje će naš program strings ispisivati riječi: RIFF, WAVEfmt, data itd.

Pogledajmo konkretan primjer.

## strings it (picoCTF)

![Strings it](/images/osint/strings-it.png)

Idemo pokrenuti naredbu strings nad njim.

```bash
strings strings
```

![Strings output](/images/osint/stringsOutput.png)

Vidimo da je izlaz naredbe strings prevelik da se prikaže u terminalu. Tu imamo opciju koristiti > o čemu smo pričali u poglavlju prije ili novi operator |.

```bash
strings strings | grep "pico"
```

Operator | (pipe) je operator koji će izlaz programa s lijeve strane (STDOUT) prebaciti na ulaz (STDIN) programa na desnoj strani na daljnju obradbu. Zanimljiva stvar je to da možemo ulančavati pipeove. Razlika između > i | je to što redirect proslijedi izlaz u datoteku a ne u drugi program.

Naredba grep pretraživa traženu riječ u tekstu. Kod nas je tražena riječ "pico" jer znamo da je flag oblika "picoCTF{}".

Nakon što sad izvršimo našu naredbu, dobijemo.

![Strings-it result](/images/osint/stringsItResult.png)

## Dodatni linkovi

- [strings](https://linux.die.net/man/1/strings)
- [Redirection vs pipe](https://askubuntu.com/questions/172982/what-is-the-difference-between-redirection-and-pipe)