# mohamadeissa.com: Step-by-Step Guide

This guide shows how to **preview**, **edit**, and **publish** your website. No coding experience is needed.

> **Before you start:** this is a *personal* site. Don't publish CPP client data, project names, figures, or anything confidential. Keep work content to what's already public (published papers, public talks).

---

## Part 1: What's in the folder

```
site_V4\
├─ index.html          ← Home
├─ bio.html            ← Bio (education, experience, teaching, CV)
├─ identity.html       ← Identity
├─ research.html       ← Research (+ Projects section)
├─ publications.html   ← Publications (+ Talks section)
├─ circle.html         ← Circle (mentors, collaborators)
├─ highlights.html     ← Highlights & News
├─ unfiltered.html     ← Unfiltered (list of essays / thoughts)
├─ unfiltered-post-template.html ← template for one Unfiltered post (copy it per post)
├─ offtheclock.html    ← Off the Clock (hobbies)
├─ contact.html        ← Contact
├─ collaborate.html    ← details page for the "Open to Collaborations" card (not in the menu)
├─ CNAME               ← tells GitHub your domain (don't delete)
├─ README.md / GUIDE.md
└─ assets\
   ├─ style.css        ← colors, fonts, layout
   ├─ script.js        ← dark mode, phone menu, abstract toggle
   └─ img\             ← photos and figures
      └─ logos\        ← workplace / university logos
```

Each `.html` file is one page. Each page has its own copy of the menu and footer, so a change to the menu has to be made in all 10 files. Part 3, step 8 shows how to do that in one go.

---

## Part 2: Preview it on your computer

1. Open the `site_V4` folder.
2. Double-click **index.html**. It opens in your browser.
3. Click through the tabs and try the ☾ / ☀ button for dark mode.
4. To see the phone layout, make the browser window narrow, or press **F12** and then **Ctrl+Shift+M** in Chrome or Edge.

After you edit a file, save it and press **F5** in the browser to refresh.

---

## Part 3: Edit the content

### Step 1: Install a free editor (one time)
Download **Visual Studio Code** from https://code.visualstudio.com. Then use **File → Open Folder → site_V4**.
(Notepad works too, but VS Code colors the code and can search all files at once.)

### Step 2: Replace placeholder text
All placeholder text is in **[square brackets]**, for example `[Your Title]` or `[Paper title one …]`.
- Press **Ctrl+Shift+F** in VS Code and search for `[` to list every placeholder in every file.
- Replace the bracketed text with your own and remove the brackets.
- Only change text that sits *between* tags. Leave the `<…>` parts alone.

```html
<p class="subtitle">[Your role] at [Organization] · [City]</p>
            ↓
<p class="subtitle">Wind Engineer at XYZ · Fort Collins, CO</p>
```

### Step 3: Add your photo
1. Save your photo as `profile.jpg` in `assets\img\`. A square or portrait shape at about 600×700 px works best.
2. In **index.html** and **bio.html**, find `assets/img/profile.svg` and change it to `assets/img/profile.jpg`.

Other images work the same way:
- `pub1.svg`, `pub2.svg`, `pub3.svg` → figures from your papers (also used on the project and highlight cards)
- `research-map.svg` → your own research diagram (a PowerPoint slide exported as PNG works well)
- `person.svg` → photos of people on the Circle page
- `photo.svg` → photos for the Off the Clock photo wall

> Tip: keep images under about 500 KB so the site loads fast. File names are case-sensitive once online, so `Profile.JPG` and `profile.jpg` count as different files.

### Step 4: Add a publication
In **publications.html**, copy a whole block that starts with `<div class="pub">` and ends with its matching `</div></div>`, paste it where you want it, and edit:

```html
<span class="badge">Journal</span>                          ← Journal / Conference / Preprint
<div class="title">Your paper title</div>
<div class="authors"><b>M. Eissa</b>, A. Coauthor</div>    ← <b> underlines your name
<div class="venue">Journal Name, 2026</div>
<a href="https://doi.org/10.xxxx/xxxxx">PDF</a> <a href="https://doi.org/10.xxxx/xxxxx">DOI</a>
<div class="abstract">Paste the abstract here.</div>
```
Delete the PDF or DOI button if you don't have that link. Copy your two best papers to the "Selected Publications" section of **index.html**.

**"Full text" button:** each paper also has a green **Full text** button with a smiley (it follows light/dark mode). Hovering shows "Need the full text? Ping me — I'll respond ASAP 🙂", and clicking opens an email to you with the paper title in the subject. For a new paper, copy the whole `<a class="ft" …>…</a>` from another paper and change the title after `subject=Full-text%20request%3A%20` (spaces are written as `%20`).

### Step 4b: Journal and conference logos (optional)
Each venue line on **Publications** (and in Selected Publications on **Home**) has a tag like `data-logo="jweia"`.
1. Save the logo in `assets\img\venues\` with that exact name, e.g. `jweia.png` (or `.svg`, `.jpg`, `.webp`).
2. Refresh. The logo appears on a small white chip next to the venue name. With no file, nothing shows.
- `assets\img\venues\README.txt` lists every name already in use (jweia, pem, jobe, acwe, icwe, bbaa, …).
- For a new paper, add `data-logo="short-name"` to its venue, e.g. `<div class="venue" data-logo="jweia">`.
- Wide, short logos look best (about 3:1). Check the publisher's or organizer's logo-use rules before publishing.

### Step 5: Add a news item
News uses flexible "editorial" cards (date, title, short text, and **as many links as you like**):
```html
<article class="nitem">
  <div class="ndate">September 2026</div>
  <h3 class="ntitle"><a href="publications.html">Two new papers are online</a></h3>
  <p>One-to-three sentences about it.</p>
  <div class="nlinks">
    <a href="https://doi.org/...">Traffic flow preprint</a>
    <a href="https://doi.org/...">Water networks preprint</a>
  </div>
