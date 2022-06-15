const body = document.querySelector("body")
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const p = document.querySelector("p");
const lis = document.querySelectorAll(".wrapper li");

body.style.textAlign="center";
body.style.fontFamily="sans-serif"

h1.innerHTML='Asabeneh Yetayeh challenges in <span class="year">2020<span>'
let year=document.querySelector('.year');
//document.write(year)
let color;
const chameleon=()=>{
    let random1=Math.floor(Math.random()*255)
    let random2 = Math.floor(Math.random() * 255)
    let random3 = Math.floor(Math.random() * 255)
    color=`rgb(${random1},${random2},${random3})`
    year.style.color=color;
    year.style.textAlign=center;
}
setInterval(chameleon,1000);

h2.style.textDecoration="underline";
p.textContent=Date();
p.style.border = "solid"
p.style.width = "300px";
p.style.margin = "0 auto"

const chameleon2 = () => {
    let random1 = Math.floor(Math.random() * 255)
    let random2 = Math.floor(Math.random() * 255)
    let random3 = Math.floor(Math.random() * 255)
    color = `rgb(${random1},${random2},${random3})`
    // year.style.color = color;
    p.style.backgroundColor = color;
}
setInterval(chameleon2, 1000)
//lis.style.textDecoration="underline";
lis.forEach(li => {
    //li.style.whiteSpace="nowrap"
    li.style.listStyle = "none";
    li.style.border = "solid";
    li.style.margin = "0 auto"
    li.style.width = "800px";
    //li.style.height = "100%";
    //li.style.alignItems="center"
    if (li.textContent.toLowerCase().includes("done")) {
        li.style.backgroundColor = "green"
    } else if (li.textContent.toLowerCase().includes("ongoing")) {
        li.style.backgroundColor = "yellow"
    } else {
        li.style.backgroundColor = "red"
    }
});