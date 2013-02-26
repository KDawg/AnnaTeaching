
function cardsMultiply() {

  var value;

  var num = 2;
  var end = 11;
  var by;
  var answer;

  by = Math.floor(Math.random() * end);                                  11
  answer = by * num;

  document.write('What is ' + num + ' x ' + by + ' = <input id="value"/><button id="answer">Answer</button><br/>');

  $('#answer').on('click', function() {
    if ($('#value').val() == answer) {
      alert('Yes. Good job!');
    } else {
      alert('No. Try again');
    }
  })
}