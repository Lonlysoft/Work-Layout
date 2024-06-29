//day and night cicle script.
//scapped because it deviated the main purpose
/*
function getTimeOfTheDay(){
	let agora = new Date();
	return agora.getHours();
}

const main = {
	day: "#fff",
	night: "#556487",//azul escuro
	dawn: "#000", //preto
	sunset: "#ffcE85", //laranja leitura
	morning: "#f0ff85", //amarelo leitura
	sunrise: "#4d351e" //marrom boga
}

const bg = {
	day: "#5656a6",
	night: "#20376e",//pastel cinzento azul mais claro
	dawn: "#333344", //roxo escuro
	sunset: "#5e3499", //roxo royal
	morning: "#5cb969", //verde claro pastelado
	sunrise: "#83212e" //vinho
}

const font = {
	day: "black",
	night: "#f0ff85",//pastel cinzento azul mais claro
	dawn: "#f0ff85",
	sunset: "#5e3499", //roxo royal
	morning: "#3c9949", //verde claro pastelado
	sunrise: "white" //vinho
}

const contrast = {
	day: "red",
	night: "yellow",//amarelo
	dawn: "cyan", //roxo escuro
	sunset: "#6829a3", //roxo royal
	morning: "#000", //verde claro pastelado
	sunrise: "yellow" //vinho
}

const link = {
	day: "blue",
	night: "lime",
	dawn: "yellow",
	sunset: "DarkGreen",
	morning: "blue",
	sunrise: "yellow"
}

function setDayState(time){
	if(time >= 18 && time < 23)
		return "night";
		
	else if(time > 6 && time <= 10)
		return "morning";
		
	else if(time == 17)
		return "sunset";
		
	else if(time >= 23 || time <= 4)
		return "dawn";
		
	else if(time == 5 || time == 6)
		return "sunrise";
		
	return "day";
}

function DayAndNightCicle(){
	let h = 19// getTimeOfTheDay();
	let dayState = setDayState(h);
	document.documentElement.style.setProperty("--main-color", main[dayState]);
	document.documentElement.style.setProperty("--coloring", bg[dayState]);
	document.documentElement.style.setProperty("--font-color", font[dayState]);
	document.documentElement.style.setProperty("--contrast-color", contrast[dayState]);
	document.documentElement.style.setProperty("--link-color", link[dayState]);
}

DayAndNightCicle()
*/
