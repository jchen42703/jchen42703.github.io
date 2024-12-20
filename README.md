# Personal Website

https://user-images.githubusercontent.com/34604336/201234099-71a7f11d-6206-49e9-a4fb-e2eefc3ae703.mp4

My personal website created in React and deployed with Vercel to [https://therealjosephchen.com/](https://therealjosephchen.com/).

Old deployment information can be seen in [docs](./docs/DIGITAL_OCEAN.md).

## Getting Started [v2]

Start a development server at `localhost:3000` with:

```bash
cd v2
yarn install
yarn start
```

For production:

```bash
cd v2
yarn install
yarn build
```

- `yarn install --production` will not work because `yarn build` relies on Typescript typings that are only available through the dev dependencies.
