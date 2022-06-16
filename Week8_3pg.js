//Level 1

//1
function fullName(){
    console.log("Kshitij Kumar")
}
fullName();
//2
function fullName(firstName,lastName){
    return firstName+" "+lastName;
}
fullName("Kshitij","Kumar");

//3
function add(a,b){
    return a+b;
}
add(2,5)

//4
function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}
areaOfRectangle(5, 3);
//5
perimeterOfRectangle = (length, width) => {
    let perimeter = 2 * (length * width);
    return perimeter;
}
perimeterOfRectangle(3, 5);
//6
volumeOfRectPrism = (length, width, height) => {
    let volume = length * width * height;
    return volume;
}
volumeOfRectPrism(2, 3, 4);
//7
AreaOfCircle = (r) => {
    const PI = 3.14;
    let area = PI * r * r;
}
AreaOfCircle(7);
//8
circumOfCircle = (r) => {
    const PI = 3.14;
    return PI * r
}
circumOfCircle(6);
//9
density = (mass, volume) => {
    return mass * volume;
}
density(4, 8);

//10
speed = (TDC, TT) => {
    return TDC / TT
}
speed(4, 6);
//11
weight = (mass, gravity) => {
    return mass * gravity;
}
weight(4, 5);
//12
celsiusToFahrenheit = (celsius) => {
    let fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit;
}
celsiusToFahrenheit(5);

//13

BMI = (weight, height) => {
    let bmi = weight / (height / height);
    if (bmi < 18.5) {
        return `underweight`;
    } else if (bmi > 18.5 && bmi < 24.9) {
        return `overweight`;
    } else if (bmi > 25 && bmi < 29.9) {
        return `overweight`;
    } else {
        return `obese`;
    }
}
BMI(4, 7);

//14

checkSeasons = (month) => {
    switch (month) {
        case "september":
        case "october":
        case "November":
            console.log("the season is Autumn");
            break;
        case "december":
        case "january":
        case "febuary":
            console.log("the season is Winter");
            break;
        case "march":
        case "april":
        case "may":
            console.log("the season is Spring");
            break;
        case "june":
        case "july":
        case "august":
            console.log("the season is Summer");
            break;
        default:
            console.log("invalid Month")
    }
}
checkSeasons("january");

//15
findMax = (x, y, z) => {
    return Math.max(x, y, z);
}
findMax(5, 7, 4)

//Level 2
//3

printArr = (arr) => {
    arr.forEach(function (ar) {
        console.log(ar);
    })
}
printArr([3, 4, 5])

//4
showDateTime = () => {
    let date = new Date();
    let datee = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    return `${datee}/${month + 1}/${year} ${hour}:${minutes} `
}
showDateTime();

//5
swapValues = (a, b) => {
    let x = b;
    let y = a;
    console.log(x, y)
}
swapValues(2, 4)
//6
reverseArr = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
    }
    console.log(newArr);
}
reverseArr([3, 4, 5])

//7
capitalizeArr = (arr) => {
    let newArr = [];
    arr.forEach(function (ar) {
        newArr.push(ar.toUpperCase());
    })
    return newArr;
}
capitalizeArr(["john", "mike"]);

//8
additem=(arr,element)=>{
    arr.push(element);
    return arr;
}
var arr=[1,2,3,4];
additem(arr,5);
//9
removeitem = (index) => {
    let names = ["john", "mike"]
    names.splice(index);
    return names
}
removeitem(1);

//10
sumOfNumbers = (...args) => {
    let sum = 0;
    args.forEach(function (arg) {
        sum += arg
    })
    return sum;
}
sumOfNumbers(1, 2, 3, 4)

//11
sumOfOdd = (...args) => {
    let oddSum = 0;
    args.forEach(function (arg) {
        if (arg % 2 === 0) {
            oddSum += arg
        }
    })
    return oddSum;
}
sumOfOdd(1, 2, 3, 4)

//12
sumOfEven = (...args) => {
    let evenSum = 0;
    args.forEach(function (arg) {
        if (arg % 2 === 0) {
            evenSum += arg
        }
    })
    return evenSum;
}
sumOfEven(1, 2, 3, 4)

//13
evenAndOdds = (num) => {
    let odd = 0;
    let even = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            even++
        } else if (i % 2 !== 0) {
            odd++
        }
    }
    return `the number of odds are ${odd} \n the number of even are ${even}`
}
evenAndOdds(100)

//14
sum = (...args) => {
    let sum = 0;
    args.forEach(function (num) {
        sum += num;
    })
}
sum(1, 2, 3)

//15
generateRandomIp = () => {
    let one = Math.floor(Math.random() * 255);
    let two = Math.floor(Math.random() * 255);
    let three = Math.floor(Math.random() * 255);
    let four = Math.floor(Math.random() * 255);
    return `IP: ${one}:${two}:${three}:${four}`
}
generateRandomIp();

//17
generateRandomHex = () => {
    let chars = "0123456789ABCDEF";
    let hex = "";
    for (let i = 0; i <= 6; i++) {
        hex += chars[Math.floor(Math.random() * chars.length)];
    }

    return `#${hex}`
}
generateRandomHex();

