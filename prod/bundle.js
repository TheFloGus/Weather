(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const area = document.querySelector('#data')
const {setLocal} = require('./weatherObject')

function printData(data){
	area.innerHTML = ''
		return area.insertAdjacentHTML('afterbegin', 
		`
		<div class="weather">
			<h1 class="temperature">${data.temperature}C</h1>
			<p class="location">${data.location}</p>
		</div>

		<div class="data__items">
			<ul class="data__list">
				<li class="data__item">
					<h2 class="data__header" >Time</h2>
					<p class="data__text" id='localtime'>${data.time}</p>
				</li>
				<li class="data__item">
					<h2 class="data__header">Feels like</h2>
					<p class="data__text" id='feelslike'>${data.feelsLike}</p>
				</li>
				<li class="data__item ex">
					<h2 class="data__header">Today is </h2>
					<p class="data__text" id='weather_descriptions'>${data.weatherDescriptions}</p>
				</li>
				<li class="data__item">
					<h2 class="data__header">Wind</h2>
					<p class="data__text" id='wind_dir'>l${data.windDir}</p>
				</li>
				<li class="data__item">
					<h2 class="data__header">Speed</h2>
					<p class="data__text" id='wind_speed'>${data.windSpeed} Km/h</p>
				</li>
				<li class="data__item ex">
					<h2 class="data__header">Pressure</h2>
					<p class="data__text" id='pressure'>${data.pressure} MB</p>
				</li>
			</ul>
		</div>

		`)
}

function printError(message = 'Ooops! Something went wrong'){
	area.innerHTML = '';
	return area.insertAdjacentHTML('afterbegin', `
	<div class="data__items error">
		<h2>${message}</h2>
	</div>
	`)
}

function changeBG(data){
	const {time} = data;
	let hours = time[0]+time[1]
	if (hours === '00'){
		hours = '24'
	}
	const wrap = document.querySelector('.wrap');
		wrap.style.backgroundImage = `url(./img/${hours}.00.webp)`
}

function printHistory(history){
	const historyArea = document.querySelector('.data__items')
	historyArea.innerHTML = '';
	historyArea.insertAdjacentHTML('afterbegin', `
		<ul class = "history__list">
			<li class = "history__item">Location</li>
			<li class = "history__item">Temperature</li>
			<li class = "history__item">Time</li>
			<li class = "history__item">Day was</li>
			<li class = "history__item">Wind direction</li>
			<li class = "history__item">Pressure</li>
		</ul>
		<div class = 'line'></div> 
	`)

	history.forEach(item => {
		historyArea.insertAdjacentHTML('beforeend', `
		<ul class = "history__list">
			<li class = "history__item">${item.location}</li>
			<li class = "history__item">${item.temperature}</li>
			<li class = "history__item">${item.time }</li>
			<li class = "history__item">${item.weatherDescriptions }</li>
			<li class = "history__item">${item.windDir}</li>
			<li class = "history__item">${item.pressure }</li>
		</ul>
		<div class = 'line'></div> 
	`)
	});

	historyArea.insertAdjacentHTML('beforeend', `
		<button id = 'clearHistory' class = 'form__btn clearHistory'>Clear all</button>
	`);

	document.querySelector('#clearHistory').addEventListener('click', e => {
		e.preventDefault();
		console.log(e);
		history.splice(0,history.length)
		printHistory(history);
		setLocal(history);
	})
}

module.exports = {printData, printError, changeBG, printHistory}
},{"./weatherObject":3}],2:[function(require,module,exports){
const sources = [];

for (let i = 1; i<=24; i++){
	let str = ''
	if(i<10){
		 str = `./img/0${i}.00.webp`
	}else{
		 str = `./img/${i}.00.webp`
	}
	sources.push(str);
}

function preloadImages(srcs) {
    if (!preloadImages.cache) {
        preloadImages.cache = [];
    }
    let img;
    for (let i = 0; i < srcs.length; i++) {
        // eslint-disable-next-line no-undef
        img = new Image();
        img.src = srcs[i];
        preloadImages.cache.push(img);
    }
}

preloadImages(sources);

module.exports = preloadImages;

},{}],3:[function(require,module,exports){
function WeatherInfo(data){
	this.location = `${data.location.name} , ${data.location.country}`;
	this.temperature = data.current.temperature;
	const newTime = data.location.localtime.split(" ")[1];
	this.time = newTime;
	this.feelsLike = data.current.feelslike;
	this.weatherDescriptions = data.current.weather_descriptions;
	this.windDir = data.current.wind_dir;
	this.windSpeed = data.current.wind_speed;
	this.pressure = data.current.pressure;
}

function updateHistory(data, history){
	history.unshift(data);
	if(history.length > 5){
		history.pop();
	}
}

function setLocal (weather){
	localStorage.setItem('history', JSON.stringify(weather))
}

function getLocal (){
	let history = []
	if(localStorage.getItem('history')){
		history = JSON.parse(localStorage.getItem('history'))
	}
	return history
}

module.exports = {WeatherInfo, updateHistory, setLocal, getLocal}
},{}],4:[function(require,module,exports){
"use strict";

// eslint-disable-next-line import/extensions
const {
  WeatherInfo,
  updateHistory,
  setLocal,
  getLocal
} = require('./components/weatherObject');

const {
  printData,
  printError,
  changeBG,
  printHistory
} = require('./components/display'); // eslint-disable-next-line no-unused-vars


const preloadImages = require('./components/images');

const btn = document.querySelector('#button');
const input = document.querySelector('#input');
let put = '';
const reg = /[^a-zA-Z\s-_]/;
const history = getLocal();

function getWeather(city) {
  fetch(`http://api.weatherstack.com/current?access_key=8772fea4141d1c4198f6acc85d845033&query=${city}`).then(r => r.json()).then(data => {
    if (data.success === false) {
      printError('There is no such city');
    } else {
      const currentWeather = new WeatherInfo(data);
      printData(currentWeather);
      changeBG(currentWeather);
      updateHistory(currentWeather, history);
      setLocal(history);
    }
  }).catch(err => printError(err));
}

navigator.geolocation.getCurrentPosition(position => {
  getWeather(`${position.coords.latitude},${position.coords.longitude}`);
});
btn.addEventListener('click', e => {
  e.preventDefault();

  if (input.value) {
    put = input.value;
  } else {
    navigator.geolocation.getCurrentPosition(position => {
      getWeather(`${position.coords.latitude},${position.coords.longitude}`);
    });
  }

  if (!reg.test(put)) {
    getWeather(put);
  } else {
    printError();
  }
});
input.addEventListener("keypress", e => {
  if (e.key === 'Enter') {
    if (input.value) {
      put = input.value;
    } else {
      navigator.geolocation.getCurrentPosition(position => {
        getWeather(`${position.coords.latitude} , ${position.coords.longitude}`);
      });
    }

    if (!reg.test(put) && input.value) {
      getWeather(put);
    } else {
      printError();
    }

    e.preventDefault();
  }
});
document.querySelector('#localWeather').addEventListener('click', e => {
  e.preventDefault();
  navigator.geolocation.getCurrentPosition(position => {
    getWeather(`${position.coords.latitude},${position.coords.longitude}`);
  });
});
document.querySelector('#history').addEventListener('click', e => {
  e.preventDefault();
  printHistory(history);
});

},{"./components/display":1,"./components/images":2,"./components/weatherObject":3}]},{},[4]);
