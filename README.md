# Carlos Boned Riera — portfolio

A hand-built, no-framework website. No installs, no build step: open `index.html` to view it.

## What's in here

```
index.html              the homepage (don't edit — it fills itself from data.js)
content/data.js         ← EVERYTHING on the homepage: bio, papers, news, path, links
assets/                 styles and scripts (no need to touch) + put your photo / CV here
papers/ode-vit/         a paper page (extension of the site with artifacts & proofs)
   content.js           ← the text, math, proofs, figures and artifacts of that page
   img/                 (create it) figures for that page
   files/               (create it) PDFs, appendices, proofs for that page
papers/_template/       copy this to start a new paper page (it is never published)
```

## Updating

* **Homepage:** edit `content/data.js`. Instructions are inside the file.
* **New paper page:** copy `papers/_template` → rename it (e.g. `sidtd`) → fill `content.js` →
  in `content/data.js` set that paper's `page: "papers/sidtd/"`.
* Or just paste the information to Claude and ask it to update the files.

## Publishing on GitHub Pages (no code)

1. Create a free account at **github.com** (Sign up). Your username becomes your address:
   `https://USERNAME.github.io`.
2. Top-right **+** → **New repository**.
   * Repository name: exactly `USERNAME.github.io` (your username, lower-case).
   * Choose **Public**. Leave every other box unticked. Click **Create repository**.
3. On the next page click the link **"uploading an existing file"**.
4. Open this folder in File Explorer, select everything inside it
   (`index.html`, `README.md`, `assets`, `content`, `papers`) and drag it onto the GitHub page.
   Wait until all files are listed, then click **Commit changes**.
5. Go to **Settings** (tab at the top of the repository) → **Pages** (left menu).
   Under *Build and deployment*: Source = **Deploy from a branch**, Branch = **main** and **/(root)** → **Save**.
6. Wait 1–3 minutes (the **Actions** tab shows a yellow dot, then a green tick).
   Your site is live at `https://USERNAME.github.io`.

### Changing something later

* **Small text edit:** in the repository, click `content` → `data.js` → pencil icon ✎ →
  make the change → **Commit changes**. Live in ~1 minute.
* **Replace / add files:** open the folder on GitHub where the file belongs
  (e.g. `papers`) → **Add file** → **Upload files** → drag the file or folder → **Commit changes**.
  A file with the same name is replaced.
* Not seeing the change? Press **Ctrl + F5** in your browser to bypass the cache.