//18
generateUserId = () => {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let userId = "";
    for (let i = 0; i <= 7; i++) {
        userId += chars[Math.floor(Math.random() * chars.length)];
    }
    return userId;
}
generateUserId();


//Level 3
//1
userIdGeneratedByUser = () => {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let noId = Number(prompt("how many id do you want to generate"));
    let noChars = Number(prompt("in how many chars"));
    let ids = [];
    for (i = 0; i < noId; i++) {
        ids[i] = "";
        for (k = 0; k < noChars; k++) {
            ids[i] += chars[Math.floor(Math.random() * chars.length)];
        }
    }
    console.log(ids)
    ids.forEach(function (id) {
        console.log(id);
    })
}
userIdGeneratedByUser();

//2
rgbColorGnerator = () => {
    let one = Math.floor(Math.random() * 255);
    let two = Math.floor(Math.random() * 255);
    let three = Math.floor(Math.random() * 255);
    return `rgb(${one},${two},${three})`;
}
rgbColorGnerator();

//3
arrayOfHexaColors = () => {
    let chars = "0123456789ABCDEF";
    let hex = [];
    for (let k = 0; k < 3; k++) {
        hex[k] = "#";
        for (let i = 0; i < 6; i++) {
            hex[k] += chars[Math.floor(Math.random() * chars.length)];
        }
    }

    return hex;
}
arrayOfHexaColors();

//7
generateColors = (type, arrLength) => {
    let chars = "0123456789ABCDEF";
    let colors = [];
    if (type === "rgb") {
        for (i = 0; i < arrLength; i++) {
            colors[i] = "rgb";
            colors[i] += `(${ Math.floor(Math.random() * 255) },`;
            colors[i] += `${ Math.floor(Math.random() * 255) },`
            colors[i] += `${ Math.floor(Math.random() * 255) },)`
        }
    } else if (type === "hex") {
        for (let i = 0; i < arrLength; i++) {
            colors[i] = "#";
            for (k = 0; k < 6; k++) {
                colors[i] += chars[Math.floor(Math.random() * chars.length)];
            }
        }
    }
    return colors;
}
generateColors("rgb", 3);

//8
shuffleArray = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let rand = Math.floor(Math.random() * arr.length - 1);
        if (arr.indexOf(rand) !== -1 && !newArr.includes(arr[rand])) {
            newArr.push(arr[rand]);
        }
    }
    return newArr
}
shuffleArray([1, 2, 3]);

//9
factorial = (num) => {
    let factorial = 1;
    for (let i = num; i > 0; i--) {
        // if (i === 0) {
        //     break;
        // }

        factorial *= i;
    }
    return factorial;
}
factorial(5);

//10
isEmpty = (val) => {
    if (val === undefined) {
        return `it's empty`
    } else {
        return `not empty`
    }
}
isEmpty()

//11
sum = (...args) => {
    let sum = 0;
    args.forEach(function (arg) {
        sum += arg
    })
    return sum;
}
sum(1, 2, 3, 4);

//12
sumOfArrayItems = (arr) => {
    let sum = 0;
    arr.forEach(function (ar) {
        if (typeof ar === "number") {
            sum += ar
        } else {
            sum = `it's a string`
        }
    })
    return sum;
}
sumOfArrayItems([1, 2, 3])
//13
average = (arr) => {
    let sum = 0;
    arr.forEach(function (ar) {
        if (typeof ar === "number") {
            sum += ar;
            sum = arr.length / sum;
        } else {
            sum = `it's a string`;
        }
    })
    return sum;
}
average([1, 2, 3]);
//14
modifyArray = (arr) => {
    if (arr.length >= 6) {
        for (let i = 0; i < arr.length; i++) {
            if (i = 5) {
                arr.splice(5)
            }
        }
        return arr
    } else {
        return `item not found`
    }
}
modifyArray([1, 2, 3]);

//15
isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0 && num > 1) {
            return `${num} is a prime number`;
        } else {
            return `not prime`
        }
    }
}
isPrime(5);

//16
function areDistinct(arr)
{
    let n = arr.length;
 
    // Put all array elements in a map
    let s = new Set();
    for (let i = 0; i < n; i++) {
        s.add(arr[i]);
    }
 
    // If all elements are distinct, size of
    // set should be same array.
    return (s.size == arr.length);
}
 
let arr = [ 1, 2, 3, 2 ];

//17
arr.every( (val, i, arr) => typeof val === typeof arr[0]);

arr = ["foo", "bar", "baz"] // true  
arr = [1, "foo", true] // false

//18
isValidVariable=(variable)=>{
    if(variable.startsWith('$')||variable.startsWith('_'))
        console.log("Invalid variable name");
    else
        console.log("Valid variable name");
}
isValidVariable("_kj")
//19
generateseven=(arr)=>{
    while(arr.length < 7){
        var r = Math.floor(Math.random() * 100) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr
}
generateseven([]);

//20
reverseCountries = () => {
    let countries = ["nigeria", "U.S.A", "italy", "canada", "lebanon"];
    return countries.reverse();
}
reverseCountries();



