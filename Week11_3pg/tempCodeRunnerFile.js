const url = 'https://restcountries.eu/rest/v2/all'
const fetchData = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        countries = data;
        //logging the country name,capital,languages,population
        countries.forEach(country => {
            console.log(`country:${country.name} capital:${country.capital} languages:${country.languages} population${country.population}`)
        })
    }
    catch (err) {
        console.log(err)
    }
}
console.log('===== async and await')
fetchData();