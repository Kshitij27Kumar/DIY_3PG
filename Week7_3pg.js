//Level 1
//1
let age=prompt("Enter your age: ")
age>=18?console.log("You are "+age+ ". You are old enough to drive."):console.log("You are "+age+ ". You will be allowed to drive after "+(18-age)+" years.")

//2
let myAge=21
let youAge=65
console.log("I am "+(youAge-myAge)+" youger than you!!")

//3
//i
let a=prompt("Enter a")
let b=prompt("Enter b")
if(a>b){
    console.log("a is greater than b");
} else{
    console.log("a is less than b");
}
//ii
a>b?console.log("a is greater than b"):console.log("a is less than b")

//4
var n=prompt("Enter a number")
n%2==0?console.log(n+" is an even number."):console.log(n+" is an odd number.")

//level 2

//1
var marks=Number(prompt("Enter marks"))
switch(true){
case (marks>=80 && marks<=100):
    console.log("A")
    break;
case (marks>=70 && marks<80):
    console.log("B")
    break;
case (marks>=60 && marks<70):
    console.log("C")
    break;
case (marks>=50 && marks<60):
    console.log("D")
    break;
case (marks>=0 && marks<50):
    console.log("F")
    break;
}

//2
var month=prompt("enter month:")
switch(true){
    case (month=="September" || month=="October" || month=="November"):
        console.log("Autumn")
        break;
    case month=="December" || month=="January" || month=="February":
        console.log("Winter")
        break;
    case month=="March" || month=="April" || month=="May":
        console.log("Spring")
        break;
    default:
        console.log("Summer")
}

//3
var day=prompt("Enter day: ")
day=day.toLowerCase();
switch(true){
    case day=='saturday' || day=='sunday':
        console.log("Weekend")
        break;
    default:
        console.log("Weekday")
        break;
}

//level 3
//1
var m=prompt("Enter month")
switch(true){
    case m=='January' || m=='March' || m=='May' || m=='July' || m=='August' || m=='October' || m=='December':
        console.log("31 days")
        break;
    case m=='February':
        console.log("28 days")
        break;
    default:
        console.log("30 days")
}

//Loops
//Level 1

//1
let i=0
while(i<=10)
{
    console.log(i+" ");
    i++;
}

do{
    console.log(i+" ");
    i++;
}while(i<=10);

//2
i=10;
while(i>=0)
{
    console.log(i+" ");
    i--;
}
i=10;
do{
    console.log(i+" ")
    i--;
}while(i>=0);

//3
i=0
let n=prompt("Enter a number: ")
while(i<=n)
{
    console.log(i+" ");
    i++;
}

//4
i=0
n=7
let string="";
for(;i<n;i++)
{
    for(let j=0;j<=i;j++)
    {
        string+="#";
    }
    string+="\n";
}
console.log(string);

//5
string="";
for(i=0;i<=10;i++)
{
    string+=i+" * "+i+" = "+i*i;
    string+="\n";
}
console.log(string);

//6
string="";
string+="i i^2 i^3";
string+="\n";
for(i=0;i<=10;i++)
{
    string+=i+" "+i*i+" "+i*i*i;
    string+="\n";
}
console.log(string)

//7
for(i=0;i<=100;i+=2)
{
    console.log(i+" ");
}

//8
for(i=1;i<=100;i+=2)
{
    console.log(i+" ");
}

//9
let fact=0;
for(i=2;i<=100;i++)
{
    for(j=2;j<i/2;j++)
    {
        if(i%j==0)
        {
            fact=1;
            break;
        }
    }
    if(!fact)
        console.log(i);
    fact=0;
}

//10
let sum=0;
for(i=0;i<=100;i++)
{
    sum+=i;
}
console.log("The sum of all numbers from 0 to 100 is: "+sum);

//11
sum=0;
for(i=1;i<=100;i+=2)
{
    sum+=i;
}
console.log("The sum of all odd numbers from 0 to 100 is: "+sum);

//12
let se=0,so=0;
for(i=0;i<=100;i++)
{
    if(i%2)
        so+=i;
    else
        se+=i;
}
console.log("["+se+", "+so+"]");

//13
var arr=[];
while(arr.length<5)
{
    var r=Math.floor(Math.random()*100)+1;
    arr.push(r);

}
console.log(arr);

//14
arr=[];
while(arr.length<5)
{
    var r=Math.floor(Math.random()*100)+1;
    if(arr.indexOf(r)==-1)
        arr.push(r);

}
console.log(arr);

//15
var id=" ";
var characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var Length=characters.length;
for(i=0;i<6;i++)
{
    id+=characters.charAt(Math.floor(Math.random()*Length));
}
console.log(id);

//Level 2
//1
var l=Math.floor(Math.random()*100)+1;
id=" ";
characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
Length=characters.length;
for(i=0;i<l;i++)
{
    id+=characters.charAt(Math.floor(Math.random()*Length));
}
console.log(id);

