
(function() {

	var i;
	var value;

	var start = 1;
	var end = 10;
	var by= 1;

	value = start;

	for (i = start; i <= end; i += by) {

		document.write(value + '<br/>');

		value = value + by;
	}

}) ();