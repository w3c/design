# Design considerations

1. [General](#1-general)
1. [HTML](#2-html)
1. [CSS](#3-css)
1. [JS](#4-js)
1. [Artwork](#5-artwork)
1. [Usability](#6-usability)

## 1. General

* Encoding: UTF-8
* Charset: Unicode
* Readability &amp; maintainability: proper indentation, no minification of resources
* Indentation: two spaces
* Conservative adoption of recent features: only when widely supported by UA's
* Progressive enhancement (in particular: no vital features should depend on JS)

## 2. HTML

* HTML5 (*doctype*: `<!DOCTYPE html>`)
* Language declarations (*locale*): `en-GB`
* Strong use of semantic elements; in particular: `header`, `main`, `footer`, `nav`, `aside`, `section` and `article`
* Whenever possible, [polyglot HTML5](https://www.w3.org/TR/html-polyglot/) (eg: we close all tags)
* HTML should pass our own validator, if at all possible (tip: use [`validate.sh`](validate.sh))

## 3. CSS

* *Mobile-first*
* We adopt [Bootstrap](https://getbootstrap.com/) 4.x's [responsive breakpoints](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints)
* Fonts (in both cases, plus conservative fallbacks):
  * *Noto Sans* for regular text
  * *Inconsolata* for `monospace` text
* These features we adopt from **WAI's new design**:
  * Some colours
* CSS should pass our own validator, if at all possible (tip: use [`validate.sh`](validate.sh))

## 4. JS

* Semicolons
* Behaviour encapsulated inside IIFE's
* Conservative feature detection, with graceful fallbacks

These JS features have enough support, and are encouraged and recommended (links point to corresponding *Can I use&hellip;* page):

* [Strict mode](https://caniuse.com/#feat=use-strict)

These other JS features we're avoiding on purpose, for they are not sufficiently supported (links to *Can I use&hellip;* again):

* [`const`](https://caniuse.com/#feat=const)
* [`let`](https://caniuse.com/#feat=let)
* [*Fat arrow* functions](https://caniuse.com/#feat=arrow-functions)
* [Template literals](https://caniuse.com/#feat=template-literals)

## 5. Artwork

* Preferably vector images (SVG) when possible
* Sprites when possible (as opposed to many individual image files)
* We do *not* use *icon fonts* (eg, Font Awesome)

## 6. Usability

* Size ratio between adjacent headings should be constant (ie, the font size of an `h1` divided by the font size of an `h2` should be the same as the font size of
  an `h5` divided by the font size of an `h6`)
* When there's an overlay at the top, fragment IDs can't be obscured when navigating to them
  (see [the problem, and a solution](https://codepen.io/tripu/pen/NqyKPZ))
* Don't waste real estate on &ldquo;extra small devices (portrait phones, < 576px)&rdquo; (eg, no fixed overlay for a navigation bar)

The layout changes from a narrow, single-column page on &ldquo;extra small devices (portrait phones, < 576px)&rdquo; and &ldquo;small devices (landscape phones,
≥ 576px)&rdquo; to two columns on &ldquo;medium devices (tablets, ≥ 768px)&rdquo; and three columns on &ldquo;large devices (desktops, ≥ 992px)&rdquo; and
&ldquo;extra large devices (large desktops, ≥ 1200px)&rdquo;.
