const API_URL = 'https://api.openweathermap.org/data/2.5/'
const API_KEY = '40a3ab422b6c7446253471c3714edfb8'

export const fetchData = (inputValue) =>{
    fetch(`${API_URL}forecast?q=${inputValue}&APPID=${API_KEY}&units=metric`)
    .then(resp => {
        return resp.json()})
    .then(data => {console.log(data)})
}