# BlazerGames

A static website hosting a collection of browser-based HTML5 games (Vex series, Moto X3M, Retro Bowl, Slope, Drive Mad, 2048, 1v1.lol, Bob the Robber 2, etc.).

## Project Structure
- `index.html` — Landing page with featured games and a searchable game grid
- `main.css` — Stylesheet for the landing page
- `script.js` — Client-side search filter for the game grid
- `images/` — Thumbnails and logo
- `games/` — One folder per game, each containing its own `index.html` and assets
- `server.js` — Lightweight Node.js static file server (used in development)

## Replit Setup
- **Language:** Node.js 20 (used only to serve static files)
- **Workflow:** `Start application` runs `node server.js` on port 5000, host `0.0.0.0`
- **Server behavior:** Serves files from the project root, sends no-cache headers in development, and serves `index.html` for directory requests
- **Deployment:** Configured as a `static` deployment with `publicDir: "."` so the entire repo is published as static assets

## Notes
- There is no build step — the site is plain HTML/CSS/JS.
- The Node server exists purely to serve files in the Replit dev environment with the correct host/port and cache headers; in production the static deployment serves the files directly.
