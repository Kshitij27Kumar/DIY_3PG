const fetch = require('node-fetch');
//let div=document.querySelector("div")
const url = 'https://restcountries.eu/rest/v2/all'
fetch(url)
    .then(response=>response.json())
    .then(data=>{
        data.forEach(country=>{
            /*let box = document.createElement("div")
                box.textContent = country.name
                box.style.width = "150px";
                box.style.height = "120px"
                box.style.backgroundColor = "white"
                box.style.margin = "8px";
                div.appendChild(box)*/
            console.log(country.name)    
        })
    })
    .catch(error => console.log(error))
/*const fetchData = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        countries = data;
        //logging the country name,capital,languages,population
        countries.forEach(country => {
            if (country.name.toLowerCase() === "nigeria") {
                let box = document.createElement("div")
                box.textContent = country.name
                box.style.width = "150px";
                box.style.height = "120px"
                box.style.backgroundColor = "green"
                box.style.margin = "8px";
                div.appendChild(box)
            }
            let box = document.createElement("div")
            box.textContent = country.name
            box.style.width = "150px";
            box.style.height = "120px"
            box.style.backgroundColor = "aqua"
            box.style.margin = "8px";
            div.appendChild(box)
        })

    } catch (err) {
        console.log(err)
    }
}
console.log('===== async and await')
fetchData();*/