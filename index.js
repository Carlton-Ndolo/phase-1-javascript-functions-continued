// code your solution here
function saturdayFun(hobby = 'roller-skate') {
    return `This Saturday, I want to ${hobby}!`;
}
function mondayWork(plan = 'go to the office') {
    return `This Monday, I will ${plan}.`;
}
function wrapAdjective(person = '*') {
    return function(adjective = 'special') {
        return `You are ${person}${adjective}${person}!`;
    };
}

const praise = wrapAdjective();
console.log(praise()); 

