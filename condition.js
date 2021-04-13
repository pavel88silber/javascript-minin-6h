// Condition operators

const courseStatus = 'fail' // ready, fail, pending

if (courseStatus === 'ready') {
    console.log('Course is ready')
} else if (courseStatus === 'pending') {
    console.log('Course is pending')
} else {
    console.log('Course is fail')
}


const num1 = 42
const num2 = '42'

console.log(num1 == num2) // true
console.log(num1 === num2) // false


const isReady = true

// if (isReady) {  // isReady === true
//     console.log('READY')
// } else {
//     console.log('NOT READY')
// }

// Ternarnoe Virojenie
isReady ? console.log('ALL READY') : console.log('NOT READY')



