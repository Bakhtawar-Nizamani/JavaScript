// Reverse string

let str = "JavaScript"

// Lower Case
let lowerCaseStr = str.toLowerCase()

// Emtpy string
let reverseStr = ""
for(let i = lowerCaseStr.length - 1; i >= 0; i--){
    reverseStr += lowerCaseStr[i];
}

// Print reverse string
console.log(reverseStr)
