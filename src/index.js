// eslint-disable-next-line import/extensions
import './style.css'

const {WeatherInfo, updateHistory, setLocal, getLocal} = require('./components/weatherObject')
const {printData, printError, changeBG, printHistory} = require('./components/display')
// eslint-disable-next-line no-unused-vars
const preloadImages = require('./components/images')

const btn = document.querySelector('#button')
const input = document.querySelector('#input')
let put = '';
const reg = /[^a-zA-Z\s-_]/;
const history = getLocal();



function getWeather (city){
    fetch(`http://api.weatherstack.com/current?access_key=8772fea4141d1c4198f6acc85d845033&query=${city}`)
    .then (r => r.json())
    .then(data => {
		if(data.success === false){
			printError('There is no such city')
		}else{
			const currentWeather = new WeatherInfo(data);
			printData(currentWeather);
			changeBG(currentWeather);
			updateHistory(currentWeather, history);
			setLocal(history);
		}
	})
	.catch(err=>printError(err))
}

navigator.geolocation.getCurrentPosition(position => {
	getWeather((`${position.coords.latitude  },${  position.coords.longitude}`))
});

btn.addEventListener('click', e => {
	e.preventDefault();

	if(input.value){
		put = input.value;
	}else {
		navigator.geolocation.getCurrentPosition(position => {
			getWeather((`${position.coords.latitude  },${  position.coords.longitude}`))
		});
	}

	if (!reg.test(put)){
		getWeather(put)
	}else {
		printError();
	}
})

input.addEventListener("keypress", e => {
	
	if (e.key === 'Enter') {
		if(input.value){
			put = input.value;
		}else {
			navigator.geolocation.getCurrentPosition(position => {
				getWeather((`${position.coords.latitude  } , ${  position.coords.longitude}`))
			});
		}

		if (!reg.test(put) && input.value){
			getWeather(put)
		}else {
			printError();
		}
		e.preventDefault();
	}
});

document.querySelector('#localWeather').addEventListener('click', e=>{
	e.preventDefault();
	navigator.geolocation.getCurrentPosition(position => {
		getWeather((`${position.coords.latitude  },${  position.coords.longitude}`))
	});
})

document.querySelector('#history').addEventListener('click', e => {
	e.preventDefault();
	printHistory(history);
	
})