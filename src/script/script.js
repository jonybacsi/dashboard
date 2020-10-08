// Weather
window.addEventListener('load', ()=>{

	//let long;
	//let lat;
	let temperatureDescription = document.querySelector('.temperature-description');
	let temperatureDegree = document.querySelector('.temperature-degree');
	
	let todayMax = document.querySelector('.today-max');
	let todayMin = document.querySelector('.today-min');

	let dayOneMax = document.querySelector('.dayOne-max');
	let dayOneMin = document.querySelector('.dayOne-min');
	
	let dayTwoMax = document.querySelector('.dayTwo-max');
	let dayTwoMin = document.querySelector('.dayTwo-min');

	let dayThreeMax = document.querySelector('.dayThree-max');
	let dayThreeMin = document.querySelector('.dayThree-min');

	let dayFourMax = document.querySelector('.dayFour-max');
	let dayFourMin = document.querySelector('.dayFour-min');

	let dayFiveMax = document.querySelector('.dayFive-max');
	let dayFiveMin = document.querySelector('.dayFive-min');

		const proxy = 'https://cors-anywhere.herokuapp.com/';
		const api = `${proxy}https://api.darksky.net/forecast/94d995e7f2d8dadab5bc53a4a0d00f4d/47.5337758,19.131465000000002?daily&lang=hu&units=si`;

		fetch(api)
			.then(response =>{
				return response.json();
			})
			.then(data =>{
				console.log(data);
				
				const {temperature, summary, icon} = data.currently;
				
				const {temperatureMax, temperatureMin} = data.daily.data[0];
				const tIcon = data.daily.data[0].icon;

				const dayOneTempMax = data.daily.data[1].temperatureMax;
				const dayOneTempMin = data.daily.data[1].temperatureMin;
				const dayOneIcon = data.daily.data[1].icon;
			
				const dayTwoTempMax = data.daily.data[2].temperatureMax;
				const dayTwoTempMin = data.daily.data[2].temperatureMin;
				const dayTwoIcon = data.daily.data[2].icon;

				const dayThreeTempMax = data.daily.data[3].temperatureMax;
				const dayThreeTempMin = data.daily.data[3].temperatureMin;
				const dayThreeIcon = data.daily.data[3].icon;

				const dayFourTempMax = data.daily.data[4].temperatureMax;
				const dayFourTempMin = data.daily.data[4].temperatureMin;
				const dayFourIcon = data.daily.data[4].icon;

				const dayFiveTempMax = data.daily.data[5].temperatureMax;
				const dayFiveTempMin = data.daily.data[5].temperatureMin;
				const dayFiveIcon = data.daily.data[5].icon;
								
				// Set DOM elements from API

				//Current
				temperatureDegree.textContent = Math.round(temperature);
				temperatureDescription.textContent = summary;

				//Today
				todayMax.textContent = Math.round(temperatureMax);
				todayMin.textContent = Math.round(temperatureMin);
				
				// Day One
				dayOneMax.textContent = Math.round(dayOneTempMax);
				dayOneMin.textContent = Math.round(dayOneTempMin);

				// Day Two
				dayTwoMax.textContent = Math.round(dayTwoTempMax);
				dayTwoMin.textContent = Math.round(dayTwoTempMin);

				// Day Three
				dayThreeMax.textContent = Math.round(dayThreeTempMax);
				dayThreeMin.textContent = Math.round(dayThreeTempMin);

				// Day Four
				dayFourMax.textContent = Math.round(dayFourTempMax);
				dayFourMin.textContent = Math.round(dayFourTempMin);

				// Day Five
				dayFiveMax.textContent = Math.round(dayFiveTempMax);
				dayFiveMin.textContent = Math.round(dayFiveTempMin);

				// Set icons
				setIcon(icon, document.querySelector(".icon"));
				setTodayIcon(tIcon,document.querySelector(".today-icon"));
				setdayOneIcon(dayOneIcon, document.querySelector(".dayOne-icon"));
				setdayTwoIcon(dayTwoIcon, document.querySelector(".dayTwo-icon"));
				setdayThreeIcon(dayThreeIcon,document.querySelector(".dayThree-icon"));
				setdayFourIcon(dayFourIcon,document.querySelector(".dayFour-icon"));
				setdayFiveIcon(dayFiveIcon,document.querySelector(".dayFive-icon"));
			})
		;	

	function setIcon (icon, iconID) {
		const skycons = new Skycons ({color: "#005580"});
		const currentIcon =  icon.replace(/-/g, "_").toUpperCase();
		skycons.play();
		return skycons.set(iconID, Skycons[currentIcon]);
	}

	function setTodayIcon (tIcon, IconID) {
		const todaySkycons = new Skycons ({color: "#005580"});
		const todayIcon = tIcon.replace(/-/g, "_").toUpperCase();
		todaySkycons.play();
		return todaySkycons.set(IconID, Skycons[todayIcon]);
	}

	function setdayOneIcon (dayOneIcon, IconID) {
		const dayOneSkycons = new Skycons ({color: "#005580"});
		const dOneIcon = dayOneIcon.replace(/-/g, "_").toUpperCase();
		dayOneSkycons.play();
		return dayOneSkycons.set(IconID, Skycons[dOneIcon]);
	}
	
	function setdayTwoIcon (dayTwoIcon, IconID) {
		const dayTwoSkycons = new Skycons ({color: "#005580"});
		const dTwoIcon = dayTwoIcon.replace(/-/g, "_").toUpperCase();
		dayTwoSkycons.play();
		return dayTwoSkycons.set(IconID, Skycons[dTwoIcon]);
	}

	function setdayThreeIcon (dayThreeIcon, IconID) {
		const dayThreeSkycons = new Skycons ({color: "#005580"});
		const dThreeIcon = dayThreeIcon.replace(/-/g, "_").toUpperCase();
		dayThreeSkycons.play();
		return dayThreeSkycons.set(IconID, Skycons[dThreeIcon]);
	}

	function setdayFourIcon (dayFourIcon, IconID) {
		const dayFourSkycons = new Skycons ({color: "#005580"});
		const dFourIcon = dayFourIcon.replace(/-/g, "_").toUpperCase();
		dayFourSkycons.play();
		return dayFourSkycons.set(IconID, Skycons[dFourIcon]);
	}

	function setdayFiveIcon (dayFiveIcon, IconID) {
		const dayFiveSkycons = new Skycons ({color: "#005580"});
		const dFiveIcon = dayFiveIcon.replace(/-/g, "_").toUpperCase();
		dayFiveSkycons.play();
		return dayFiveSkycons.set(IconID, Skycons[dFiveIcon]);
    }	
    
    // Date
    var day = new Date();
    var weekday = new Array(10);
    weekday[0] = "Hétfő";
    weekday[1] = "Kedd";
    weekday[2] = "Szerda";
    weekday[3] = "Csütörtök";
    weekday[4] = "Péntek";
    weekday[5] = "Szombat";
    weekday[6] = "Vasárnap";
    weekday[7] = "Hétfő";
    weekday[8] = "Kedd";
    weekday[9] = "Szerda";
    weekday[10] = "Csütörtök";

    document.querySelector('.dayOne').textContent = weekday[day.getDay()] + ":";
    document.querySelector('.dayTwo').textContent = weekday[day.getDay() + 1] + ":";    
    document.querySelector('.dayThree').textContent = weekday[day.getDay() + 2] + ":";
    document.querySelector('.dayFour').textContent = weekday[day.getDay() + 3] + ":";
    document.querySelector('.dayFive').textContent = weekday[day.getDay() + 4] + ":";
});