</article>
```
- Links are shown in small capitals with a ↗ arrow automatically, so you don't need to add arrows.
- Add, remove or rename links freely. A card can have no links: delete the whole `<div class="nlinks">…</div>`.
- For external links add `target="_blank" rel="noopener"` so they open in a new tab.
- **highlights.html** holds *all* news. The thin full-width lines that fade out at both ends are `<hr class="fade-rule">` — copy one above any section to add another. **index.html** shows the latest 8 (two rows of four) — when you add a new one there, delete the oldest so it stays at 8. Paste new cards at the top of each `<div class="news-grid">`.
- The heading ("News & Highlights"), subtitle and "View all news" link sit in `<div class="news-head">` on index.html.

### Step 5b: The "Open to Collaborations" card
On the Home page it's the `<div class="opp">…</div>` block:
- `opp-label`: the small label (e.g. "Open to Collaborations", "Recruiting Students")
- `opp-h`: the big italic heading
- `opp-text`: the description
- `opp-btn`: the "Read More ->" button. It points to **collaborate.html**, a separate details page that isn't in the menu. Edit that page freely, or point the button anywhere else. Delete the button if you don't want a details page.

### Step 5c: Bio page sections
The Bio page has a row of section buttons under the intro (Right Now, What I Chase, Where I Trained, In a Few Words, The Road So Far, Wind in My Sails, Paying It Forward, My Toolbox, Giving Back). **Find Me Here** (contact), **Paper Trail** (CV button) and the social icons sit in the box to the right of the intro (`<aside class="bio-side">`). Each button jumps to a heading like `<h2 id="now" class="bio-h">Right Now<span class="bio-cap">Current appointments</span></h2>`.
- **Rename a section:** change the text both in the button (`<nav class="bio-tabs">`) and in its `<h2>`.
- **Add a section:** add a button `<a href="#myid">Name</a>` and a heading with the same `id="myid"`.
- Keywords under *In a Few Words* are `<span>` chips; add or delete as you like.

### Step 5d: Edit the logo hover card
The card that opens when the cursor rests on the top-left logo is written once in `assets\script.js`, in the block marked **EDIT THE TEXT HERE**:
- `KCARD_TITLE`: the green italic line.
- `KCARD_TEXT`: one entry per paragraph, each inside quotes '…' and separated by commas. Use `<b>…</b>` for bold.
If your text contains an apostrophe ('), type it as ’ or write \' so the quotes don't break. Save, then press Ctrl+F5.

### Step 6: Update your contact and social links
Search all files (Ctrl+Shift+F) for these and replace them with your real links:
- `you@example.com` → your email. Consider a personal address rather than your work address.
- `https://scholar.google.com/`, `https://www.researchgate.net/`, `https://www.linkedin.com/`, `https://orcid.org/`, `https://github.com/` → your profile URLs.
- To remove an icon you don't use, delete its whole `<a …>…</a>` in the `<div class="social">` row.

Use **Replace All** (the arrow next to the search box) to change every file at once.

### Step 6b: Contact page & footer
- **Contact page:** your FIU email card (with a **Copy** button), a row of "What brings you here?" buttons that open an email with the subject pre-filled (edit the text and the `subject=` part of each `<a class="why">`), "Where to find me" cards, and your handwritten signature.
- **Footer** (same on every page): name, positions and both emails on the left; social icons with © underneath in the middle. It always sits at the bottom of the window, even on short pages. To change it, edit the `<footer>…</footer>` block, using Replace All across all pages.

