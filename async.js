// Synchronous & Asynchronous 

// Synchronous 

// console.log("Line 1");
// console.log("Line 2");
// console.log("Line 3");



// console.log("Line 1");
// for(let i = 1; i <= 5000; i++){
//     console.log("Line2");
// }
// console.log("Line3");


// Asynchronous 

// Callbacks -> Callback Hell -> Promises -> Async / await

// console.log("Line 1");
// setTimeout(()=>{
//   console.log("Line 2");
// },10000)

// console.log("Line 3");



// Promises  


// class Student{
//     constructor(name,marks){
//         this.name = name;
//         this.marks = marks;
//     }
// }

// // Create Object

// const s1 = new Student("Bakhtawar",97);
// console.log(s1);
// console.log(s1.name);
// console.log(s1.marks)


// Create Promise

const myPromise = new Promise((resolve,reject)=>{
    let success = true
    if(success){
        resolve("Success");
    }else{
        reject("Not found");
    }
})

// Consuming Promise

myPromise.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})