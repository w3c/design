# Templates

1. [Types](#1-types)
1. [Design considerations](#2-design-considerations)
   1. [General](#21-general)
   1. [HTML](#22-html)
   1. [CSS](#23-css)
   1. [JS](#24-js)

## 1. Types

* [Minimal](minimal/)
* [Extended](extended/)

## 2. Design considerations

### 2.1. General

* Progressive enhancement (in particular: no vital features should depend on JS)
* Readability &amp; maintainability: proper indentation, no minification of resources
* Indentation: two spaces
* Charset: Unicode
* Encoding: UTF-8

### 2.2. HTML

* HTML5. *Doctype*: `<!DOCTYPE html>`
* Language declarations (*locale*): `en-GB`
* Strong use of semantic elements; in particular: `header`, `main`, `footer`, `nav`, `aside`, `section` and `article`
* Whenever possible, [polyglot HTML5](https://www.w3.org/TR/html-polyglot/) (eg: we close all tags)

### 2.3. CSS

* We adopt [Bootstrap](https://getbootstrap.com/) 4.x's [responsive breakpoints](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints)

### 2.4. JS

* Semicolons
* Behaviour encapsulated inside IIFE's
* Conservative feature detection, with graceful fallbacks

These JS features have enough support, and are encouraged and recommended:

* [Strict mode](https://caniuse.com/#feat=use-strict)

These other JS features we're avoiding on purpose, for they are not sufficiently supported (links point to corresponding *Can I use&hellip;* page):

* [`const`](https://caniuse.com/#feat=const)
* [`let`](https://caniuse.com/#feat=let)
* [*Fat arrow* functions](https://caniuse.com/#feat=arrow-functions)
