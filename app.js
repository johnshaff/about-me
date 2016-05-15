// We are finding out who the game player is and asking him if he's sure he wants to play a game.

var userName = prompt('Please write your name below:');
var totalCorrectAnswers = 0;
confirm('Hi ' + userName +', let\'s play a game. Please read John\'s resume and answer the following five questions. Click cancel if you don\'t want to play.');
console.log('the user\'s name is ' + userName);

// First game question

var response1 = prompt('Do you think John loves LA?').toLowerCase();
var correctAnswer1 = 'yes';

if (correctAnswer1 === response1 || correctAnswer1[0] === response1) {
  alert('It\'s complicated actually. John loves LA, but he also hates it so bad sometimes.');
  console.log(userName + ' answered the first question correctly');
  ++totalCorrectAnswers;
}

else {
  alert('All good, no way you could have known this.');
  console.log(userName + ' answered the first question incorrectly');
}

// Second game question

var response2 = prompt('Did John ever work for David Zucker?').toLowerCase();
var correctAnswer2 = 'yes';

if (correctAnswer2 === response2 || correctAnswer2[0] === response2) {
  alert('Yes he did! Fun fact, David\'s brother directed the hit movie Ghost with Demo Moore and Patric Swayze.');
  console.log(userName + ' answered the second question correctly');
  ++totalCorrectAnswers;
}
else {
  alert('Dude all you had to do was read his resume. It\'s like the last thing John did.');
  console.log(userName + 'answered the second question incorrectly. ' + userName + ' may need some help reading.');
}

// Third game question

var response3 = prompt('Did Michael Peyser ever run Disney\'s live action studio?').toLowerCase();
var correctAnswer3 = 'yes';

if (correctAnswer3 === response3 || correctAnswer3[0] === response3) {
  alert('Correct! Michael Peyser did run that Studio.');
  console.log(userName + ' answered the third question correctly');
  ++totalCorrectAnswers;
}
else {
  alert(userName + ', seriously. You need to do better. Because right now you\'re sucking.');
  console.log(userName + ' answered the third question incorrectly. At this point you may want to take anything sharp away from ' + userName);
}

  // Fourth game question

var response4 = prompt('Has John ever worked with international super models?').toLowerCase();
var correctAnswer4 = 'yes';

if (correctAnswer4 === response4 || correctAnswer4[0] === response4) {
  alert('Heyooo, lucky guy right?');
  console.log(userName + ' answered the fourth question correctly.');
  ++totalCorrectAnswers;
}
else {
  alert('Sorry. Yes. Yes he did. Don\'t be Jelly.');
  console.log(userName + ' answered the fourth question incorrectly. ' + userName + ' may be caveman status.');
}

//   // Fifth game question

var response5 = prompt('Did John go to University of Florida?').toLowerCase();
var correctAnswer5 = 'no';

if (correctAnswer5 === response5 || correctAnswer5[0] === response5) {
  alert('Good job. John hates that school, and would never go there... ever!');
  console.log(userName + ' answered the fifth question correctly.');
  ++totalCorrectAnswers;
}
else {
  alert('We can\'t believe you would ever think that John would go to that crack house of a school... no offense if you smoke crack... but also maybe you should stop smoking crack.');
  console.log(userName + ' answered the fifth question incorrectly.');
}

// Sixth game question

var johnAge = 35;
var attempts6 = 5;

for (var i = 5; i > 0; i--) {
  var response6 = parseInt(prompt('Enter your best guess for John\'s age:'));
  if (response6 === johnAge) {
    alert('Great job ' + userName + '. John is ' + johnAge + '.');
    ++totalCorrectAnswers;
    i = 0;
  }
  else {
    --attempts6;
    alert('Sorry ' + userName + ' that\'s incorrect. You have ' + attempts6 + ' more attempts to be a better human being.');
  }
};


// 7th game question

var johnCountries = ['America', 'China', 'Afghanistan'];
var attempts7 = 6;

while (attempts7 > 0) {
  var response7 = prompt('Please guess at least one country John has lived in:');
  --attempts7;
  if (response7 === johnCountries[0] || response7 === johnCountries[1] || response7 === johnCountries[2]) {
    alert('Great job ' + userName + ' John has lived in ' + response7 + '. Here are all the countries John has lived in: ' + johnCountries[0] + ', ' + johnCountries[1] + ', and ' + johnCountries[2]);
    ++totalCorrectAnswers;
    attempts7 = 0;
  }
  else {
    alert('Sorry ' + userName + ' that\'s incorrect. You have ' + attempts7 + ' more guesses.');
  }
};

alert('Hey ' + userName + '! Your total score was: ' + totalCorrectAnswers);
