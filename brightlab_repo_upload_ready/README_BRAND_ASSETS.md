# Brightlab brand assets — repo ready

Copy this folder's contents into the root of the Brightlab repository.

## Included

```txt
AGENTS.md
README_BRAND_ASSETS.md
docs/brand/
public/assets/brand/
```

## Main paths for the app

```tsx
<img src="/assets/brand/logo-primary.png" alt="Brightlab logo" />
<img src="/assets/brand/logo-transparent.png" alt="Brightlab logo" />
<img src="/assets/brand/isotype-primary.png" alt="Brightlab" />
```

## Git commands

```bash
git add AGENTS.md README_BRAND_ASSETS.md docs/brand public/assets/brand
git commit -m "Add Brightlab brand assets"
git push
```

## Notes

- `AGENTS.md` should stay at the repo root so Codex can use it as project guidance.
- Use PNG assets by default.
- JPG files are fallbacks only.
- Do not edit, recolor, stretch, rotate, or add shadows/effects to the logo.
