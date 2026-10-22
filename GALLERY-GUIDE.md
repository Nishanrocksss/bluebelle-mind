# Bluebelle Mind gallery guide

The gallery is ready and supports click-to-enlarge photos (lightbox). It starts empty until you add real, approved school photos.

## Add a photo from your Mac
1. Copy the photo into `assets/gallery/` (example: `assets/gallery/classroom-01.jpg`).
2. Open `gallery.json` and add an item like this:

```json
[
  {
    "src": "assets/gallery/classroom-01.jpg",
    "alt": "Bright preschool classroom with activity tables",
    "caption": "A space to learn and explore"
  },
  {
    "src": "assets/gallery/art-time.jpg",
    "alt": "Art activity table prepared for children",
    "caption": "Little creators at work"
  }
]
```

Keep valid JSON: double quotes around keys and strings, and no comma after the last item. Use filenames without spaces where possible.

## Use images stored in GitHub
You can also put public images in your GitHub repository and use their raw URLs as `src`, for example:

`https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPOSITORY/main/assets/gallery/classroom-01.jpg`

Replace the placeholders with your real GitHub username and repository. Do not use a guessed URL. Keep in mind public repository images are public to everyone.

## Update the website
- Local preview: refresh the browser after saving `gallery.json` and adding image files.
- Cloudflare Pages connected to GitHub: commit and push the new photos and `gallery.json`; Pages will redeploy automatically.

## Child privacy
Only publish identifiable photos of children after receiving explicit permission from their parent/legal guardian. Avoid publishing children's full names or other personal details.

This gallery is GitHub/file-managed. It does not provide a public upload form or admin login.
