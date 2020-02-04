//const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;



// lugar.XXXX( argv.direccion)
// .then(console.log);

// clima.getClima(-34.610001,-58.369999)
//         .then( console.log)
//         .catch(console.log)

const getInfo = async (direccion) => {
    try {
        const coords = await lugar.XXXX (direccion);
        const temp = await clima.getClima (coords.lat,coords.lon);
        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (error) {
        return `no se pudo detrminar el clima de ${direccion}`;
    }
}
getInfo (argv.direccion)
    .then(console.log)
    .catch(console.log);

