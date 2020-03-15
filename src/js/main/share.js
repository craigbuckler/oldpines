/*
  native OS share

  // requires: lib.js
*/
/* global ow */

(function() {

  'use strict';

  // sharing supported?
  if (!navigator.share || !document.body.classList) return;

  var
    cfg = {
      shareClass: 'share',
      linkClass: 'linkable'
    },
    shareLink = ow.lib.className(cfg.shareClass);

  // no links
  if (!shareLink.length) return;

  // make linkable
  ow.lib.each(shareLink, function(e) {
    e.tabIndex = 0;
    e.setAttribute('role', 'button');
    e.classList.add(cfg.linkClass);
    e.addEventListener('click', share, false);
    e.addEventListener('keypress', share, false);
  });

  function share(e) {

    // share clicked?
    if (!e.target.classList.contains(cfg.shareClass) || (e.type === 'keypress' && e.keyCode !== 13 && e.keyCode !== 32)) return;

    // share API call
    navigator.share(ow.lib.pageInfo());

  }

})();
