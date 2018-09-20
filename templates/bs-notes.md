# Notes about adopting Bootstrap 4

## Overhead

### CSS

Since we'd *theme* BS to fit our needs, there should be just one extra CSS file.
Or none, if that file actually can *replace* existing CSS file(s).

In my experiments, **non-minified** compiled CSS without theming is ~150 KB, and the same one **minified** is ~130 KB.
GZipped, they are ~22 KB and ~20 KB, respectively.

With our theming, I would expect them to increase up to ~200 KB and ~170 KB, respectively.
(Similar ratio for the GZipped versions.)

### JS

(These sizes are GZipped already.)

* `jquery-3.3.1.slim.min.js`: ~24 KB.
* `popper.min.js`: ~7 KB.
* `bootstrap.min.js`: ~14 KB.

...plus, perhaps, other custom JS we'ld need to write, to customise some behaviour, etc.

### Markup

As discussed, extra elements (typically, `div`s) are needed to *wrap* many widgets -- and also, extra classes.

## Bundling

We could use something like webpack to *bundle* [almost] all CSS together, and [almost] all JS together.
Pros: fewer HTTP requests, in principle faster loading over the net.
Cons: we can't benefit from caching (bad thing, because and jQuery & BS are very popular).

## A11Y

PENDING: Chat with EricP about A11Y and Bootstrap.