### Step 7: Add your CV
Save it as `cv.pdf` in the `assets\` folder. The "Download CV" link on the Bio page will then work.

### Step 7b: Add workplace and university logos
Small logos appear next to your affiliations under your photo on **Home**, and beside each job and degree on **Bio**.
1. Save each logo as a square-ish PNG or SVG, roughly 200×200 px, in `assets\img\logos\`. Example names: `cpp.png`, `csu.png`.
2. In **index.html** and **bio.html**, find `assets/img/logos/company.svg`, `university.svg` or `lab.svg` and change them to your file names.
3. Also update the `alt="… logo"` text next to it (screen readers use it).
4. To add another line under your photo, copy one whole `<div class="affil-row">…</div>`. To add another job, copy one whole `<li>…</li>` inside the Experience list.

> Logos sit on a small white tile, so they show clearly in dark mode too. Check your employer's brand rules before using its logo on a personal site.

### Step 7c: Write an Unfiltered post
Unfiltered posts use Option A: **Fraunces** titles and **Newsreader** body text, with a large first letter (drop cap), a pull quote and a handwritten (Caveat) sign-off. The rest of the site uses Palatino.
1. Copy `unfiltered-post-template.html` and rename it, e.g. `unfiltered-summer-travel.html`. Use lowercase with dashes and no spaces.
2. Open it and replace the date, title, subtitle, cover photo and paragraphs. Each paragraph is one `<p>…</p>`. Keep `class="dropcap"` on the first paragraph only.
3. Optional pieces: a `<blockquote>` pull quote, `<h2>` subheadings, and a photo grid (`<div class="uf-gallery">`). Delete any you don't need.
4. List the post on **unfiltered.html**. Copy one `<a class="uf-item" …>…</a>` block to the top of the list, set `href="unfiltered-summer-travel.html"`, and edit the date, title and teaser. Set the picture on the right (`<img class="uf-thumb" src="…">`) to the same image as the post's cover photo, e.g. `assets/img/summer-travel.jpg`.
5. Optional: add a news card for it on Highlights & News and on Home (Step 5).

### Step 8: Rename or remove a tab
The menu is repeated in every page, so use **Replace All** across all files:
- **Rename:** search `>Unfiltered</a>` and replace it with `>Hot Takes</a>`.
- **Remove:** search for that tab's whole line, e.g. `<li><a href="circle.html">Circle</a></li>`. On the page itself the line reads `<li><a href="circle.html" class=active>Circle</a></li>`, so fix that one by hand. Then delete the page file.

### Step 9: Change colors (optional)
Open `assets\style.css`. The first two lines hold all the colors:
- `:root{ … }` = **light mode**; `[data-theme=dark]{ … }` = **dark mode**
- `--bg` background · `--text` text · `--accent` links and headings · `--accent2` secondary green · `--card` boxes · `--header` top bar

Change a hex code, such as `#1b5e3a`, save, and refresh the browser.

### Step 9b: Change the font (optional)
The whole site uses one font family, set in one place. Near the end of `assets\style.css`, find the line starting `:root{--serif:`. The names inside are tried in order: `'Palatino Linotype'` (Windows), `Palatino` (Mac), and so on. To switch fonts, put a different font name first.

Titles use a separate font. **Fraunces** is used for "Hey, I'm Mohamad" and every page title. To change it, edit the `:root{--title:` line at the very end of `style.css`. Each page also loads Fraunces with a `<link href="https://fonts.googleapis.com/…Fraunces…">` line in its `<head>`.

### Step 10: Check before publishing
- [ ] No `[brackets]` left. Search for `[` across all files.
- [ ] Every tab opens, and the photo and images show.
- [ ] Dark mode and the phone layout look right.
- [ ] Email and social links go to the right places.

---

## Part 4: Make it live (free, using GitHub Pages)

You'll do this once. Allow about 30 minutes, plus up to 24 hours for the domain to connect.

### Step 1: Create a GitHub account
Sign up at https://github.com with a **personal** email. Pick a username, e.g. `mohamadeissa`; your site's backup address will be `username.github.io`.

### Step 2: Verify your domain with GitHub (recommended for security)
1. GitHub → your profile picture → **Settings** → **Pages** (left menu) → **Add a domain** → enter `mohamadeissa.com`.
2. GitHub shows a **TXT record** (name like `_github-pages-challenge-username`, plus a value).
3. Log in where you bought the domain (GoDaddy, Namecheap, Squarespace, Google/Cloudflare, etc.) → **DNS settings** → add that TXT record.
4. Back on GitHub, click **Verify**. This can take a few minutes to a few hours.

This stops anyone else from claiming your domain on GitHub.

### Step 3: Create the repository and upload the site
1. On GitHub, click **+** (top right) → **New repository**.
2. Name it `mohamadeissa.com` (any name works). Set it to **Public** and click **Create repository**.
3. Click **uploading an existing file**.
4. Open `site_V4` on your computer, select **everything inside it** (Ctrl+A), and drag it into the browser window.
   - Drag the *contents*, not the `site_V4` folder itself. `index.html` must be at the top level.
   - Make sure the `assets` folder and the `CNAME` file are included.
