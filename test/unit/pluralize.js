new function () {

	module("Pluralize");

	test( "One", function() {
		var arr = [ 1, 21, 31, 41, 51, 61, 71, 81, 91, 101, 1001, "1.0" ],
			need = variants[ 0 ];

		arr.forEach(function( item ) {
			equal(
				Russian.pluralize( parseFloat( item ), variants ), need,
				"Russian.pluralize( " + item + ", [ '" + variants.join("', '") + "' ]) => " + need);
		});
	});

	test( "Few", function() {
		var arr = [ 2, 3, 4, 22, 23, 24, 102, 103, 104, 1002, 1003, 1004, "3.0" ],
			need = variants[ 1 ];

		arr.forEach(function( item ) {
			equal(
				Russian.pluralize( parseFloat( item ), variants ), need,
				"Russian.pluralize( " + item + ", [ '" + variants.join("', '") + "' ]) => " + need);
		});
	});

	test( "Many", function() {
		var arr = [ 0, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, "5.0" ],
			need = variants[ 2 ];

		arr.forEach(function( item ) {
			equal(
				Russian.pluralize( parseFloat( item ), variants ), need,
				"Russian.pluralize( " + item + ", [ '" + variants.join("', '") + " ]) => " + need);
		});
	});

	test( "Other", function() {
		var arr = [ 3.14, Math.PI, Math.cos( 2 ), 1 / 3 ],
			need = variants[ 3 ];

		arr.forEach(function( item ) {
			equal(
				Russian.pluralize( item, variants ), need,
				"Russian.pluralize( " + item + ", [ '" + variants.join("', '") + " ]) => " + need);
		});
	});

	test( "Alias", function() {
		var arr = [ 1, 3, 5 ];

		arr.forEach(function( item, i ) {
			var need = variants[ i ];
			equal(
				Russian.p( parseFloat( item ), variants ), need,
				"Russian.p( " + item + ", [ '" + variants.join("', '") + "' ]) => " + need);
		});
	});

	test( "Use some arguments, not array", function() {
		var arr = [ 1, 3, 5 ];

		arr.forEach(function( item, i ) {
			var need = variants[ i ];
			equal(
				Russian.pluralize( item, variants ), need,
				"Russian.pluralize( " + item + ", '" + variants.join("', '") + "' ) => " + need);
		});
	});

	test( "Funny tests", function() {
		equal(
			Russian.pluralize(), "",
			"Without arguments return empty string");

		equal(
			Russian.pluralize( "1", variants ), variants[ 0 ],
			"Support string number");

		equal(
			Russian.pluralize( "00.3.00", variants ), variants[ 1 ],
			"`\"00.3.00\"` first argument");

		equal(
			Russian.pluralize( 3.14 ), "",
			"Without second argument return empty string");

		equal(
			Russian.pluralize( Infinity, variants ), variants[ 3 ],
			"`Infinity` first argument return `other`: " + variants[ 3 ]);

		equal(
			Russian.pluralize( "", variants ), "",
			"Empty first argument return empty string");

		equal(
			Russian.pluralize( "string", variants ), "",
			"`String` first argument return empty string");

		equal(
			Russian.pluralize( null, variants ), "",
			"`null` first argument return empty string");

		equal(
			Russian.pluralize( undefined, variants ), "",
			"`undefined` first argument return empty string");

		equal(
			Russian.pluralize( true, variants ), "",
			"`true` first argument return empty string");

		equal(
			Russian.pluralize( false, variants ), "",
			"`false` first argument return empty string");

		equal(
			Russian.pluralize( { 1: "one" }, variants ), "",
			"Object first argument return empty string");
	});
};
