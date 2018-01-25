(function(window) {
  'use strict';

  var html = document.getElementsByTagName('html');
  if (html && 1 === html.length) {
    html = html.item(0);
    html.classList.remove('no-js');
    html.classList.add('js');
  }

})(window);