5. Click **Commit changes**.

### Step 4: Turn on GitHub Pages
1. In the repository, go to **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, choose **Deploy from a branch**. Set Branch to **main** and folder to **/(root)**, then click **Save**.
3. Under **Custom domain**, type `www.mohamadeissa.com` and click **Save**. It may already be filled in from the CNAME file.
4. Wait 1–2 minutes. Your site is now live at `https://username.github.io/mohamadeissa.com/` while the domain connects.

### Step 5: Point your domain to GitHub (at your domain registrar)
In your registrar's **DNS settings**, delete any existing parking or "forwarding" records for `@` and `www`, then add:

| Type  | Host / Name | Value / Points to |
|-------|-------------|-------------------|
| CNAME | `www`       | `username.github.io` (your GitHub username, no repo name) |
| A     | `@`         | `185.199.108.153` |
| A     | `@`         | `185.199.109.153` |
| A     | `@`         | `185.199.110.153` |
| A     | `@`         | `185.199.111.153` |
| AAAA  | `@`         | `2606:50c0:8000::153` *(optional, IPv6)* |
| AAAA  | `@`         | `2606:50c0:8001::153` *(optional)* |
| AAAA  | `@`         | `2606:50c0:8002::153` *(optional)* |
| AAAA  | `@`         | `2606:50c0:8003::153` *(optional)* |

- These values come from GitHub's docs as of October 2026. Check them against "Managing a custom domain for your GitHub Pages site" on docs.github.com before you enter them.
- `@` means the bare domain `mohamadeissa.com`. GitHub automatically redirects it to `www.mohamadeissa.com`.
- Don't add wildcard records (`*`).

### Step 6: Turn on HTTPS (the padlock)
1. Wait until GitHub Settings → Pages shows a green "DNS check successful". This can take from minutes up to 24 hours.
2. Tick **Enforce HTTPS**. It can take up to 24 hours to become clickable.
3. Visit **https://www.mohamadeissa.com**. You're live.

**Check your DNS from Windows (optional):** open PowerShell and run
`Resolve-DnsName www.mohamadeissa.com` and `Resolve-DnsName mohamadeissa.com`.
The results should show `username.github.io` and the 185.199.x.153 addresses.

---

## Part 5: Update the live site later

**Option A: in the browser (simplest)**
1. Edit the files on your computer and preview them (Part 2).
2. On GitHub, open the repository → **Add file** → **Upload files** → drag in *only the changed files*. Put image files inside the `assets/img` folder on GitHub first.
3. Click **Commit changes**. The site updates in about 1–2 minutes. Press Ctrl+F5 to refresh without the cache.

**Option B: GitHub Desktop (best if you update often)**
1. Install https://desktop.github.com and sign in.
2. **File → Clone repository** → pick your repo → choose a local folder, e.g. inside OneDrive.
3. Edit the files in that folder. GitHub Desktop lists what changed.
4. Type a short summary → **Commit to main** → **Push origin**. Done.

To make a quick fix online, open any file on GitHub, click the ✏️ pencil, edit, then **Commit changes**.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| 404 "There isn't a GitHub Pages site here" | Check that `index.html` is at the top level of the repo, not inside a `site_V4` folder. Check that Pages is set to main / root. |
| Page shows with no styling (plain text) | The `assets` folder is missing or misnamed. Re-upload it with `style.css` inside. |
| Image doesn't show online but does locally | The file name's capitalization doesn't match (`Photo.jpg` vs `photo.jpg`), or the image wasn't uploaded. |
| Custom domain keeps disappearing in Settings | The `CNAME` file was deleted. Re-upload it; it contains `www.mohamadeissa.com`. |
| "Enforce HTTPS" is greyed out | DNS is still spreading. Wait up to 24 hours and re-check the records in Part 4, step 5. |
| Domain shows the registrar's parking page | Delete the old parking or forwarding records at the registrar. |
| Changes not showing | Wait 2 minutes and press Ctrl+F5. Check the repo's **Actions** tab for a failed deploy. |

---

## Quick checklist

- [ ] Placeholders replaced, photo and CV added
- [ ] Previewed locally (desktop + phone + dark mode)
- [ ] GitHub account created and domain verified (TXT record)
- [ ] Repo created, files uploaded (`index.html` at the top level, `assets` + `CNAME` included)
- [ ] Pages enabled (main / root) and custom domain `www.mohamadeissa.com` set
- [ ] DNS records added (CNAME `www`, A records on `@`)
- [ ] HTTPS enforced, and https://www.mohamadeissa.com loads

*Note: GitHub's menus change from time to time. If a button has moved, search GitHub Docs for "GitHub Pages custom domain".*
