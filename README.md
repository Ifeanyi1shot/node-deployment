# Olin Cloud Services — Node.js CI/CD Demo

A simple Express app used for GitHub Actions CI/CD pipeline training.

## Project Structure

```
olin-node-demo/
├── src/
│   └── app.js                        # Express app
├── public/
│   └── index.html                    # Landing page
├── tests/
│   └── app.test.js                   # Jest tests
├── .github/
│   └── workflows/
│       ├── 1-ci.yml                  # Pipeline 1: CI only
│       ├── 2-ci-cd-azure.yml         # Pipeline 2: CI + CD → Azure (GitHub runner)
│       └── 3-ci-cd-self-hosted.yml   # Pipeline 3: CI + CD → Azure (self-hosted runner)
├── package.json
└── README.md
```

## Running Locally

```bash
npm install
npm start          # http://localhost:3000
npm test           # Run Jest tests
```

## Pipeline Overview

| Pipeline | Trigger | Runner | Deploys? |
|---|---|---|---|
| `1-ci.yml` | push / PR | GitHub-hosted | ❌ |
| `2-ci-cd-azure.yml` | push to main | GitHub-hosted | ✅ Azure App Service |
| `3-ci-cd-self-hosted.yml` | push to main | Self-hosted | ✅ Azure App Service |

## Required GitHub Secrets

| Secret | Where to get it |
|---|---|
| `AZURE_WEBAPP_PUBLISH_PROFILE` | Azure Portal → App Service → Get publish profile |

## Required GitHub Variables

| Variable | Example value |
|---|---|
| `AZURE_WEBAPP_NAME` | `olin-node-demo` |
| `AZURE_WEBAPP_SLOT` | `production` |

## Self-Hosted Runner Setup

See the full setup guide inside `3-ci-cd-self-hosted.yml` — the comments at the
bottom of that file walk through every step from download to systemd service.
