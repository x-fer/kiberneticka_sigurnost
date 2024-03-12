---
title: Zvuk
description: O zvuku
---

Za kraj ćemo se malo baviti zvukom pa krenimo od osnova digitalnog zvuka. Digitalni zvuk pretvara se iz analognog uz pomoć PCM (Pulse-code modulation) metode. Kad se analogni zvuk (sinusoida) pretvara u digitalnu reprezentaciju ona će se nastojati aproksimirati tako što će se uzorkovati u uniformnim intervalima. Te uniformne intervale nazivamo **sampling rate**. To znači da je zvuk uzorkovan n puta u sekundi npr. (48000 Hz) je 48000 puta u sekundi. Svaki taj uzorak ima ono što zovemo **bit depth**. Taj bit depth predstavlja y os i govori kolika je razina uzorka. Ono što želimo postići je to da imamo veliko uzorkovanje i velik bit depth jer nam to daje bolju aproksimaciju analognog zvuka. U slučaju da su ti brojevi niski dobit ćemo zvuk koji zvuči "robotski". Pogledajmo sliku i različite brojeve uzorkovanja i bit deptha.

![PCM](/images/osint/pcm.png)

Uz navedeno zvuk ima o svoje kanale ako je jednokanalni to zovemo mono zvuk. Ako zvuk ima recimo 2 kažemo da je stereo (2.0) u slučaju da ima subwoofer tad je (2.1). Naravno npr. kućno kino označava 5.1 sustav itd. Broj prije . je broj zvučnika .1 je subwoofer.

![kanali](/images/osint/sound.png)

Pređimo na zadatak.

## Challan (ZSIS CTF)

Dobili smo audio file (u materijalima), ako ga krenemo slušati čujemo da nije obična glazba i nije ugodan za uši.

Ako razmislite više zvuči kao neki prijenos podataka (podsjeća na stari žičani internet preko telefona). Ok ako je ovo prijenos podataka kako bi onda to funkcioniralo. Tada u priču dolazi FSK (Frequency-shift keying).

![FSK](/images/osint/fsk.png)

To funkcionira tako da uzmemo naše podatke te ih moduliramo na carrier wave. Taj nositelj je konstantni val kojeg generira generator i na kojeg se moduliraju naši podaci. Na kraju se dobiva modulirani val s našim podacima.

Sad ćemo iskoristiti program [minimodem](http://www.whence.com/minimodem/) da dekodiramo.

```bash
minimodem -a -r 1200 -f snimka.wav
```

Opcija -a označava da se automatski pokušaju detektirati oznake iz signala. Opcija -r postavlja na funkciju na receive što znači da očekujemo primitak signala (logično jer dekodiramo snimku). Nakon toga dolazi brojka 1200 što označava baudmode. Baudmode je brzina prijenosa znaka u komunikacijskom kanalu po sekundi što znači da mi očekujemo 1200 znakova u sekundi. Ova brojka jedna je od defaultnih brojki pa ju nismo trebali pogađati. Idemo sad dekodirati signal.

![Minimodem](/images/osint/minimodem.png)

Ok dekodirali smo no na što nas podsjeća ovaj izlaz? Base64! Sad možemo iskoristiti opet jedan od online alata ili ga čak možemo pipeati u base64 program u terminalu. Sve zajedno nam izgleda.

```bash
minimodem -a -r 1200 -f snimka.wav | base64 --decode
```

Vidimo da smo output proslijedili u base64 s opcijom --decode da nam iz base64 dekodira u string. Naš rezultat na kraju je.

![Result](/images/osint/minimodemResult.png)

## Dodatni linkovi

- [RIFF](https://en.wikipedia.org/wiki/Resource_Interchange_File_Format)
- [PCM](https://en.wikipedia.org/wiki/Pulse-code_modulation)
- [Adio kanali, sampling rate](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_concepts)
- [Bit depth](https://www.izotope.com/en/learn/digital-audio-basics-sample-rate-and-bit-depth.html)
- [FSK](https://en.wikipedia.org/wiki/Frequency-shift_keying)
- [Baudrate](https://solace.com/blog/what-is-baud-rate-bit-rate/)
- [Base64 u terminalu](https://askubuntu.com/questions/178521/how-can-i-decode-a-base64-string-from-the-command-line )