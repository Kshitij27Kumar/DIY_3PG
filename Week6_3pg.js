//Arrays
//Level 1
//1
var sample=[]

//2
var sample1=[1,2,3,4,56,7,8,54];

//3
sample1.length

//4
console.log(sample1[0],sample1[sample1.length/2],sample1[sample1.length-1])

//5
var mixedDataTypes=[1,45,'a',"India",true,sample];
console.log(mixedDataTypes.length);

//6
var itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//7
for(let i=0;i<itCompanies.length;i++)
{
    console.log(itCompanies[i]);
}

//8
console.log(itCompanies.length);

//9
console.log(itCompanies[0],itCompanies[itCompanies.length/2],itCompanies[itCompanies-1])

//10
for(let i=0;i<itCompanies.length;i++)
{
    console.log(itCompanies[i]);
}

//11
for(let i=0;i<itCompanies.length;i++)
{
    console.log(itCompanies[i].toUpperCase());
}

//12
string="";
for(let i=0;i<itCompanies.length;i++)
{
    string+=itCompanies[i];
    if(i<itCompanies.length-2)
        string+=", "
    if(i==itCompanies.length-2)
        string+=" and "
}
console.log(string+" are big IT companies");

//13
console.log(itCompanies.includes("Infosys"));
console.log(itCompanies.includes("Amazon"));

//14
for(let i=0;i<itCompanies.length;i++)
{
    var comp=itCompanies[i];
    if((comp.match(/o/g)||[]).length>1)
        console.log(comp);
}

//15
itCompanies.sort();

//16
itCompanies.reverse();

//17
console.log(itCompanies.slice(0,3));

//18
console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length));

//19
console.log(itCompanies[(parseInt)(itCompanies.length/2)]);

//20
console.log(itCompanies.splice(0,1))

//21
console.log(itCompanies.splice((parseInt)(itCompanies.length/2),1));

//22
console.log(itCompanies.pop())

//23
console.log(itCompanies.splice(0,itCompanies.length))


//Level 2
//2
var str ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
var arr=[]
str = str.replace(/[^a-zA-Z ]/g, "");
for(let i=0;i<str.length;i++)
{
    var text="";
    while(str[i]!=" " && i<str.length)
    {
        text+=str[i];
        i++;
    }
    arr.push(text);
}
console.log(arr);
console.log(arr.length);

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
shoppingCart.splice(shoppingCart.indexOf('Honey'),1);
shoppingCart[shoppingCart.indexOf('Tea')]='Green Tea';

//4
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
let index=countries.indexOf('Ethiopia')
index===-1?countries.push('Ethiopia'):console.log(countries[index].toUpperCase());

//5
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

index=webTechs.indexOf('Sass');
if(index===-1)
{
    webTechs.push('Sass')
    console.log(webTechs)
}
else
console.log('Sass is a CSS preprocess');

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack=frontEnd.concat(backEnd);
console.log(fullStack);

//Level 3
//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//sort
ages.sort()
console.log(ages);

//median
var median;
var n=ages.length
if(n%2==0)
{
    median=(ages[n/2]+ages[(n/2+1)])/2;
}
else
{
    median=ages[(n/2)+1];
}
console.log(median);

//mean
let sum=0
for(let i=0;i<n;i++)
{
    sum+=ages[i];
}
let average=sum/n
console.log(sum/n);

//range
console.log(ages[n-1]-ages[0]);
min=ages[0];
max=ages[n-1];
//abs
console.log(Math.abs((average-min)-(max-average)));

//2
var mid=parseInt(countries.length/2)
console.log(countries[mid]+", "+countries[mid+1])

//3
var n=countries.length;
var first=[]
var sec=[]
if(n%2==0)
{
    let i=0;
    for(;i<n/2;i++)
    {
        first.push(countries[i]);
    }
    for(;i<n;i++)
    {
        sec.push(countries[i]);
    }
}
else{
    let i=0;
    for(;i<n/2;i++)
    {
        first.push(countries[i]);
    }
    for(;i<n;i++)
    {
        sec.push(countries[i]);
    }
}
console.log(first);
console.log(sec);


//Objects
//Level 1

//1
const dog={}

//2
console.log(dog)

//3
dog = {
    name: "Tommy",
    legs: 4,
    color: "Black",
    age: 10,
    bark: function(){
     return  'woof woof'
    }
}

//4
console.log(dog)

//5
dog.breed="German Shefart";
dog.getDogInfo=function(){
    return 'no info'
}

//Level 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
//1
let winner;
let max = 0

for (const property in users) {
    if (users[property].skills.length > max) {
        max = users[property].skills.length;
        winner = property
    }
}
console.log(winner);

