# Chaffle

[![npm version](https://img.shields.io/npm/v/chaffle.svg?style=flat-square)](https://www.npmjs.com/package/chaffle)
[![Build Status](https://img.shields.io/travis/blivesta/chaffle/master.svg?style=flat-square)](https://travis-ci.org/blivesta/chaffle)

Shuffle Characters Randomly.

## Demo

http://git.blivesta.com/chaffle/

## Install

```html
<script src="YOUR-PROJECT/chaffle.min.js"></script>
<!-- OR CDN -->
<script src="https://unpkg.com/chaffle/chaffle.min.js"></script>
```

npm

```html
$ npm install chaffle
```

## Usage

### Markup

```html
<p data-chaffle="en">English</p>
<p data-chaffle="ja">日本語</p>
<p data-chaffle="ja-hiragana">ひらがな</p>
<p data-chaffle="ja-katakana">カタカナ</p>
<p data-chaffle="ua">Українська</p>
<p data-chaffle="cn">中文</p>
<!-- data options -->
<p data-chaffle="en" data-chaffle-speed="100" data-chaffle-delay="200">
  Data options
</p>
```

### Call the Chaffle

```js
const elements = document.querySelectorAll("[data-chaffle]");
Array.prototype.forEach.call(elements, function(el) {
  const chaffle = new Chaffle(el, {
    /* options */
  });
  chaffle.init();
});
```

e.g: mouseover

```js
import Chaffle from "chaffle";

const elements = document.querySelectorAll("[data-chaffle]");
Array.prototype.forEach.call(elements, function(el) {
  const chaffle = new Chaffle(el, {
    /* options */
  });
  el.addEventListener("mouseover", function() {
    chaffle.init();
  });
});
```

## Options

```html
<p data-chaffle="en" data-chaffle-speed="100" data-chaffle-delay="200">
  Data options
</p>
```

OR

```js
var chaffle = new Chaffle(el, {
  lang: "en", // default: 'en'
  // 'en' || 'ja' || 'ja-hiragana' || 'ja-katakana' || 'ua' || 'cn'
  speed: 20, // default: 20
  delay: 100 // default: 100
});
```

## License

Released under the MIT license.
