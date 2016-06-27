// NOTE
// This script is meant for this bower package only
(function(document) { 

	if ( window.location.href.indexOf("?=qunit") <= -1) return;
	$('#qunit-wrapper').show();

	// Is QUnit loaded?
	QUnit.test( "Is QUnit Loaded?", function( assert ) {
  	assert.ok( 1 == "1", "QUnit is loaded, we can test" );
	});

})(this, this.document);