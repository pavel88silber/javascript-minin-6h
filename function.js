yearNow = 2021
function calculateAge(year) {
    return yearNow - year
}

// const myAge = calculateAge(1993)
// console.log(myAge)
// console.log(calculateAge(1983))
// console.log(calculateAge(1988))
// console.log(calculateAge(2015))
// console.log('Denis ' + calculateAge(2018))
// console.log('=======================')

function logInfoAbout(name, year) {
    const age = calculateAge(year)
    if  (age > 0) {
        console.log('Human name is ' + name + ' and his age is ' + age)
    } else {
        console.log('It is impossible ' + name + ' not born yet, because his year of born is  ' + year )
    }
}

logInfoAbout('Pasha', 1983 )
logInfoAbout('Yulia', 1988 )
logInfoAbout('Jim', 2225 )



