# Tarot Atlas

Tarot Atlas is a Bootstrap-based tarot web app with a compact, single-screen flow where a visitor can:

- choose from popular tarot spread styles
- ask a question
- draw a randomized spread with upright and reversed cards
- read position-by-position interpretations and an overall reading summary

## Run locally

Because this project is fully front-end, you can open `index.html` directly in a browser or serve the folder with a static file server.

Example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Artwork

Tarot Atlas uses locally generated tarot card artwork based on the open-source
[Resonator Voyant Tarot](https://github.com/abetusk/ResonatorVoyantTarot) project.
See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)
for attribution and license details.
