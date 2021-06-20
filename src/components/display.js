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