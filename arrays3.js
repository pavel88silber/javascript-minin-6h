const cars = ['Mazda', 'Mercedes', 'Ford', 'BMW', 'Infinity']

const fibs = [1, 1, 2, 3, 5, 8]


console.log('fibs => ' + fibs)
const pow2 = pow => pow ** 2
const pow2Fib = fibs.map(pow2)
console.log('pow2Fib => ' + pow2Fib)

console.log('========== filter() #1 =============')
const filteredNumbers = fibs.filter(num => num >= 3)
console.log('filteredNumbers (num >= 3)   ' + filteredNumbers)

console.log('========== reduce() #1 =============')
const people = [
    {name: 'Vladislav', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700}
]
console.log('========== Accumulate #1   REDUCE() with condition =============')
// array.reduce(accumulate, iteration element)
const allBudget = people.reduce((acc, person) => {
    if (person.budget > 2000) {
        acc += person.budget
    }
    return acc
}, 0)   // start from , number (0)

console.log(allBudget)








