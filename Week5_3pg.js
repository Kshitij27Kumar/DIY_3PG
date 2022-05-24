//Level 1

//1
firstName='Kshitij'
lastName='Kumar'
country='India'
city='Satna'
age=21
isMarried=false
year=2022
typeof(firstName)
typeof(lastName)
typeof(country)
typeof(city)
typeof(age)
typeof(isMarried)
typeof(year)

//2
typeof('10')===typeof(10)

//3
parseInt('9.8')==10

//4
//i)
10==10
typeof(country)==typeof(city)
typeof(year)=='number'

//ii)
10!=10
typeof(country)==typeof(age)
9+5==15

//4 > 3
true
//4 >= 3
true
//4 < 3
false
//4 <= 3
false
//4 == 4
true
//4 === 4
true
//4 != 4
false
//4 !== 4
false
//4 != '4'
true
//4 == '4'
true
//4 === '4'
false

s1='python'
s2='jargon'
s1.length!=s2.length

//6
4 > 3 && 10 < 12
true
4 > 3 && 10 > 12
false
4 > 3 || 10 < 12
true
4 > 3 || 10 > 12
true
!(4 > 3)
false
!(4 < 3)
true
!(false)
true
!(4 > 3 && 10 < 12)
false
!(4 > 3 && 10 > 12)
true
!(4 === '4')
true
//There is no 'on' in both dragon and python
!(s1.search('on') && s2.search('on')) 

//7
const now= new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getMilliseconds())
console.log(now.getTime())


//Level 2

//1
let b=prompt("Enter base: ")
let h=prompt("Enter height: ")
console.log(0.5*b*h)

//2
let s1=prompt("Enter side a: ")
let s2=prompt("Enter side b: ")
let s3=prompt("Enter side c: ")
console.log(Number(s1)+Number(s2)+Number(s3));

//3
let l=prompt("Enter length: ")
let br=prompt("Enter breadth: ")
console.log(l*br)
console.log(2*(parseInt(l)+parseInt(br)))

//4
let r=parseInt(prompt("Enter radius: "))
console.log(3.14*r*r)
console.log(2*3.14*r)

//5
var slope=2

//6
var slope1=(10-2)/(6-2)
console.log(slope1)

//7
slope==slope1

//8
let x=-3
let y=x*x+6*x+9
y==0

//9
let hr=prompt("Enter hours: ")
let payperhour=prompt("Enter rate per hour: ")
console.log(hr*payperhour)

//10
var name="Kshitij"
name.length>7?console.log("long name"):console.log("short name")

//11
let fname="Kshitij"
let lname="Kumar"
fname.length>lname.length?console.log("My first name "+fname+" is longer than my last name "+lname):console.log("My first name "+fname+" is shorter than my last name "+lname)

//12
let myAge=21
let youAge=65
console.log("I am "+(youAge-myAge)+" youger than you!!")

//13
let age=prompt("Enter your age: ")
age>=18?console.log("You are "+age+ ". You are old enough to drive."):console.log("You are "+age+ ". You will be allowed to drive after "+(18-age)+" years.")


//14
let years=prompt("Enter the number of years you live")
console.log("You lived "+(years*12*24*3600)+" seconds.")

//15
//i
console.log((now.getFullYear())+"-"+(now.getMonth())+"-"+(now.getDate())+" "+(now.getHours())+":"+(now.getMinutes()))
//ii
console.log((now.getDate())+"-"+(now.getMonth())+"-"+(now.getFullYear())+" "+(now.getHours())+":"+(now.getMinutes()))
//iii
console.log((now.getDate())+"/"+(now.getMonth())+"/"+(now.getFullYear())+" "+(now.getHours())+":"+(now.getMinutes()))

//level 3
let n=new Date();
let year=n.getFullYear();
let month=Number(n.getMonth())+1;
month<10?month="0"+month:month;
let date=n.getDate();
date<10?date="0"+date:date;
let hour=n.getHours();
hour<10?hour="0"+hour:hour;
let min=n.getMinutes();
min<10?min="0"+min:min;
console.log(year+"-"+month+"-"+date+" "+hour+":"+min);