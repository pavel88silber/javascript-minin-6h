// const cars = ['Mazda', 'Mercedes', 'Ford']
// const cars = new Array('Mazda', 'Mercedes', 'Ford')
// console.log(cars)
// console.log(cars[1])
// console.log(cars[3])
// console.log(cars.length) // length 3
// console.log('=========== Add new ============')
// cars[0] = 'Porsche'
// cars[3] = 'Mazda'
// console.log(cars)
// console.log('============ Arrays Cycles ===========')

// for (let i = 0; i < cars.length; i++) {
//     console.log(i + ' ' + cars[i])
// }

// for (let car of cars) {
//     console.log(car)
// }

const cars = ['Mazda', 'Mercedes', 'Ford', 'BMW']

cars.push('Renault') // push to end
cars.unshift('Volga') // push to start
const firstItem = cars.shift() // delete [0] and safe element
console.log(cars)
console.log(firstItem)

const lastItem = cars.pop() // delete [last element] and safe
console.log('lastItem in cars ' + lastItem)

console.log('=======================')
console.log(cars.reverse()) // reverse an array

console.log('=========== split() revers() join() ============')
// Task 1
const text = "Privet, we learn JS"
// const reverseText = text.split() // [Privet, we learn JS]   because ,
//const reverseText = text.split('') // [P, r, i, v, e, t, ...]
// const reverseText = text.split('').reverse() // [S, J, , n, r, a, e,l, ...]
const reverseText = text.split('').reverse().join('') // join by default (,)
console.log(reverseText)

console.log('========== indexOf() =============')
console.log(cars)
console.log('index of Mercedes is ' + cars.indexOf('Mercedes'))
console.log(cars)
console.log('========== changing an element with indexOf() =============')
const index = cars.indexOf('Mercedes')
cars[index] = 'Porsche'
console.log(cars)

console.log('========== find() =============')
const people = [
    {name: 'Vladislav', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700}
]
// const person = people.find(() => {
//     return people.budget > 4000
// })

// console.log('========== find() with loop for  =============')
// for (const person of people) {
//     if(person.budget > 4000)
//         console.log(person)
// }

console.log('========== find() with Lambda function =============')
const person = people.find((person) => person.budget < 2000)
console.log(person)
























