(function( window, factory ) {

  var $ = window.jQuery;
  LL = window.LL || {};
  LL.utils = window.LL.utils || {};

  if ( 
    'undefined' === typeof $ || 
    'undefined' === typeof LL || 
    'undefined' === typeof LL.utils
  ) return console.log('Unmet Dependencies');

  factory($, LL, LL.utils);

})( this, function( $, utils ) {

  LL.utils.fixed = function( selector, positionClass, parentClass ) {

    var $selector = $(selector);

    if ( !$selector.parent().hasClass(parentClass) ) {
      $selector
        .wrap('<div class="'+parentClass+'" style="height:'+ $selector.outerHeight() +'px"></div>')
      ;
    } 
    var offset = $selector.parent('.'+parentClass).offset().top;

    if ( offset >= $(window).scrollTop() ) {
      $selector.removeClass(positionClass);
    } else {
      $selector.addClass(positionClass);
    }

    return this;

  };
  
});