async function getIP(){
    let res = await fetch("https://ipinfo.io/json?token=21379f7a68461c");
    let data = await res.json();
    console.log(data);
    console.log(data.country);
}

getIP();
let cityName=document.getElementById("searchBox").value;
document.getElementById("button").addEventListener("click",btnClick);

async function btnClick() {
    
    let cityName = document.getElementById("searchBox").value;

    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=c7fb0e9c8721431388621506242808&q=${cityName}&days=4&aqi=yes&alerts=yes`;

    try {
        
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data); 

        document.getElementById("currentLocation").innerHTML=data.location.name;
        document.getElementById("temp").innerHTML=data.current.temp_c+"°C";
        document.getElementById("condition").innerHTML=data.current.condition.text;
        document.getElementById("currentImg").src="https:"+data.current.condition.icon;
        let localtime=data.location.localtime;
        let time=localtime.split(" ")[1];
        let hour=time.split(":");
        hour=parseInt(hour);
        console.log(hour);
        let tp=hour>=12?" PM":" AM";
        document.getElementById("localTime").innerHTML=time+tp;
        document.getElementById("temperature").innerHTML=data.current.temp_c+"°C";
        document.getElementById("humidity").innerHTML=data.current.humidity+"%";
        document.getElementById("windSpeed").innerHTML=data.current.wind_kph+" km/h";
        document.getElementById("description").innerHTML=data.current.condition.text;
        document.getElementById("feelsLike").innerHTML=data.current.feelslike_c+"°C";
        document.getElementById("dewPoint").innerHTML=data.current.dewpoint_c+"°C";
        document.getElementById("forecastDay1").innerHTML=data.forecast.forecastday[1].date;
        document.getElementById("forecastDay2").innerHTML=data.forecast.forecastday[2].date;
        document.getElementById("forecastDay3").innerHTML=data.forecast.forecastday[3].date;
        document.getElementById("forecastDay1Img").src="https:"+data.forecast.forecastday[1].day.condition.icon;
        document.getElementById("forecastDay2Img").src="https:"+data.forecast.forecastday[2].day.condition.icon;
        document.getElementById("forecastDay3Img").src="https:"+data.forecast.forecastday[3].day.condition.icon;

    } catch (error) {
        console.error("Error fetching the weather data:", error);
    }
}