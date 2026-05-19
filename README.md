# Sri Venkateshwara Catering Website

This is a Vite + React landing page for Sri Venkateshwara Catering Services.

## Local development

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:4173/` in your browser.

## Deploy to GitHub Pages

1. Create a GitHub repository, for example `catering-website`.
2. In the project folder, initialize git and push to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<USERNAME>/catering-website.git
git push -u origin main
```

3. The workflow `.github/workflows/deploy.yml` will run automatically on pushes to `main`.

4. If you deploy to a repository page, the public URL will be:

```
https://<USERNAME>.github.io/catering-website/
```

5. If you deploy to a user/organization page repository named `<USERNAME>.github.io`, update `VITE_BASE_URL` in `.github/workflows/deploy.yml` to `/`.

## Notes

- The `vite.config.js` file supports `VITE_BASE_URL` for GitHub Pages base path.
- If your repo name is different, replace `/catering-website/` with your actual repo path.
