# Deployment

The React portfolio is in `frontend_react` and uses Sanity project `sw2t62dg` for public read-only portfolio data.

## GitHub Pages (free `.github.io` domain)

1. Commit and push these changes to the `master` branch.
2. Open the repository's **Settings > Pages**.
3. Set **Build and deployment > Source** to **GitHub Actions**.
4. The `Deploy portfolio to GitHub Pages` workflow publishes it to the URL shown in the Pages settings, typically `https://ebraheemnas.github.io/Portfolio/`.

If the Pages URL has a repository subpath, set `homepage` in `frontend_react/package.json` to that full URL before deployment so Create React App emits correct asset paths.

## Netlify or Vercel (free provider subdomain)

Import this GitHub repository in Netlify or Vercel. Set the base/root directory to `frontend_react`; their included configuration files set the build and output directories automatically. The providers issue free HTTPS subdomains such as `*.netlify.app` or `*.vercel.app`.

## Sanity

No Sanity token belongs in the frontend. The project ID is public and only the browser-safe read client is used. Content can be edited in Sanity Studio, but the included Studio is Sanity v2 and would require a migration to v3 for long-term maintenance. The live frontend dataset is still reachable.

## Contact form

The contact form prepares an email in the visitor's configured email application rather than writing data to Sanity. This avoids exposing a privileged Sanity write token in public JavaScript.
