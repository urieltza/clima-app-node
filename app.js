

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc:'Dirección de la ciudad para obtener el clima',
        demand:true
    },
    // latitud:{
    //     alias: 'lat',
    //     desc:'Latitud de un país',
    //     // demand:true
    // },
    // longitud:{
    //     alias: 'lng',
    //     desc:'Longitud de un país',
    //     // demand:true
    // }

}).argv; 

// lugar.getLugarLatLng( argv.direccion)
//     .then( console.log )
//     .catch( console.log );
// clima.getClima( 40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async (direccion) => {
        
        try{
            const getLugarLarLng= await lugar.getLugarLatLng(direccion);
            const getclima=await clima.getClima(getLugarLarLng.lat, getLugarLarLng.lng);
            return `El clima de ${direccion} es de ${getclima}`;
        }
        catch(e){
            return `No se pudo determinar el clima de ${direccion}+${e}`;
        }
        // clima.getClima( 40.750000, -74.000000)
        //     .then(console.log)
        //     .catch(console.log);


};


getInfo(argv.direccion).then( res => {
    console.log(res) ;
});