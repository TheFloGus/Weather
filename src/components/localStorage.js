let history = require('./weatherObject')

function setLocal (weather){
	localStorage.setItem('history', JSON.stringify(weather))
}

function getLocal (){
	if(localStorage.getItem('history')){
		history = JSON.parse(localStorage.getItem('history'))
	}
}

module.exports = {setLocal, getLocal}