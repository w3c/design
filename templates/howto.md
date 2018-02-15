# How to use the templates

1. [In a nutshell](#1-in-a-nutshell)
1. [About principal elements for content](#2-about-principal-elements-for-content)
1. [Other considerations](#3-other-considerations)

## 1. In a nutshell

1. Grab the template: download [all files of the template](generic/).
2. Edit your copy of `index.html`:
   * The template includes three elements for the proper &ldquo;content&rdquo; of the page: `<nav>`, `<main>` and `<aside>`.
     Decide whether you need one, two, or three of them, and enable/disable them (see below).
   * If the main language of your page is not English, edit the `lang` attribute of `<html>` accordingly.
   * Find all `@@PLACEHOLDERS@@` in the page, and replace with actual values (eg, title, content, author&hellip;).
3. If you need custom CSS rules or JS functions, create new CSS/JS files to hold those, and link to those files from `index.html`.
   Do *not* edit the resource files that are part of the template (`style.css`, `behaviour.js`, images, etc).

## 2. About principal elements for content

`<main>` should always be there, and hold the bulk or the important content of the page.
Even if that content is just a paragraph.
Do *not* remove it.

You can decide whether you need the other two elements.

As a general rule, most pages will benefit from a `<nav>` element to facilitate internal navigation.

`<aside>` may be handy if there is &ldquo;extra&rdquo; content that you want to be in a separate area.
Good examples of this are: contact details for a person, fixed links to resources of a working group, a quotation that complements or expands the content of the
page&hellip;

## 3. Other considerations

If your page should look different on UAs that run JavaScript, know that `<html>` will have one of these two classes, depending on that: `no-js` or `js`.
You can use that to tweak CSS rules.

Depending on the needs and the nature of your page, you can enable or disable certain CSS classes that, when applied to `html`, will cause some of the main
elements to disappear, and the extra space to be used by the rest of elements.
So, for example, if your page is simple and short enough that it does not need a navigation bar *and* a sidebar, you can simply not use one of them (or neither)
and ensure that the width available will be used more harmoniously and efficiently by the main content of the page.
\[Detail what those classes are.\]
