console.log('hello');

const fullName = require('./modules/names')
const hobbies = require('./modules/hobbies')

console.log(fullName('matteo', 'dragotto'));
console.log(hobbies('Nuoto', 'Corsa', 'Calcio'));

function namesAndHobbies () {
  return {fullname: fullName('matteo', 'dragotto').name, hobbies: hobbies('Nuoto', 'Corsa', 'Calcio').hobbies }
}

console.log(namesAndHobbies());



