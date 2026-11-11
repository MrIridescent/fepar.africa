# CI/CD and DevSecOps

FEPAR uses GitHub Actions for validation and Netlify for production hosting.

## Deployment flow

1. A pull request targeting `main` runs:
   - `npm ci`
   - production dependency audit
   - application lint
   - Next.js static export build
   - CodeQL analysis
2. A push to `main` runs the same checks.
3. If all checks pass, the `Deploy to Netlify` job publishes `out/` to the production site.
4. Dependabot checks npm dependencies weekly and opens grouped update pull requests.

## Required GitHub configuration

Add these repository secrets under **Settings → Secrets and variables → Actions**:

- `NETLIFY_AUTH_TOKEN`: a Netlify personal access token with permission to deploy the site.
- `NETLIFY_SITE_ID`: `3a04cedb-032f-446f-87a2-3ed33469f58d` for the `fepar-renaissance` site.

The workflow also uses a GitHub Actions environment named `production`. For stronger release protection, configure that environment with required reviewers under **Settings → Environments**. The deployment job will then wait for approval after validation and before publishing.

## Local verification

Run the same application checks locally:

```sh
npm ci
npm audit --omit=dev --audit-level=high
npx eslint app components --quiet
npm run build
```

The generated `out/` directory is intentionally ignored by Git because the workflow builds it from the commit being deployed.
