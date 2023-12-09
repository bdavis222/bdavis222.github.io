# Brian Davis

> A GitHub profile site

This page was written in TypeScript using the React library.
It showcases several software products that I have created and gives a brief overview about me. 

## Development

### Dependencies

In order to run the site locally, some dependencies need to be installed via [npm](https://en.wikipedia.org/wiki/Npm).
To install the necessary dependencies, run the following command:

```
npm i
```

This will install a `node_modules` directory in the project root.
Notice that this directory is included in the `.gitignore` file, so this new directory will not clutter this repository when changes are pushed.

### Running locally

To run a local version of the site, run the following command:

```
npm run dev
```

or

```
npm run dev -- --host
```

The latter will give an address for other devices to connect to (to test on a mobile device, for example).

### Publishing changes

The `static.yml` file within `.github/workflows/` will ensure that any changes pushed directly to the main branch of this repository will be published to the site.
