const superheroes = require('superheroes');
const supervillains = require('supervillains');

console.log(superheroes.all);
console.log(superheroes.random());

supervillains.all.forEach(supervillain => {
    console.log('My super villain is', supervillain);
});
var randomHero = superheroes.random();
var randomVillain = supervillains.random();
console.log("Superhero", randomHero, "is having a fight with", randomVillain,"!");
console.log('Total of villains:', supervillains.all.length);

