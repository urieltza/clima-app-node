const axios = require ('axios');

const getLugarLatLng = async (direction) => {

    const encodedUlr=encodeURI(direction);
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direction}`,
        timeout: 1000,
        headers: {'x-rapidapi-key': '91bfd6f97cmsh02dd7858a5516cfp198d3ejsn7fb32d341b8e'}
    });
    
    
    const resp = await instance.get();

    if(resp.data.Results.length==0){
        throw new Error(`No hay resultados para ${ direction }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    };
};


module.exports = {
    getLugarLatLng
};