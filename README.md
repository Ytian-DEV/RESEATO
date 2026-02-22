# RESEATO Rewrite Plan

This repository contains the **clean rebuild plan** for the RESEATO website.

## Goal
Rebuild the same product behavior and UI while improving:
- project structure
- code quality and maintainability
- performance and bundle size
- onboarding/documentation

## What to provide first
To safely clone behavior without breaking features, provide:
1. Original repository URL (or local copy)
2. Deployment URL (if available)
3. Tech stack details (framework, backend, database)
4. Environment/config files (without secrets)
5. Feature checklist and must-keep behavior

## Suggested rewrite workflow
1. Audit existing app routes, components, and API usage.
2. Capture expected behavior into a feature map.
3. Create a new folder structure with clear module boundaries.
4. Re-implement feature-by-feature with parity tests.
5. Compare old and new behavior before cutover.

## Proposed baseline structure

```text
reseato/
  apps/
    web/
  packages/
    ui/
    config/
    utils/
  docs/
    migration/
  tests/
```

## Next step
Add the source repository as a reference and start with a route + feature inventory.
