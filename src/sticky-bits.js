(function( window, factory ) {

  StickyBits = window.StickyBits || {};
  factory( StickyBits );

})( this, function( utils ) {

  window.StickyBits = function( 
    stickyId, 
    stickyStopId,
    stickyCloneId
  ) {

    var selector = document.getElementById( stickyId ),
        stickyStop = stickyStopId ? document.getElementById( stickyStopId ) : false,
        stickyClone = stickyCloneId ? document.getElementById( stickyCloneId ) : false;

    if ( stickyClone === false ) {
      var wrapper = document.createElement("div"),
          divAdded = false,
          stickyParentId = stickyId + '-sticky-wrapper';
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
      var offsetter = wrapper;
      var scrollElement = window;
    } else {
      var offsetter = selector;
      var scrollElement = document.getElementById('scrolled-element');
    }
    var stickiness = function() {
      var offset = offsetter.offsetTop,
          scrollSpot = scrollElement === window ? scrollElement.scrollY : scrollElement.scrollTop;
      if ( stickyStop !== false ) {
        stopOffset = stickyStop.offsetTop;
        offsetter.style.top = 'auto';
      }
      if ( offset >= scrollSpot ) {
        offsetter.setAttribute('data-stickybits-sticky', false);
      }
      if ( offset < scrollSpot ) {
        offsetter.setAttribute('data-stickybits-stop', false);
        offsetter.setAttribute('data-stickybits-sticky', true);
        offsetter.style.top = '0';
      }
      if ( stickyStop !== false ) {
        if ( stopOffset < scrollSpot ) {
          offsetter.setAttribute('data-stickybits-sticky', false);
          offsetter.setAttribute('data-stickybits-stop', true);
          offsetter.style.top = stopOffset +'px';
        }
      }
      return;
    };

    scrollElement.addOnScroll = function( stickiness ) {
      var otherOnScroll = scrollElement.onscroll;
      scrollElement.onscroll = function() {
        if ( otherOnScroll ) {
          otherOnScroll();
          stickiness();
        } else {
          stickiness();
        }
      };
    };

    scrollElement.addOnScroll(stickiness);

    return this;
  }; 

});