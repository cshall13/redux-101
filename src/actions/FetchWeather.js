import $ from 'jquery';

// fetchWeather is an async operation. the dispatcher WILL NOT wait
// this is why everyone seems to bad mouth JavaScript
// redux middleware can rescue us
// Redux middleware, redux-promise, is imported where the store is created

var fetchWeather = function(){
    const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30324&appid=e312dbeb8840e51f92334498a261ca1d'
    const thePromise = $.getJSON(weatherUrl);
    // jquery AJAX always returns a promise. we no longer wnat to
    // send our callback. redux-promise will handle it for us
    // $.getJSON(weatherUrl,(weatherData)=>{
    //     console.log(weatherData)
            return{
                type: 'GET_WEATHER',
                // we can return 'thePromise'because redux-promise is going to make
                // sure it is ready BEFORE its dispatched to the reducers
                payload: thePromise
            }
        // })
};

export default fetchWeather;