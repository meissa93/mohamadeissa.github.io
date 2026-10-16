# mohamadeissa.com — personal academic website

Plain HTML/CSS site (no build step), modeled on the academic layouts of salmaelsherif.com and ahmadstatespace.github.io:
Pages: Home · Bio (education, experience, teaching, CV) · Identity · Research (incl. Projects) · Publications (incl. Talks) · Circle (mentors, collaborators) · Highlights & News (news + awards) · Unfiltered (essays / raw thoughts) · Off the Clock (hobbies) · Contact. Text in Palatino; greeting + page titles in Fraunces (bold, upright); Unfiltered in Option A (Fraunces + Newsreader); workplace logos next to affiliations.
Content ideas drawn from ahmadstatespace.github.io (news cards, research map, callout banner, identity, people, essays and personal-interest pages, contact footer).
**👉 Full step-by-step instructions (edit, preview, publish, update): see GUIDE.md**

Includes dark mode, mobile menu, and expandable abstracts.

## Edit content
- Open any `.html` file in a text editor (VS Code / Notepad) and replace the `[bracketed placeholders]`.
- Replace `assets/img/profile.svg` with your photo (e.g. `profile.jpg`) and update the `<img src>` in index.html and bio.html.
- Replace `assets/img/pub1.svg`… with figures from your papers, and `assets/img/research-map.svg` with your own research diagram.
- News items: edit the cards in index.html (latest 4) and highlights.html (all).
- Add your CV as `assets/cv.pdf`.
- Update the email and profile links in the social icon row (search for `example.com`, `scholar.google.com`, etc.) in index.html and bio.html.

## Publish free on GitHub Pages
1. Create a GitHub account → New repository (e.g. `mohamadeissa.com`), Public.
2. Upload all files in this folder (keep the `assets` folder and `CNAME` file).
3. Repo → Settings → Pages → Source: "Deploy from a branch", Branch: `main` / root → Save.
4. Settings → Pages → Custom domain: `www.mohamadeissa.com` → Save; tick "Enforce HTTPS" once available.

## Point the domain (at your domain registrar's DNS settings)
| Type  | Host/Name | Value |
|-------|-----------|-------|
| CNAME | www       | `<your-github-username>.github.io` |
| A     | @         | 185.199.108.153 |
| A     | @         | 185.199.109.153 |
| A     | @         | 185.199.110.153 |
| A     | @         | 185.199.111.153 |

DNS can take up to 24–48 h. Verify the GitHub IPs against GitHub's current docs ("Managing a custom domain for your GitHub Pages site") before entering them.

Alternative hosts: Netlify or Cloudflare Pages (drag-and-drop the folder, then add the custom domain).
