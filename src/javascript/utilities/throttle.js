(function( window, factory ) {

	LL = window.LL || {};
	LL.utils = window.LL.utils || {};

	if ( 
		'undefined' === typeof LL || 
		'undefined' === typeof LL.utils
	) return console.log('Unmet Dependencies');

  factory(LL, LL.utils);

})( this, function( utils ) {

	// Ref: http://underscorejs.org/ throttle
	LL.utils.throttle = function ( callback, limit ) {
    var wait = false;
    return function() {
      if ( !wait ) {
        callback.call();
        wait = true;
        setTimeout( function() {
          wait = false;
        }, limit );
      }
    };
	};
	
});