// QNO1 create a fuunction using funnction keyword that takes an string as an argument and returns number of vowels in the string?


// function countvowels(str){
//     let count=0
//     for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++
//         }
//     }
//     console.log(count)
// }

// QNO2 create an arrow function to perform the same task?

// const countvow=(str)=>{
//     let count=0
//         for(const char of str){
//             if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//                 count++
//             }
//         }
//         return count;
// }

// QNO3 write a program to print the marks of a students in an object using for loop ?

// let marks = {
//     zaid : 90,
//     Ahmad :95,
//     Nasir : 96,
//     Rabi : 89
// }

// for(let i=0;i<Object.keys(marks).length;i++ ){
//   console.log("The marks of " + Object.keys(marks)[i] + "is" + marks[Object.keys(marks)[i]])
// }

// QNO4 Do the same programe in for in loop?

// let marks = {
//     zaid : 90,
//     Ahmad :95,
//     Nasir : 96,
//     Rabi : 89
// }

// for(let key in marks ){
//     console.log("The marks of " + key + "is" + marks[key])
//   }

// QNO5 write a program to print try again until the user enter the correct number?

// let cn =7
// let i

// while(i!=cn){
//     i= prompt("Enter the number   ")
// }
// console.log("you enter the correct the number")


// QNO6 write a function to find mean of numbers?

// const mean = (a,b,c,d)=>{
//  return(a+b+c+d)/4
// }
// console.log(mean(4,5,6,7))