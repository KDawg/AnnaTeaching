
function learnMultiply() {

	var i;
	var value;

	var num = 2;
	var start = 0;
	var end = 109;
	var by = 1;

	for (i = start; i <= end; i += by) {
		value = num * i;
		document.write(num + ' x ' + i + ' = ' + value + '<br/>');
	}

}