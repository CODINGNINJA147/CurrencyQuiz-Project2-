var readLineSync = require('readline-sync')

var score = 0;
var userInput = readLineSync.question('what is your good name?');
console.log('welcome! '+userInput)
var userAns = readLineSync.question('Do u want to play quiz on currency of different countries?');
console.log('------------')
if (userAns === 'yes') {
    function play(question, answer) {
        var userAnswer = readLineSync.question(question);
        if (userAnswer.toUpperCase() === answer.toUpperCase()) {
            console.log('you entered ' +  userAnswer);
            console.log('congrats! you are right!')
            score++;
            console.log('your score is '+score);
            console.log('------------')
        } else {
            console.log('you entered ' +  userAnswer)
            console.log('oops! you are wrong')
            score = score - 1;
            console.log('your score is ' +score);
            console.log('------------')

        }
    }
    var ques = [{
        question: 'what is the currency of United States of America?',
        answer: 'US dollar'
    },
    {
        question: 'what is the currency of China? ',
        answer: 'renminbi'
    },
    {
        question: 'what is the currency of India? ',
        answer: 'indian rupee'
    },
    {
        question: 'what is the currency of Japan? ',
        answer: 'japanese yen'
    },
    {
        question: 'what is the currency of Malaysia? ',
        answer: 'malaysian rinngit'
    }]
    for(i=0; i<ques.length;i++){
        var currentQuestion = ques[i];
        play(currentQuestion.question,currentQuestion.answer)
    }

}else{
    console.log('ok! thanks for your time.')

}
console.log('------------')
console.log('final socre is '+score);