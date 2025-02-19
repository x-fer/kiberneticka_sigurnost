---
title: Eye i what3words
description: Reverse Image search
---

Krenimo odmah sa zadatkom :)

## Eye (DarkCTF)

Zadatak je pronaći koordinate mjesta danog na slici.

![Eye](/images/osint/eye.png)

Kako smo govorili i u uvodnom poglavlju (O OSINT-u) možemo iskoristiti neke alate za reverzno pretraživanje slika.

Poslužimo se s Yandex reverse image search alatom.

![Yandex](/images/osint/yandex.png)

Ovom problemu možemo pristupiti na par načina. Jedan rezultat pretraživanja nas je odveo na neku rusku stranicu, nakon prevođenja vidimo da se radi o mjestu Ooty (Udhagamandalam) u Indiji.

![ruskaStranica](/images/osint/ruskaStranica.png)

Nakon malo guglanja.

![Ooty](/images/osint/ooty.png)

Grad je poprilično velik no znamo par stvari: nalazimo se na uzvisini, gledamo u neko brdo i par kućica se vidi.
Kad imamo to znanje možemo pretražiti samo par lokacija na rubu grada i jedna od njih je na slici.

![OotyLocation](/images/osint/eyeLocation.png)

Što izgleda kao naša lokacija. Sad pogledajmo gdje se nalazimo.

![EyeResult](/images/osint/eyeResult.png)

Yay! Pronašli smo naše koordinate.

## what3words twist

Čisto informativno postoji i način zapisivanja lokacije preko alata what3words. Ideja iza njega je ta da čitavu Zemlju podijelimo na površinu od 3x3 metra i dadnemo joj tri riječi odvojene točkom npr. ruler.fixated.smarter.

Npr. ovo je lokacija učionice B1 na FER-u.

![What3words](/images/osint/what3words.png)

## Dodatni linkovi

[What3words](https://what3words.com/troubles.ranges.punks)