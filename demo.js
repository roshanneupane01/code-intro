// console.log("hello world")

// let thing = "abracadabra"
// thing = "dabracaabra"
// console.log(thing)

// this is a sentence and it's cool :)
// let newThing = 10
// newThing = 5
// console.log(newThing)

// const firstName = "Roshan"
// let age = 30
// let isCool = true

// console.log(`Name: ${firstName}. Age: ${age}.`)

// if(isCool === true){
//     console.log("This person is pretty dope.")
// } else{
//     console.log("This person needs to git good.")
// }

// if(isCool && age > 17){
//     console.log("This person is still cool, and they aren't even a kid!")
// } else if(isCool){
//     console.log("This person is cool, but that's to be expected")
// } else{
//     console.log("They aren't cool :(")
// }

// let a = 17
// let b = 5
// let c = 2
// let x = 20
// let answer = a + (c * b)
// console.log(answer)

const readLine = require('readline')

const reader = readLine.createInterface({input: process.stdin, output: process.stdout}) // Not important to know How this works

// reader.question("Hey there! What's your name?", function(response){
//     console.log(`Hello ${response}`)
// })

reader.question("Let me guess a number! Pick a number between 1-10.", function(num){
    if(num >= 1 && num <= 10){
        console.log(`Hmmm... I think you number was ${num}.`)
    } else{
        console.log("HEY! I SAID BETWEEN 1 AND 10!")
    }
})


