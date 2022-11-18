# Meervoudsvormen op basis van woordenlijst

Op basis van [wordlist.txt](../wordlist.txt) worden een aantal meervoudsregels getest of dit meervoud voorkomt in [nouns-meervouden.txt](../experimenteel/nouns-meervouden.txt).


## Genereren van nieuwe lijst

- Voer eerst ```node irregulars.js``` uit. Dit genereert een lijst met uitzonderingen van de meeste woorden.
- Daarna: ```node fetchPlurals.js```. Dit kan een tijdje duren, maar geeft een output: ```nouns.json```. Deze lijst kan je dan gebruiken.