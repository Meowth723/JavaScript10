function mathQuiz(count) {
    for (let i = 0; i < count; i++) {;
        let num1 = Math.floor(Math.random() * 20) + 1;
        let num2 = Math.floor(Math.random() * 20) + 1;
        let randomOperator = Math.floor(Math.random() * 3) + 1;
        let operator;
        let correct;

        if (randomOperator === 1) {
            operator = '+'
            correct = num1 + num2
        } 
        else if (randomOperator === 2) {
            operator = '-'
            correct = num1 - num2
        } 
        else {
            operator = '*'
            correct = num1 * num2;
        }

        let userAnswer = prompt(num1 + operator + num2);

        if (userAnswer == correct) {
            console.log("Ваш ответ верный: " + userAnswer);
        } 
        else {
            console.log("Ваш ответ не верный: " + userAnswer + ". Правильный ответ: " + correct + "!");
        }
    }
}

let count = prompt("Введите количество примеров");
mathQuiz(count);
alert('Зайдите пожалуйста в консоль для проверки результатов')