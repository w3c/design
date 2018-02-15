# Design principles

*Our consensus about usability, UX and aesthetics*

Rationale for decisions is indicated by this icon: 👉

1. [Usability](#1-usability)

## 1. Usability

* Size ratio between adjacent headings should be constant (ie, the font size of an `h1` divided by the font size of an `h2` should be the same as the font size of
  an `h5` divided by the font size of an `h6`)
* When there's an overlay at the top, fragment IDs can't be obscured when navigating to them
  (see [the problem, and a solution](https://codepen.io/tripu/pen/NqyKPZ))
* Don't waste real estate on &ldquo;extra small devices (portrait phones, < 576px)&rdquo; (eg, no fixed overlay for a navigation bar)

The layout changes from a narrow, single-column page on &ldquo;extra small devices (portrait phones, < 576px)&rdquo; and &ldquo;small devices (landscape phones,
≥ 576px)&rdquo; to two columns on &ldquo;medium devices (tablets, ≥ 768px)&rdquo; and three columns on &ldquo;large devices (desktops, ≥ 992px)&rdquo; and
&ldquo;extra large devices (large desktops, ≥ 1200px)&rdquo;.
