const API_URL = 'https://api.openweathermap.org/data/2.5/'
const API_KEY = '40a3ab422b6c7446253471c3714edfb8'

export const fetchData = (countryName ,setData) =>{
    if(countryName){
        fetch(`${API_URL}forecast?q=${countryName}&APPID=${API_KEY}&units=metric`)
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                return setData(data)
            })
    } else {
        window.navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            fetch(`${API_URL}forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
                .then(resp => {
                    return resp.json()
                })
                .then(data => {
                    return setData(data)
                })
        })}
}