// Joke
fetch ("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
})
.then (response => response.json())
.then (data => {
    document.querySelector(".joke").textContent = data.joke;
})


// etterem dorpdown menu
var etteremDropdown = document.getElementsByClassName("etterem-btn");
var i;

for (i = 0; i < etteremDropdown.length; i++) {
  etteremDropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var etteremDropdownContent = this.nextElementSibling;
  if (etteremDropdownContent.style.display === "block") {
  etteremDropdownContent.style.display = "none";
  } else {
  etteremDropdownContent.style.display = "block";
  }
  });
}

// geo dorpdown menu
var geoDropdown = document.getElementsByClassName("geo-btn");
var i;

for (i = 0; i < geoDropdown.length; i++) {
  geoDropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var geoDropdownContent = this.nextElementSibling;
  if (geoDropdownContent.style.display === "block") {
  geoDropdownContent.style.display = "none";
  } else {
  geoDropdownContent.style.display = "block";
  }
  });
}


// Version dropdown
var versionDropdown = document.getElementsByClassName("version-btn");
var i;

for (i = 0; i < versionDropdown.length; i++) {
  versionDropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var versionDropdownContent = this.nextElementSibling;
  if (versionDropdownContent.style.display === "block") {
  versionDropdownContent.style.display = "none";
  } else {
  versionDropdownContent.style.display = "block";
  }
  });
}