alert ('Добро пожаловать');
var quest = confirm('Хотите пройти опрос?');
if (quest == False) {
    alert('Как пожелаете');
}
else {
   var quest1 = confirm('Вопрос №1. ...?');
   if (quest1 == True) {
       alert('Правильно');
   }
   else {
       alert('К сожалению, вы ошиблись ');
   }
   var quest2 = confirm('Вопрос №2. ... ?');
       if (quest2 == True) {
           alert('Верно ');
       }
       else {
           alert('Неправильный ответ');
       }
    var quest3 = confirm('Вопрос №3. ...?');
        if (quest3 == True) {
            alert('Вы правы');
        }
        else {
            alert('Вы не угадали');
        }
    var quest4 = confirm('Вопрос №4. ...');
        if (quest4 == True) {
            alert('Совершенно верно');
        }
        else {
            alert('Вы не правы');
        }
    var quest5 = confirm('Вопрос №5. ...?');
        if (quest5 == True) {
            alert('Верный ответ');
        }
        else {
            alert('Как жаль, но вы не правы');
        }
}
