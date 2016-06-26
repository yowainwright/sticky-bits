(function() {

	if (LL === 'undefined' || LL.utils === 'undefined' ) return;

	LL.utils.toggler('#button-menu, #page-cover', 'body', 'js-side-nav-is-displayed');

	if ( $('#brand-nav').length ) {
		var stickyNav = function() { LL.utils.fixed('#brand-nav', 'js-brand-nav--is-fixed', 'js-brand-nav-wrap'); };

		$(window)
			.on('scroll', LL.utils.throttle(stickyNav, 0))
			.on('resize', LL.utils.debounce(stickyNav, 0, true))
		;
	}

})();