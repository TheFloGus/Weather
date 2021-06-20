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