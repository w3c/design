# Technical decisions

*Low-level, geeky guidelines and conventions about how we code web pages*

Rationale for decisions is indicated by this icon: 👉

1. [General](#1-general)
1. [HTML](#2-html)
1. [CSS](#3-css)
1. [JS](#4-js)
1. [Artwork](#5-artwork)

## 1. General

* Character set: **Unicode**  
  👉 Universal, multilingual, standard
* Encoding: **UTF-8**  
  👉 Backwards compatible with ASCII, [dominant on the web](https://en.wikipedia.org/wiki/File:Utf8webgrowth.svg#/media/File:Utf8webgrowth.svg)
* Good **indentation**  
  👉 Readability, maintainability
* Indentation: **two spaces**  
  👉 White spaces are consistent, while tabs are rendered differently; four spaces are too many bytes and keystrokes, and waste too much useful width on editors
* **No concatenation or minification** of resources  
  👉 Simpler pipeline (fewer tools), our source code should be an example to the world, optimisations not necessary with HTTP/2
* **Conservative adoption of &ldquo;new&rdquo; features**: only when widely supported by UA's
* **Progressive enhancement** (in particular: no vital features should depend on JS)

## 2. HTML

* HTML5 (doctype: `<!DOCTYPE html>`)
* Language declarations (*locale*): `en-GB`
* Attribute values always wrapped, and wrapped in `"` (double quotes)
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

* Semicolons at the end of statements
* Behaviour encapsulated inside IIFE's  
  👉 To avoid polluting the global scope
* Conservative feature detection, with graceful fallbacks
* Quotes for strings: `'` (single quotation mark)  
  👉 `"` (double quote) requires one extra keystroke (to hold &#8679;)

These JS features have enough support, and are encouraged (links point to corresponding *caniuse.com* page):

* [Strict mode](https://caniuse.com/#feat=use-strict)

These other JS features we are avoiding on purpose, for they are not sufficiently well supported (links to *caniuse.com* again):

* [`const`](https://caniuse.com/#feat=const)
* [`let`](https://caniuse.com/#feat=let)
* [*Fat arrow* functions](https://caniuse.com/#feat=arrow-functions)
* [Template literals](https://caniuse.com/#feat=template-literals)

## 5. Artwork

* Preferably vector images (SVG) when possible
* Sprites when possible (as opposed to many individual image files), but beware of issues when UA's apply some zoom to the page
* We do *not* use *icon fonts* (eg, Font Awesome)