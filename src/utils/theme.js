export const runThemeInit = () => {
  if (window.SOUTheme && typeof window.SOUTheme.initPage === 'function') {
    window.SOUTheme.initPage();
  }
};

export const refreshOwl = (selector) => {
  const $ = window.jQuery;
  if (!$) return;
  const $el = $(selector);
  if (!$el.length) return;
  if ($el.hasClass('owl-loaded')) {
    $el.trigger('refresh.owl.carousel');
    return;
  }
  runThemeInit();
};

export const destroyOwl = (selector) => {
  const $ = window.jQuery;
  if (!$) return;
  const $elements = $(selector);
  if (!$elements.length) return;

  $elements.each(function () {
    const $el = $(this);
    if (!$el.hasClass('owl-loaded')) return;

    // Preserve real items before clearing Owl wrappers.
    const $items = $el.find('.owl-item > .item').detach();

    $el.trigger('destroy.owl.carousel');
    $el.removeClass('owl-loaded owl-hidden');

    // Remove any leftover wrappers/clones.
    $el.find('.owl-stage-outer, .owl-stage, .owl-item, .cloned').remove();

    if ($items.length) {
      $el.empty().append($items);
    }
  });
};
