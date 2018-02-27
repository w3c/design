# Design principles

*Our consensus about usability, UX and aesthetics*

*Rationale* for decisions is indicated by this icon: 👉

1. [Usability](#1-usability)

---

## 1. Usability

* Size ratio between adjacent headings should be constant (ie, the font size of an `h1` divided by the font size of an `h2` should be the same as the font size
  of an `h2` divided by the font size of an `h3`, etc).
  However, there are 6 possible levels of headings, and then &ldquo;normal&rdquo; text, which gives a total of seven different sizes to reflect the structure
  (the *outline*) of the document.
  Because the smallest headings (`h6` and `h5`, even `h4`) are used way less often, we stop differentiating sizes after `h4`: we put no differences between the
  sizes of `h4`, `h5`, `h6` and `p` (but headings will look different still, because of indentation, font weight, colour, etc).
* When there's an overlay at the top, fragment IDs can't be obscured when navigating to them
  (see [the problem, and a solution](https://codepen.io/tripu/pen/NqyKPZ))
* Don't waste real estate on &ldquo;extra small devices (portrait phones, < 576px)&rdquo; (eg, no fixed overlay for a navigation bar)

The layout changes from a narrow, single-column page on &ldquo;extra small devices (portrait phones, < 576px)&rdquo; and &ldquo;small devices (landscape phones,
≥ 576px)&rdquo; to two columns on &ldquo;medium devices (tablets, ≥ 768px)&rdquo; and three columns on &ldquo;large devices (desktops, ≥ 992px)&rdquo; and
&ldquo;extra large devices (large desktops, ≥ 1200px)&rdquo; (see [Bootstrap](https://getbootstrap.com/) 4.x's [responsive breakpoints](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints)).

Depending on the needs and the nature of your page, you can enable or disable certain CSS classes that, when applied to `html`, will cause some of the main
elements to disappear, and the extra space to be used by the rest of elements.
So, for example, if your page is simple and short enough that it does not need a navigation bar *and* a sidebar, you can simply not use one of them (or neither)
and ensure that the width available will be used more harmoniously and efficiently by the main content of the page.
