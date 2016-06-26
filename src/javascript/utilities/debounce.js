(function( window, factory ) {

	LL = window.LL || {};
	LL.utils = window.LL.utils || {};

	if ( 
		'undefined' === typeof LL || 
		'undefined' === typeof LL.utils
	) return console.log('Unmet Dependencies');

  factory(LL, LL.utils);

})(this, function( utils ) {
  // Ref: http://underscorejs.org/ debounce
	LL.utils.debounce = function (func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
	
});