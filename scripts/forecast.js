const key = 'dC9ZJGyToVsohrAKVSbuAL3lEP7t0ePD';

// Get weather Information

const getWeather = async (id) =>{
    console.log("id",id);
    console.log("key",key);
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    
    return data[0];

};

// Get City Information
const getCity = async (city) => {
    console.log("city",city);
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};
// getCity('manchester')
//     .then(data => {
//         return getWeather(data.Key);
//     }).then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
// });
