(function( window, factory ) {

  StickyBits = window.StickyBits || {};
  factory( StickyBits );

})( this, function( utils ) {

  window.StickyBits = function( selectorId ) {

    var stickyBit = document.getElementById( selectorId );

    var stickyPositionTest = function( noPrefixes ) {

      var el = document.createElement( 'test' ),
          position = 'position: ',
          sticky = 'sticky',
          mStyle = el.style;

      if ( ! noPrefixes ) {
        mStyle.cssText = position + [ '-webkit-', '-moz-', '-ms-', '-o-', '' ].join( sticky + ';' + position ) + sticky + ';';
      } else {
        mStyle.cssText = position + sticky;
      }

      return mStyle[ 'position' ].indexOf( sticky ) !== -1;

    };

    var test = stickyPositionTest();
    if ( test === true ) {

      stickyBit.setAttribute('data-position-sticky', true);

    } else {

      var wrapper = document.createElement("div"),
          divAdded = false,
          stickyParentId = selectorId + '-sticky-wrapper',
          stickyParentHeight = stickyBit.offsetHeight;

      wrapper.id = stickyParentId;

      if ( ! divAdded ) {
        stickyBit.parentNode.insertBefore(wrapper, stickyBit);
        divAdded = true;
      }

      stickyBit.parentNode.removeChild(stickyBit);
      wrapper.appendChild(stickyBit); 
      wrapper.style.height = stickyParentHeight + 'px';

    }

    var stickiness = function() {

      var offset,
          scrollPosition = window.scrollY;

      if ( test === true ) {
        offset = stickyBit.offsetTop;
        if ( offset > scrollPosition && stickyBit.style.top === '0') {
          return stickyBit.style.top = 'auto';
        } else {
          return stickyBit.style.top = '0';
        }

      } else {
        offset = wrapper.offsetTop;
        if ( offset > scrollPosition ) {
          return wrapper.setAttribute('data-stickybits-sticky', false);
        } else {
          return wrapper.setAttribute('data-stickybits-sticky', true);
        }
      }
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