console.log("Hello World")
console.log("Welcome to Web Dev 101")

let myfirstVariable = "Welcome to Javascript Session"
console.log(myfirstVariable)

let a = ["kaye",23,"asass"]
console.log(a[2])


function myFunc(){
    return "my function works"
}

console.log(myFunc())
console.log(myFunc())
console.log(myFunc())
console.log(myFunc())





function myFunc(word){
    return "my function works" + word
}

console.log(myFunc(" wadasdasda"))






function myFunc(word, word2){
    return "my function" + word + word2
}

console.log(myFunc(" is working"," and it is great"))





let myFirstVariable = 502
let my2ndVariable = 5
let result = myFirstVariable % my2ndVariable

function mySum(num1, num2){
    return num1 + num2
}

console.log(mySum())
console.log(mySum(myFirstVariable, my2ndVariable))





function mySum(num1,num2){
    return num1 + num2
}
console.log(mySum(400,500))

function myDiff(num1,num2){
    return num1 - num2
}
console.log(myDiff(900,200))

function myProd(num1,num2){
    return num1 * num2
}
console.log(myProd(2,5))

function myQou(num1,num2){
    return num1 / num2
}
console.log(myQou(10,5))




if (199 <= 200){
    console.log("This is true")
}
else{
    console.log("This is false")
}



let aasd = "vanilla"
if (aasd == "vanilla"){
    console.log("This is true")
}
else{
    console.log("This is false")
}


// LOOP
//show list of number from 1 to 100
// for (let i = 1; i < 100; i++){
//     console.log(i)
// }


//show list of even number from 0 to 100
// for (let i = 0; i <= 100; i+=2){
//     console.log(i)
// }

//show list of even number from 0 to 100
for (let i = 0; i <= 100; i+=2){
    if ((i % 0) === 0){}
    console.log(i)
    
}



let i = 0;
while (i <= 10){
    console.log(i)
    i++
}


const strong = document.createElement("strong")
strong.innerText = "Hellow World"
div.append(strong)

// document.querySelector


console.log(spanHi.getAttribute("title"))

