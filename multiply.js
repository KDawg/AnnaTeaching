
function learnMultiply() {

	var i;
	var value;

	var num = 3;
	var start = 0;
	var end = 20;
	var by = 1;

	for (i = start; i <= end; i += by) {

		value = num * i;
		document.write(num + ' x ' + i + ' = ' + value + '<br/>');

	}

}