(function( window, factory ) {
  StickyBits = window.StickyBits || {};
  if ( 'undefined' === typeof StickyBits ) return console.log('Unmet Dependencies');
  factory( StickyBits );
})( this, function( $, utils ) {
  window.StickyBits = function( stickyId ) {
    var selector = document.getElementById( stickyId ),
        wrapper = document.createElement("div"),
        divAdded = false,
        stickyParentId = stickyId + '-sticky-wrapper';
        wrapper.id = stickyParentId;
    if ( ! divAdded ) {
      selector.parentNode.insertBefore(wrapper, selector);
      divAdded = true;
    }
    selector.parentNode.removeChild(selector);
    wrapper.appendChild(selector); 
    var stickyBitClass = 'js-is-sticky-bit';
    var stickyParent = document.getElementById( stickyParentId );
    var makeSticky = function() {
      var offset = wrapper.offsetTop;
      console.log(offset, window.scrollY);
      if ( offset >= window.scrollY ) {
        return wrapper.className = '';
      } else {
        if ( stickyParent.className.indexOf('' + stickyBitClass +'') > -1 ) return;
        return wrapper.className += stickyBitClass;
      }
    };
    window.addOnScroll = function( makeSticky ) {
      var otherOnScroll = window.onscroll;
      window.onscroll = function() {
        if ( otherOnScroll ) {
          otherOnScroll();
          makeSticky();
        } else {
          makeSticky();
        }
      };
    };
    window.addOnScroll(makeSticky);
    return this;
  }; 
});