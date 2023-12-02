# Brian Davis
> A GitHub profile site

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate/?business=UA5NL9MJSFMVY)

This page showcases several different software products _(including this website itself, written in TypeScript using the React library)_. 
All of these products are free to use, and instructions for their installation and use are provided for each. 
To see these products, visit the [software page](https://bdavis222.github.io).

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

### Publishing changes

The `static.yaml` file within `.github/workflows/` will ensure that any changes pushed directly to the main branch of this repository will be published to the site.
