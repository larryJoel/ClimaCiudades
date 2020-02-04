const axios = require('axios');

const getClima = async(lat, lon)=> {

   const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9a0dfda5abcc5664b168d03218e10ad0&units=metric`)
    return resp.data.main.temp;
}

module.exports= {
    getClima
}