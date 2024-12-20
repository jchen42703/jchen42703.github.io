# Personal Website

https://user-images.githubusercontent.com/34604336/201234099-71a7f11d-6206-49e9-a4fb-e2eefc3ae703.mp4

My personal website created in React and deployed with Vercel to [https://therealjosephchen.com/](https://therealjosephchen.com/).

## Getting Started [v2]

Start a development server at `localhost:3000` with:

```bash
cd v2
pnm i
pnpm start
```

For production:

```bash
cd v2
pnpm install
pnpm build
```

- `pnpm install --production` will not work because `pnpm build` relies on Typescript typings that are only available through the dev dependencies.