//2
var letters = "0123456789ABCDEF";
  
    // html color code starts with #
    var color = '#';
  
    // generating 6 times as HTML color code consist
    // of 6 letter or digits
    for (i = 0; i < 6; i++)
       color += letters[(Math.floor(Math.random() * 16))];
console.log(color);

//3
rgbcol="rgb(";
for(i=0;i<3;i++)
{
    rgbcol+=Math.floor(Math.random()*255);
    if(i<2)
        rgbcol+=",";
}
rgbcol+=")";
console.log(rgbcol);

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
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
//4
var country=[];
for(i=0;i<countries.length;i++)
{
    country.push(countries[i].toUpperCase());
}
console.log(country);

//5
var len=[]
for(i=0;i<country.length;i++)
{
    len.push(country[i].length);
}
console.log(len);


//6
var arr=[]
j=0;
for(i=0;i<country.length;i++)
{
    arr.push([countries[i],country[i].substring(0,3),len[i]]);
}
console.log(arr);

//7
var land=[];
for(i=0;i<countries.length;i++)
{
    if(countries[i].search('land')!=-1)
    {
        land.push(countries[i]);
    }
}
if(land.length==0)
    console.log("All these countries are without land");
else
    console.log(land);

//8
var ia=[]
for(i=0;i<countries.length;i++)
{
    if(countries[i].endsWith('ia')!=false)
    {
        ia.push(countries[i]);
    }
}
if(ia.length==0)
    console.log("All these countries are without ia");
else
    console.log(ia);

//9
let maxlen=0;
let maxcountry="";
for( i=0;i<countries.length;i++)
{
    if(countries[i].length>maxlen)
    {
        maxlen=countries[i].length;
        maxcountry=countries[i];
    }
}
console.log(maxcountry);

//10
var five=[];
for( i=0;i<countries.length;i++)
{
    if(countries[i].length==5)
    {
        five.push(countries[i]);
    }
}
console.log(five);

//11
maxlen=0;
let maxwebtech="";
for( i=0;i<webTechs.length;i++)
{
    if(webTechs[i].length>maxlen)
    {
        maxlen=webTechs[i].length;
        maxwebtech=webTechs[i];
    }
}
console.log(maxwebtech);

//12
var web=[]
for(i=0;i<webTechs.length;i++)
{
    web.push([webTechs[i],webTechs[i].length]);
}
console.log(web);

//13
let res="";
for(i=0;i<mernStack.length;i++)
{
    res+=mernStack[i].substring(0,1);
}
console.log(res);

//14
for(i=0;i<webTechs.length;i++)
{
    console.log(webTechs[i]);
}

//15
const fruits=['banana', 'orange', 'mango', 'lemon']
for(i=0;i<(fruits.length)/2;i++)
{
    [fruits[i],fruits[fruits.length-i-1]]=[fruits[fruits.length-i-1],fruits[i]]
}
console.log(fruits);

//16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
for(i=0;i<fullStack.length;i++)
{
    for(j=0;j<fullStack[i].length;j++)
    {
        console.log(fullStack[i][j]);
    }
}

//Level 3
//1
var ans=[]
ans=countries.slice();
console.log(ans);

//2
var sortedCountries=[]
sortedCountries=ans.sort();
console.log(sortedCountries);

//3
console.log(webTechs.sort());
console.log(mernStack.sort());

//4
var land=[];
for(i=0;i<countries.length;i++)
{
    if(countries[i].search('land')!=-1)
    {
        land.push(countries[i]);
    }
}
if(land.length==0)
    console.log("All these countries are without land");
else
    console.log(land);


//5
maxlen=0;
maxcountry="";
for( i=0;i<countries.length;i++)
{
    if(countries[i].length>maxlen)
    {
        maxlen=countries[i].length;
        maxcountry=countries[i];
    }
}
console.log(maxcountry);

//6
var land=[];
for(i=0;i<countries.length;i++)
{
    if(countries[i].search('land')!=-1)
    {
        land.push(countries[i]);
    }
}
if(land.length==0)
    console.log("All these countries are without land");
else
    console.log(land);

//7

var four=[];
for( i=0;i<countries.length;i++)
{
    if(countries[i].length==4)
    {
        four.push(countries[i]);
    }
}
console.log(four);

//8
var ctr=[]
for(i=0;i<countries.length;i++)
{
    var c=countries[i];
    for(j=0;j<c.length;j++)
    {
        
        if(c[j]==" ")
        {
            ctr.push(c);
        }
    }
}
console.log(ctr);

//9
for(i=0;i<(countries.length)/2;i++)
{
    [countries[i],countries[countries.length-i-1]]=[countries[countries.length-i-1],countries[i]]
}
var country=[];
for(i=0;i<countries.length;i++)
{
    country.push(countries[i].toUpperCase());
}
console.log(country);

