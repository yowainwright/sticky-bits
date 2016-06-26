// NOTE
// This script is meant for this bower package only
(function(document) { 

	if ( window.location.href.indexOf("?=qunit") <= -1) return;
	$('#qunit-wrapper').show();

	// Is QUnit loaded?
	QUnit.test( "Is QUnit Loaded?", function( assert ) {
  	assert.ok( 1 == "1", "QUnit is loaded, we can test" );
	});

	QUnit.test( "Are all of the dependancies loaded?", function( assert ) {
  	assert.ok( typeof jQuery !== 'undefined', "All dependancies has loaded!" );
  	assert.ok( typeof Utils.toggler !== 'undefined', "Toggle has loaded!" );
	});

})(this, this.document);