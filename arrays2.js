const cars = ['Mazda', 'Mercedes', 'Ford', 'BMW', 'Infinity']

const fibs = [1, 1, 2, 3, 5, 8]

const people = [
    {name: 'Vladislav', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700}
]

console.log('========== includes() =============')
console.log(cars.includes('Ford')) // true
console.log('========== map() #1 =============')
const upperCaseCars = cars.map(car => {
    return car.toUpperCase()   // [ 'MAZDA', 'MERCEDES', 'FORD', 'BMW', 'INFINITY' ] NEW ARRAY !!!
})
console.log(upperCaseCars)
console.log('========== map() #2 =============')
const fibInSquare = fibs.map(num => num**2)
console.log(fibInSquare)

console.log('========== map() #3 ============= "MAP" USE SOMETHING TO ALL ELEMENTS' )
const fibInSquare2 = num => num ** 2
console.log(fibs.map(fibInSquare2))

console.log('========== map() #4 ============= map() and again map() ')
const fibInSquare3 = num => num ** 2
const sqrt = sqrt => sqrt - 1
const toStr = toStr => toStr.toString()
// const rev = rev => rev.reverse()
console.log(fibs.map(fibInSquare3).map(sqrt).map(toStr).reverse())


