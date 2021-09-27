'use strict';
// средство еsб: блок "левых" объявлений
const sentences = [
    { subject: 'JavaScript', verb: 'is', object: 'great'},
    { subject: 'Elepants', verb: 'are', object: 'large'},
];
//средство еs б : деструктуризация объекта
function say({subject, verb, object}) {
    //средство еsб: строки шаблона
    console.log('${subject} ${verb} ${object}');
}
//средство es6: for..of
for(let s of sentences){
    say(s);
}