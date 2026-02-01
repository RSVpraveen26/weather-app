const month = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
const day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const d = new Date();
document.getElementById('year').innerHTML = d.getFullYear();
document.getElementById('date').innerHTML = d.getDate();
document.getElementById('month').innerHTML = month[d.getMonth()];
document.getElementById('day').innerHTML = day[d.getDay()];

let cityName = "Chennai";
const apikey = "0cefbdd8089c7b724b58eac94e84c704";

function citynamechange(){
  const input = document.getElementById("city-name").value.trim();
  if(input === ""){
    alert("Please enter a city name");
    return;
  }
  cityName = input;
  run();
}

function run(){
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`;

  fetch(apiurl)
    .then(res => res.json())
    .then(data => {
      if(data.cod !== 200){
        alert("City not found");
        return;
      }

      document.getElementById('name').innerHTML =
        "Weather today at " + data.name;

      let temp = data.main.temp - 273.15;
      document.getElementById('temp').innerHTML = temp.toFixed(1);
      document.querySelector('.t-real').innerHTML = "°C";

      document.getElementById('feel').innerHTML =
        "Condition : " + data.weather[0].main;
    })
    .catch(() => {
      alert("Network error");
    });
}

run();
