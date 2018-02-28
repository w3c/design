# How to use the templates

1. [Simplest set-up](#1-simplest-set-up)
1. [In detail](#2-in-detail)
1. [About principal elements for content](#3-about-principal-elements-for-content)
1. [Other considerations](#4-other-considerations)

---

## 1. Simplest set-up

1. **Download** these three files:
   1. [`index.html`](https://raw.githubusercontent.com/w3c/design/master/templates/generic/index.html)
   1. [`style.css`](https://raw.githubusercontent.com/w3c/design/master/templates/generic/style.css)
   1. [`behaviour.js`](https://raw.githubusercontent.com/w3c/design/master/templates/generic/behaviour.js)
2. In your copy of `index.html`, find all placeholders (eg `@@FOO@@`) and **replace** them with actual information (eg title, author, content)

## 2. In detail

1. **Grab the template** by downloading a subset of [its files](https://github.com/w3c/design/tree/master/templates/generic):
   * These three files you need for sure: `index.html`, `style.css`, `behaviour.js`
   * All the other files are optional (pick one by one if you know what they do, and think they are necessary for the purposes of your page or sub-site)
2. **Edit your copy of `index.html`**:
   * If the main language of your page is *not* English, edit the `lang` attribute of `<html>` accordingly
   * The page includes three empty elements for the proper &ldquo;content&rdquo; of the page: `<nav>`, `<main>`, `<aside>`; decide whether you need one, two, or
     the three of them, and enable/disable them (about this, read more [below](#3-about-principal-elements-for-content))
   * Find all placeholders (eg `@@FOO@@`) and replace them with actual information (eg title, author, content)
3. **If you need custom CSS rules or JS functions**, create new CSS/JS files to hold those, and link to those files from `index.html`.
   Ditto about images and other resources.
   Do *not* edit the resource files that are part of the template (eg `style.css`, `behaviour.js`).

## 3. About principal elements for content

`<main>` should always be there, and hold the bulk or the important content of the page.
Even if that content is just a paragraph.
Do *not* remove it.

You can decide whether you need the other two elements.

As a general rule, most pages will benefit from a `<nav>` element to facilitate *internal* navigation.

`<aside>` may be handy if there is &ldquo;extra&rdquo; content that you want to be in a separate area.
Good examples of this are: contact details for a person, fixed links to resources of a working group, a quotation that complements or expands the content of the
page, a list of &ldquo;related articles&rdquo;&hellip;

## 4. Other considerations

If your page should look or behave differently on UAs that run JavaScript, know that the element `<html>` will always have one of these two classes, depending
on whether JS is running or not: `no-js`, `js`.
You can use that to tweak CSS rules.
