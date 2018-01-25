# Templates

1. [Types](#1-types)
1. [Design considerations](#2-design-considerations)
   1. [General](#21-general)
   1. [HTML](#22-html)
   1. [CSS](#23-css)
   1. [JS](#24-js)
   1. [JS](#25-usability)

## 1. Types

* [Generic](generic/)
* *Scratchpad*

## 2. Design considerations

### 2.1. General

* Encoding: UTF-8
* Charset: Unicode
* Readability &amp; maintainability: proper indentation, no minification of resources
* Indentation: two spaces
* Conservative adoption of recent features: only when widely supported by UA's
* Progressive enhancement (in particular: no vital features should depend on JS)

### 2.2. HTML

* HTML5 (*doctype*: `<!DOCTYPE html>`)
* Language declarations (*locale*): `en-GB`
* Strong use of semantic elements; in particular: `header`, `main`, `footer`, `nav`, `aside`, `section` and `article`
* Whenever possible, [polyglot HTML5](https://www.w3.org/TR/html-polyglot/) (eg: we close all tags)
* HTML should pass our own validator, if at all possible (tip: use [`validate.sh`](validate.sh))

### 2.3. CSS

* *Mobile-first*
* We adopt [Bootstrap](https://getbootstrap.com/) 4.x's [responsive breakpoints](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints)
* Fonts (in both cases, plus conservative fallbacks):
  * *Noto Sans* for regular text
  * *Inconsolata* for `monospace` text
* These features we adopt from **WAI's new design**:
  * Some colours
* CSS should pass our own validator, if at all possible (tip: use [`validate.sh`](validate.sh))

### 2.4. JS

* Semicolons
* Behaviour encapsulated inside IIFE's
* Conservative feature detection, with graceful fallbacks

These JS features have enough support, and are encouraged and recommended (links point to corresponding *Can I use&hellip;* page):

* [Strict mode](https://caniuse.com/#feat=use-strict)

These other JS features we're avoiding on purpose, for they are not sufficiently supported (links to *Can I use&hellip;* again):

* [`const`](https://caniuse.com/#feat=const)
* [`let`](https://caniuse.com/#feat=let)
* [*Fat arrow* functions](https://caniuse.com/#feat=arrow-functions)

### 2.5. Usability

* Size ratio between adjacent headings should be constant (ie, the font size of an `h1` divided by the font size of an `h2` should be the same as the font size of
  an `h5` divided by the font size of an `h6`)
* When there's an overlay at the top, fragment IDs can't be obscured when navigating to them
  (see [the problem, and a solution](https://codepen.io/tripu/pen/NqyKPZ))
* Don't waste real estate on &ldquo;extra small devices (portrait phones, < 576px)&rdquo; (eg, no fixed overlay for a navigation bar)

The layout changes from a narrow, single-column page on &ldquo;extra small devices (portrait phones, < 576px)&rdquo; and &ldquo;small devices (landscape phones,
≥ 576px)&rdquo; to two columns on &ldquo;medium devices (tablets, ≥ 768px)&rdquo; and three columns on &ldquo;large devices (desktops, ≥ 992px)&rdquo; and
&ldquo;extra large devices (large desktops, ≥ 1200px)&rdquo;.

Depending on the needs and the nature of the page in question, users will enable or disable one or two CSS classes that, when applied to `html` (or perhaps
`body`), will cause some of the main elements to disappear, and the extra space to be used by the rest of elements. So, for example, if a page is simple and
short enough that it does not need a navigation bar *and* a sidebar, the person editing the page can simply not use one of them (or neither) and ensure that
the width available will be used more harmoniously and efficiently by the main content of the page.
