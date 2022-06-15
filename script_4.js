let body=document.querySelector("body")
let div=document.querySelector("div")
isPrime=(n)=>{
    var fact=0;
    for(let i=2;i<=n/2;i++)
    {
        if(n%i==0)
        {
            fact++;
            break;
        }
    }
    if(fact)
        return false;
    else
        return true;
}
for(let i=0;i<=101;i++)
{
    if(i==1)
    {
        let box=document.createElement("div");
        box.textContent=i;
        box.style.width="15%";
        box.style.height="120px";
        box.style.backgroundColor="yellow"
        body.style.margin="8px";
        box.style.textAlign="center";
        div.appendChild(box)
    }
    else if(i==0)
    {
        let box=document.createElement("div");
        box.textContent=i;
        box.style.width="15%";
        box.style.height="120px";
        box.style.backgroundColor="green"
        body.style.margin="8px";
        box.style.textAlign="center";
        div.appendChild(box)
    }
    else if(isPrime(i))
    {
        let box=document.createElement("div");
        box.textContent=i;
        box.style.width="15%";
        box.style.height="120px";
        box.style.backgroundColor="red"
        body.style.margin="8px";
        box.style.textAlign="center";
        div.appendChild(box)
    }
    else if(i%2==0)
    {
        let box=document.createElement("div");
        box.textContent=i;
        box.style.width="15%";
        box.style.height="120px";
        box.style.backgroundColor="green"
        body.style.margin="8px";
        box.style.textAlign="center";
        div.appendChild(box)
    }
    else if(i%2)
    {
        let box=document.createElement("div");
        box.textContent=i;
        box.style.width="15%";
        box.style.height="120px";
        box.style.backgroundColor="yellow"
        body.style.margin="8px";
        box.style.textAlign="center";
        div.appendChild(box)
    }
}
/*let body = document.querySelector("body")
let div = document.querySelector("div")
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        let box = document.createElement("div")
        box.textContent = i
        box.style.width = "150px";
        box.style.height = "120px"
        box.style.backgroundColor = "green"
        box.style.margin = "8px";
        div.appendChild(box)
    } else {
        let box = document.createElement("div")
        box.textContent = i;
        box.style.width = "150px";
        box.style.height = "120px";
        box.style.backgroundColor = "yellow"
        box.style.margin = "8px";
        div.appendChild(box)
    }
}*/