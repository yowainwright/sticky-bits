(function( window, factory ) {

  StickyBits = window.StickyBits || {};
  if ( 'undefined' === typeof StickyBits ) return console.log('Unmet Dependencies');
  factory( StickyBits );

})( this, function( utils ) {

  window.StickyBits = function( 
    stickyId, 
    stickyStopId
  ) {
    var selector = document.getElementById( stickyId ),
        wrapper = document.createElement("div"),
        divAdded = false,
        stickyParentId = stickyId + '-sticky-wrapper',
        stickyStop = stickyStopId ? document.getElementById( stickyStopId ) : false;
    wrapper.id = stickyParentId;
    if ( ! divAdded ) {
      selector.parentNode.insertBefore(wrapper, selector);
      divAdded = true;
    }
    selector.parentNode.removeChild(selector);
    wrapper.appendChild(selector); 

    var stickyParent = document.getElementById( stickyParentId ),
        stickyParentHeight = selector.offsetHeight;
    stickyParent.style.height = stickyParentHeight + 'px';

    var stickiness = function() {

      var offset = wrapper.offsetTop,
          scrollSpot = window.scrollY;
      if ( stickyStop !== false ) {
        stopOffset = stickyStop.offsetTop;
        selector.style = '';
      }
      if ( offset >= scrollSpot ) {
        stickyParent.setAttribute('data-stickybits-sticky', false);
      }
      if ( offset < scrollSpot ) {
        stickyParent.setAttribute('data-stickybits-stop', false);
        stickyParent.setAttribute('data-stickybits-sticky', true);
        selector.style = '';
      }
      if ( stickyStop !== false ) {
          if ( stopOffset < scrollSpot ) {
            stickyParent.setAttribute('data-stickybits-sticky', false);
            stickyParent.setAttribute('data-stickybits-stop', true);
            selector.style.top = stopOffset +'px';
          }
      }

      return;
    };

    window.addOnScroll = function( stickiness ) {
      var otherOnScroll = window.onscroll;
      window.onscroll = function() {
        if ( otherOnScroll ) {
          otherOnScroll();
          stickiness();
        } else {
          stickiness();
        }
      };
    };

    window.addOnScroll(stickiness);
    return this;
  }; 

});