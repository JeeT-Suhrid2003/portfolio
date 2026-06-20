# Portfolio (static site)

A small static portfolio site for Suhrid Ghosh. Contains `index.html`, `about.html`, `projects.html`, shared `navbar.html`, JavaScript, and `style.css`.

**Prerequisites**
- A modern browser (Chrome, Edge, Firefox).
- Python 3 (for quick local server) OR Node.js + `http-server` OR VS Code Live Server extension.

**Run locally (quick)**
Open a PowerShell/terminal in the project root (the folder containing the HTML files) and run:

```powershell
python -m http.server 8000
```

Then open: http://localhost:8000

**Alternative: Node `http-server`**

```powershell
npm install -g http-server
http-server -p 8000
```

**Alternative: VS Code Live Server**
- Install the Live Server extension.
- Open the workspace and click "Go Live" or right-click `index.html` → "Open with Live Server".

**Notes / Troubleshooting**
- The CSS file is `style.css`. If pages look unstyled, ensure the `<link rel="stylesheet" href="style.css">` is present in the page `<head>`.
- `navbar.html` is injected by `app.js` into the `#chrome-root` element; serve over HTTP (not `file://`) so the fetch works.
- Test these pages after starting the server:
  - /index.html
  - /about.html
  - /projects.html

---