//2
var logged_in=0;
for (const property in users) {
    if (users[property].points >=50) {
        logged_in++;
    }
}
console.log(logged_in)

//3
var names=[]
for (const property in users) {
    var string="";
    for(var i=0;i<users[property].skills.length;i++)
    {
        string+=users[property].skills[i].substring(0,1);
    }
    if(string.includes('MERN'))
    {
        names.push(property);
    }
}
console.log(names);

//4
users.Kshitij={
    email: 'kshitij27kumar@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 21,
    isLoggedIn: false,
    points: 50
}
console.log(users)

//5
const keyy=Object.keys(users);
console.log(keyy);

//6
const values=Object.values(users);
console.log(values);

//7
let country = {
    name: "Nigeria",
    capital: "?",
    population: "7 billion",
    languages: ["hausa", "igbo", "yoruba"]
}

console.log(`${country.name}\n${country.capital}\n${country.population}\n${country.languages}`)


//Level 3

//1
let personAccount = {
    firstName: "victor",
    lastName: "kenneth",
    income: {
        freelancing: 10000,
        menialLabour: 2000
    },
    expenses: {
        data: 500,
        food: 1000,
        transport: 500
    },

    totalIncome: function () {
        let tIncome = 0;
        let values = Object.values(this.income);
        for (let i = 0; i < values.length; i++) {
            tIncome += values[i]
        }
        return tIncome;
    },
    totalExpenses: function () {
        let tExpenses = 0;
        let values = Object.values(this.expenses);
        for (let i = 0; i < values.length; i++) {
            tExpenses += values[i]
        }
        return tExpenses
    },
    accountBalance: function () {
        return this.totalIncome() - this.totalExpenses();
    },
    accountInfo: function () {
        return `name:${this.firstName} ${this.lastName}\n
                incomes:${Object.entries(this.income)}
                expenses: ${
                    Object.entries(this.expenses)
                }
                totalIncome: ${this.totalIncome()}
                totalExpenses: ${this.totalExpenses()}
                accountBalance: ${this.accountBalance()}
                `
    }
}

function callBack(add, a, b) {
    return add(a, b);
}

//2
const users = [{
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];
//a)
const signUp = (username, email, password) => {
    users.forEach(user => {
        if (user.username === username && user.password === password) {
            console.log("you already have an account")
        } else {
            let date = new Date()
            let chars = "abcdefghiklmnopqrstuvwxyz";
            let id = [];
            for (let i = 0; i < 6; i++) {
                id.push(chars[Math.floor(Math.random() * chars.length)])
            }
            id = id.join("");
            users.push({
                _id: id,
                username: username,
                email: email,
                password: password,
                createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
                isLoggedIn: "false"
            })
        }
    })
    console.log(users[users.length - 1]);
}
//b)
const signIn = (username, password) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username.toLowerCase() === username.toLowerCase() && users[0].password === password) {
            return users[i];
        } else {
            return "wrong username or password";
        }
    }
    // console.log(foundUser)
}

//3
const products = [{
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [{
                userId: 'fg12cy',
                rate: 5
            },
            {
                userId: 'zwf8md',
                rate: 4.5
            }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{
            userId: 'fg12cy',
            rate: 5
        }],
        likes: ['fg12cy']
    }
]
//a)
const rateProduct = (name, rate) => {
    products.forEach(product => {
        if (product.name.toLowerCase().includes(name)) {
            let chars = "0123456789abcdefghiklmnopqrstuvwxyz";
            let id = [];
            for (let i = 0; i < 6; i++) {
                id.push(chars[Math.floor(Math.random() * chars.length)])
            }
            id = id.join("");
            product.ratings.push({
                userId: id,
                rate: rate
            })
            console.log("filter");
        } else {
            console.log("no product to rate")
        }
    })
};
//b)
const avgRating = (name) => {
    let avg = 0;
    let count = 0;
    for (let i = 0; i < products.length; i++) {
        if (name.toLowerCase() === products[i].name.toLowerCase()) {
            products[i].ratings.rate.forEach(rating => {
                count++
                avg += rating
            })
        }
    }
    avg = avg / count
}
//4
const likeProduct = (name) => {
    for (let i = 0; i < products.length; i++) {
        if (name.toLowerCase() === products[i].name.toLowerCase()) {

            if (!products[i].likes) {
                console.log(like);
                let chars = "0123456789abcdefghiklmnopqrstuvwxyz";
                let id = [];
                for (let i = 0; i < 6; i++) {
                    id.push(chars[Math.floor(Math.random() * chars.length)])
                }
                id = id.join("");
                products[i].likes.push(id)
            } else {
                console.log("product has been liked")
            }
        } else {
            console.log("no product available")
        }
    }
}

rateProduct("tv", "4.5");
avgRating("mobile phone");
likeProduct("mobile phone");