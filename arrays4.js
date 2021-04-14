console.log('////////////////// Chaining //////////////////////')

const people = [
    {name: 'Vladislav', budget: 4200},
    {name: 'Elena', budget: 35000},
    {name: 'Victoria', budget: 17000},
    {name: 'Fred', budget: 2290},
    {name: 'Leonid', budget: 1120}

]
// filter of budgets more than 2000
const person = people
    .filter((val) => val.budget > 2000)
    if (people.map((len => len.budget.length >= 4))) {
        console.log(person)
    }
console.log(person)

console.log('////////////////// Get data from old array to new array  //////////////////////')