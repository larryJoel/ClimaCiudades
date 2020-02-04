const axios = require('axios');

const XXXX= async(dir)=>{
    const encodeUrl = encodeURI(dir);
    console.log(encodeUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'X-RapidAPI-Key': 'a44802c42dmsh8d8dbdea01be482p106271jsne4cef2a61cc2'}
      });
    
      const resp = await instance.get();
            if ( resp.data.Results.length === 0){
                throw new Error (`No hay resultados para ${dir}`);
            }
            const data = resp.data.Results[0];
            const direccion = data.name;
            const lat = data.lat;
            const lon = data.lon;
            const type = data.type;
            const c = data.c;

        return {
            direccion,
            lat,
            lon,
            type,
            c
        }
}




module.exports={
    XXXX
}

