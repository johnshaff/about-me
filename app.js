// we are declaring the

var userName = prompt('Please tell write your name below');
alert('Hi ' + userName);
console.log('the user\'s name is ' + userName);

// First question

var response1 = prompt('Insert first question here').toLowCase();
var correctAnswer1 = 'yes';

if (correctAnswer1 === response1 || correctAnswer1[0] === response1) {
  alert('Great job ' + userName + ' that is correct');
}
else {
  alert('Sorry ' + userName + 'that is incorrect');
}

// Second question
