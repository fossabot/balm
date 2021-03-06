<div align="center">
  <a href="https://balmjs.com/">
    <img width="128" heigth="128" src="https://balmjs.com/logo.png" alt="BalmJS">
  </a>
  <br>
  <br>

[![NPM version][npm-image]][npm-url]
[![node][node-image]][node-url]
[![Dependency Status][deps-image]][deps-url]
[![Build Status][travis-image]][travis-url]
[![Build Status][appveyor-image]][appveyor-url]
[![Coverage Percentage][cover-image]][cover-url]
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fbalmjs%2Fbalm.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fbalmjs%2Fbalm?ref=badge_shield)
<br>

  <h1>BalmJS</h1>
  <p>A flexible Front-End workflow for webapps</p>
</div>

## What's BalmJS?

BalmJS prescribes best practices and tools to help you stay productive.

## Structure

> Returning to webapp's original nature.

```
project
├── .tmp         // Scaffolds out a temporary directory for development
├── dist         // Scaffolds out the production build
├─┬ src          // Source code in here (Create a directory in project)
│ ├─┬ styles
│ │ └── main.css // Required. A entry file for CSS.
│ ├─┬ scripts
│ │ └── main.js  // Required. A entry file for JS.
│ ├── images
│ ├── fonts
│ ├── media
│ └── index.html // Required. A entry file for HTML.
├─┬ config       // Optional. But recommended. Refer to BalmCLI's templates.
│ ├── balmrc.js
│ └── publish.js
├── .dotfile     // (.babelrc, .gitignore, etc...)
├── gulpfile.js  // Required. A configuration file for Balm.
├── package.json // Required.
└── ...
```

> :zap: We recommend using [Balm CLI](https://github.com/balmjs/balm-cli) to scaffold out a front-end web app. :ghost:

## Ecosystem

| Project                                               | Status                                                 | Description                                       |
| ----------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------- |
| [balm-cli](https://github.com/balmjs/balm-cli)        | [![NPM version][balm-cli-image]][balm-cli-url]         | :spades: BalmJS scaffolding tool                  |
| [balm-gui](https://github.com/balmjs/balm-gui)        | N/A                                                    | :clubs: GUI for BalmJS                            |
| [balm-ui-lite](https://github.com/balmjs/ui-vue-lite) | [![NPM version][balm-ui-lite-image]][balm-ui-lite-url] | :hearts: Material Design Lite + Vue               |
| [balm-ui](https://github.com/balmjs/ui-vue)           | [![NPM version][balm-ui-image]][balm-ui-url]           | :diamonds: Next Generation Material UI for Vue.js |

## Demo

- [x] [Simple HTML](https://github.com/balmjs/demo-html)
- [x] [Laravel](https://github.com/balmjs/demo-laravel)
- [x] [Vue](https://github.com/balmjs/demo-vue)
- [x] [TypeScript](https://github.com/balmjs/demo-ts)
- [x] Yours awesome projects...

## Installation

### 0. Requirements

You need to set up your development environment before you can do anything.

Install [Node.js® and npm](https://nodejs.org/en/download/) if they are not already on your machine.

> **Verify that you are running at least node `8.x.x` and npm `5.x.x`** by running `node -v` and `npm -v` in a terminal/console window. Older versions maybe produce errors, but newer versions are fine.

BalmJS workflow using [gulp](https://gulpjs.com/) for the build process, so you need install `gulp-cli`.

```sh
$ npm install --global gulp-cli

# Verify
$ gulp -v
```

### 1. Installing **`balm`**

Install with npm:

```sh
$ npm install --save-dev gulp balm
```

Install with [yarn](https://yarnpkg.com/en/docs/install):

```sh
$ yarn add --dev gulp balm
```

### 2. Configuration

In your project directory, create a file named `gulpfile.js` in your project root with these contents:

```js
// 1. import balm
const balm = require('balm');

// 2. config balm
balm.config = {
  // your project config
};

// 3. run balm
balm.go();
```

:page_with_curl: Refer to [our configuration docs](https://balmjs.com/docs/en/configuration/toc.html) to learn more about config **`balm`**.

### 3. Usage

Run the gulp command in your project directory:

```sh
# for development
$ gulp

# for production
$ gulp --production
```

## [Documentation](https://balmjs.com/docs/en/) | [中文文档](https://balmjs.com/docs/zh-cn/)

- [Getting Started](https://balmjs.com/docs/en/basic/getting-started.html)
- [Configuration](https://balmjs.com/docs/en/configuration/toc.html)
- [Custom Task API](https://balmjs.com/docs/en/api/toc.html)
- [Recipes](https://balmjs.com/docs/en/recipes/toc.html)
- [FAQ](https://balmjs.com/docs/en/faq.html)

## License

[MIT](https://opensource.org/licenses/MIT)

© 2016-present, [Elf-mousE](http://elf-mouse.me/)


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fbalmjs%2Fbalm.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fbalmjs%2Fbalm?ref=badge_large)

## Special Thanks to

In chronological order

- [Node.js](https://nodejs.org/)
- [gulp.js](https://gulpjs.com/)
- [webpack](https://webpack.js.org/)

[npm-image]: https://badge.fury.io/js/balm.svg
[npm-url]: https://npmjs.org/package/balm
[node-image]: https://img.shields.io/node/v/balm.svg
[node-url]: https://nodejs.org
[deps-image]: https://david-dm.org/balmjs/balm.svg?theme=shields.io
[deps-url]: https://david-dm.org/balmjs/balm
[travis-image]: https://travis-ci.org/balmjs/balm.svg?branch=master
[travis-url]: https://travis-ci.org/balmjs/balm
[appveyor-image]: https://ci.appveyor.com/api/projects/status/github/balmjs/balm?svg=true
[appveyor-url]: https://ci.appveyor.com/project/balmjs/balm
[cover-image]: https://coveralls.io/repos/balmjs/balm/badge.svg
[cover-url]: https://coveralls.io/r/balmjs/balm
[balm-cli-image]: https://badge.fury.io/js/balm-cli.svg
[balm-cli-url]: https://npmjs.org/package/balm-cli
[balm-ui-lite-image]: https://badge.fury.io/js/balm-ui-lite.svg
[balm-ui-lite-url]: https://npmjs.org/package/balm-ui-lite
[balm-ui-image]: https://badge.fury.io/js/balm-ui.svg
[balm-ui-url]: https://npmjs.org/package/balm-ui