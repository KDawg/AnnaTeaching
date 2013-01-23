
function learnSubtract() {

	var i;
	var value;

	var start = 100;
	var end = 0;
	var by = 5;

	value = start;

	for (i = start; i >= end; i -= by) {

		document.write(value + '<br/>');

		value = value - by;
	}

}