//Level 1
//1
const firstP=document.querySelector("p");
console.log(firstP);

//2
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
console.log(one)
console.log(two)
console.log(three)
console.log(four)

//3 and //4
const para=document.querySelectorAll("p");
const n=para.length
for(var i=0;i<n;i++)
{
    console.log(para[i]);
}

//5
para[3].textContent="Fourth Paragraph";
console.log(para[3]);

//6
para[0].className = "first-pararaph";
para[0].id = "first";
//setAttribute
para[1].setAttribute("class", "second");
para[1].setAttribute("id", "second");
//adding a class to another class
para[2].classList.add('title', 'third')




