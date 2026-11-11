# FEPAR website

THE FESTAC PAN AFRICAN RENAISSANCE

FEPAR is a statically exported Next.js website. Each page is emitted as its own HTML route, and the export can be hosted by any static web host.

## Requirements

- Node.js 20.9 or newer
- npm

## Develop and build

```sh
npm ci
npm run dev
```

Create the production static export with:

```sh
npm run build
```

The deployable files are written to `out/`. Serve that directory locally with `npm run start` after building, or use `npm run preview` to build and then serve it. The preview server binds to `127.0.0.1:4173` by default; set `PORT` to change the port or `PREVIEW_HOST=0.0.0.0` to make it reachable on the local network.

## Deploy

Connect the repository to a static hosting provider and use:

- Build command: `npm run build`
- Publish/output directory: `out`
- Node.js: 20.9 or newer

The repository includes configuration for Netlify (`netlify.toml`) and Vercel (`vercel.json`). For another provider, use the same build command and output directory. Keep directory-style routes enabled (for example, `/contact/` should serve `out/contact/index.html`); the export uses trailing-slash URLs.

## Contact form

The inquiry form is processed by Netlify Forms when deployed to Netlify. Static hosting alone does not process form submissions. On another provider, the email links on the Contact page remain available; connect a form endpoint such as that provider's form service or a hosted form API before relying on submissions there.

## Routes

- `/`
- `/diaspora/`
- `/records/`
- `/development/`
- `/contact/`
- `/contact/success/`
