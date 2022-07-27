<p align="center"><a href="https://hannadrehman.github.io/toastify-react/" target="_blank"><img src="https://hannadrehman.github.io/toastify-react/img/react-toaster.png" alt="toastify-react" title="toastify-react" width="120"></a></p>
<h1 align="center">Toastify React</h1>
<p align="center" style="font-size: 1.2rem;">Beautiful, Zero Configuration, Toast Messages for React ~3kb gzip (with styles and icons)</p>
<p align="center"><a href="https://hannadrehman.github.io/toastify-react/">Demo</a></p>

[![npm package](https://img.shields.io/npm/v/toastify-react/latest.svg)](https://www.npmjs.com/package/toastify-react)
[![Small size](https://img.badgesize.io/https://unpkg.com/cogo-toast/dist/index.js?compression=gzip)](https://unpkg.com/toastify-react/dist/index.js)
![npm](https://img.shields.io/npm/dm/toastify-react)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![GitHub license](https://img.shields.io/github/license/hannadrehman/toastify-react)](https://github.com/hannadrehman/toastify-react/blob/master/LICENSE)

<p align="center">
<a href="https://hannadrehman.github.io/toastify-react/" target="_blank">Toastify React</a>
</p>

### Install via NPM:

```bash
npm install --save toastify-react
```

### Install via Yarn:

```bash
yarn add toastify-react
```

## Usage

Its Plug and Play. No configuration required. Just import and you are good to go.

```javascript
import toaster from 'toastify-react';

toaster.success('This is a success message!');
```

### 5 Built in Types

There are 5 built-in types to handle the most common cases in any application.

```javascript
toaster.success('This is a success message');

toaster.info('This is a info message');

toaster.loading('This is a loading message');

toaster.warn('This is a warn message');

toaster.error('This is a error message');
```

### Use JSX

**toastify-react** is built using React. Which means any valid jsx can be used as the message in toaster

```javascript
toaster.info(
  <div>
    <b>Awesome!</b>
    <div>Isn't it?</div>
  </div>,
);
```

### Returns a Promise

Returns a promise which resolves when the toast is about to hide.

This can be useful to do some action when the toast has completed showing.

```javascript
toaster.loading('Loading your data...').then(() => {
  toaster.success('Data Successfully Loaded');
});
```

### Hide on Click

```javascript
const { hide } = toaster.success('This is a success message.', {
  onClick: () => {
    hide();
  },
});
```

### Completely Customizable

The second parameter to the function is an options object that can be passed in for customization.

```javascript
toaster.info('This is an info message', options);
```

#### All Available Options

Here's a list of all the available options, to customize the toast to your needs.

|     Options      |                                               Type                                               |                          Default                           |
| :--------------: | :----------------------------------------------------------------------------------------------: | :--------------------------------------------------------: |
|    hideAfter     |                                        Number in Seconds                                         | `3` <br />(Can be `0` to disable auto-hiding of the toast) |
|     position     | `'top-left', 'top-center', 'top-right',` <br /> `'bottom-left', 'bottom-center', 'bottom-right'` |                       `'top-center'`                       |
|     heading      |                                              String                                              |                            `''`                            |
|    renderIcon    |                                       Function<ReactNode>                                        |                   Icon Based on the Type                   |
|       bar        |           Object <br /> `{ size: '2px', style: 'solid/dashed/dotted', color: '#hex' }`           |                     Based on the Type                      |
|    onClick()     |                                             Function                                             |                           `null`                           |
|       role       |                                            aria-role                                             |                          `status`                          |
| toastContainerID |                      The dom element in which the toast container is added                       |                       `ct-container`                       |

### Custom Styling

You can provide your own custom styling by extending the `ct-toast` class in your css styles.

For all classnames, refer to [/src/styles/styles.css](/src/styles/styles.css)

#### Customize each type of Toast seperately

Customize each type of Toast seperately, by extending the `ct-toast-<type>` class. For example, in your CSS,

```
ct-toast-success {
  color: #FFFFFF;
  background: #6EC05F;
}
```

### Only ~ 3kb gzip (with Styles and Icons)

The package contains the minified build file, along with the SVG Icons and the Styles, built into the Code, with a total of only ~3kb gzip.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/anmolmahatpurkar"><img src="https://avatars2.githubusercontent.com/u/36692003?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Anmol Mahatpurkar</b></sub></a><br /><a href="https://github.com/Cogoport/cogo-toast/commits?author=anmolmahatpurkar" title="Code">💻</a> <a href="#design-anmolmahatpurkar" title="Design">🎨</a> <a href="https://github.com/Cogoport/cogo-toast/commits?author=anmolmahatpurkar" title="Documentation">📖</a></td>
    <td align="center"><a href="https://balazsorban.com"><img src="https://avatars1.githubusercontent.com/u/18369201?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Balázs Orbán</b></sub></a><br /><a href="https://github.com/Cogoport/cogo-toast/commits?author=balazsorban44" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Keaws"><img src="https://avatars1.githubusercontent.com/u/5289466?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vitalii Kalchuk</b></sub></a><br /><a href="https://github.com/Cogoport/cogo-toast/commits?author=Keaws" title="Code">💻</a></td>
    <td align="center"><a href="http://www.apathak.com"><img src="https://avatars1.githubusercontent.com/u/24917309?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Amar Pathak</b></sub></a><br /><a href="https://github.com/Cogoport/cogo-toast/commits?author=amarpathak" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/nataly87s"><img src="https://avatars2.githubusercontent.com/u/7895237?s=460&v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nataly Shrits</b></sub></a><br /><a href="https://github.com/Cogoport/cogo-toast/commits?author=nataly87s" title="Code">💻</a></td>
    <td align="center"><a href="https://hannadrehman.com/"><img src="https://avatars.githubusercontent.com/u/23405869?v=4?s=100" width="100px;" alt=""/><br /><sub><b>hannad rehman</b></sub></a><br /><a href="https://github.com/Cogoport/cogo-toast/commits?author=hannadrehman" title="Code">💻</a></td>
    <td align="center"><a href="https://www.kartikhedau.in/"><img src="https://avatars.githubusercontent.com/u/35377972?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kartik Hedau</b></sub></a><br /><a href="https://github.com/Cogoport/cogo-toast/commits?author=hedaukartik" title="Code">💻</a> <a href="#content-hedaukartik" title="Content">🖋</a> <a href="#design-hedaukartik" title="Design">🎨</a> <a href="https://github.com/Cogoport/cogo-toast/commits?author=hedaukartik" title="Documentation">📖</a> <a href="#example-hedaukartik" title="Examples">💡</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

# How to run locally

```
yarn setup
yarn dev // runs rullup in watch mode
yarn dev:docs // runs docs website in dev mode.
```
