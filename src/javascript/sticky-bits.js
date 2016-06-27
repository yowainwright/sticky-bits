(function( window, factory ) {

  StickyBits = window.StickyBits || {};

  if ( 'undefined' === typeof StickyBits ) return console.log('Unmet Dependencies');

  factory( StickyBits );

})( this, function( $, utils ) {

  StickyBits = function( stickyId ) {

    var selector = document.getElementById( stickyId ),
        wrapper = document.createElement("div"),
        divAdded = false;
        wrapper.id = stickyID + '-sticky-wrapper';

    if ( ! divAdded ) {
      selector.parentNode.insertBefore(wrapper, selector);
      divAdded = true;
    }
    selector.parentNode.removeChild(selector);
    wrapper.appendChild(selector); 

    var stickBitClass = typeof stickBitClass !== 'undefined' ? stickBitClass : 'js-is-sticky-bit';

    var makeSticky = function() {
      var offset = wrapper.offsetTop;
      if ( offset >= window.scrollY ) {
        wrapper.className = '';
      } else {
        wrapper.className += stickBitClass;
      }
    };
    
    window.addOnScroll = function( makeSticky ) {
      var otherOnScroll = window.onscroll;
      window.onscroll = function() {
        if( otherOnScroll ) {
          otherOnScroll();
          makeSticky();
        }
      };
    };

    return this;

  };
  
});