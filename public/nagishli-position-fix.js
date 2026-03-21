/**
 * NagishLi injects its own stylesheet with bottom:0;left:0 for BL position.
 * Inline !important beats that so the FAB keeps padding from the viewport edge.
 */
(function () {
  /* וואטסאפ ~76px רוחב, FAB נגישות 56px - +10px מיישר מרכזים; ערכים תואמים ל-index.html */
  var bottom = 'calc(0.75rem + env(safe-area-inset-bottom, 0px))';
  var left = 'calc(10px + env(safe-area-inset-left, 0px))';

  function apply() {
    var el = document.getElementById('NagishLiBar');
    if (!el) return;
    el.style.setProperty('bottom', bottom, 'important');
    el.style.setProperty('left', left, 'important');
    el.style.setProperty('right', 'auto', 'important');
    el.style.setProperty('top', 'auto', 'important');
  }

  var tries = 0;
  var id = setInterval(function () {
    apply();
    tries += 1;
    if (document.getElementById('NagishLiBar') || tries > 50) clearInterval(id);
  }, 80);

  window.addEventListener('load', apply);
  document.addEventListener('DOMContentLoaded', apply);
})();
