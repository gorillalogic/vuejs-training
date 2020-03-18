# Progressive Web Applications - PWA

Progressive web application is a type of software application that looks and behaves as a mobile app, PWAs are built to take advantage of native app features, it can work offline and you can install it from a browser.

## Features

PWAs can run on any device, they should be responsive and have an icon for a different device resolution.

To build a PWA, it's needed to register [service workers](https://developers.google.com/web/fundamentals/primers/service-workers) for handling the installation process and adding the offline features to make a normal web app a PWA.

## Build a PWA with Vue.js

It's available with [Vue CLI 3.x](https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-pwa#readme)

- For an existing Vue.js application you have to run this command:

```bash
vue add pwa
```

### Getting Started

- Create a new Vue.js app via CLI

```bash
npx @vue/cli create pwa-app
```

## Additional Links

- [Official documentation](https://cli.vuejs.org/core-plugins/pwa.html)
- [NPM package](https://www.npmjs.com/package/@vue/cli-plugin-pwa)
