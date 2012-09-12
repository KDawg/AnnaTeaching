
(function() {

	var i;
	var value;
	var start = 0;
	var end = 1000000;
	var by= 10;

	value = start;

	for (i = start; i <= end; i += by) {

		document.write(value + '<br/>');

		value = value + by;
	}

}) ();