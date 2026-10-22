# Bluebelle Mind website

A responsive static website for Bluebelle Mind Abilities Development L.L.C S.P.C, designed with a navy-and-gold brand palette. Deployable on Cloudflare Pages from GitHub with no build step.

## Preview locally

Open `index.html` in a browser, or run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Add photos to the gallery (GitHub workflow)

1. Put approved public photos in `assets/gallery/`, e.g. `classroom.jpg`.
2. Edit `gallery.json` and add an entry for each image:

```json
[
  {
    "src": "assets/gallery/classroom.jpg",
    "alt": "A bright classroom prepared for activities",
    "caption": "Our learning space"
  }
]
```

3. Commit and push the files to GitHub. Cloudflare Pages will redeploy and show the photos automatically.

Only upload photos that the school has permission to publish. Obtain parent/legal guardian consent before publishing identifiable children's photos. Do not put confidential documents or private information in a public repository.

## Deploy with Cloudflare Pages

1. Push this folder to a GitHub repository.
2. In Cloudflare Dashboard, open **Workers & Pages** → **Create** → **Pages** → **Connect to Git** (labels may vary).
3. Choose the repository.
4. Framework preset: **None**. Build command: leave blank. Build output directory: `/` or the repository root (`.`), according to the dashboard's accepted value.
5. Deploy. Each push to the connected branch will trigger a new deployment.

## Before publishing — please verify

- Confirm the country code for WhatsApp. The current WhatsApp link assumes UAE (+971) and opens `https://wa.me/97150887147`; change it in `index.html` if this is not correct.
- Confirm city and country for the address, then add a verified map link if desired.
- Confirm that 24/7 describes actual availability before advertising it. The page currently avoids promising that the preschool itself is open 24/7.
- Confirm program names, age eligibility, and all published claims with the school.
- Replace or refine the logo if the supplied logo file is not the final approved artwork.

## Current structure

- `index.html` — content and page sections
- `style.css` — responsive navy/gold design
- `script.js` — mobile menu and gallery rendering
- `gallery.json` — public gallery manifest
- `assets/logo.png` — logo supplied for this project
- `assets/gallery/` — add approved gallery photos here
