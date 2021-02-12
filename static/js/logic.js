// Create an initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
	center: [15.5994, -28.6731],
	zoom: 3
  });
  
  
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
	attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
	tileSize: 512,
	maxZoom: 12,
	zoomOffset: -1,
	id: "mapbox/streets-v11",
	accessToken: "pk.eyJ1IjoiYmVyZW5pY2UtZHMiLCJhIjoiY2trN2txN3YzMDJjZDJvbzdnNnQ1azd0OSJ9.R0DgOZ9y2CVzBHjau0grvw"
  }).addTo(myMap);
  
  
  var countries = [
	{
	  name: "United States",
	  location: [38.541, -98.608],
	  people_vaccinated: 26376556.0,
	  population: 331002651,
	
	},
	{
	  name: "China",
	  location: [31.277, 112.197],
	  people_vaccinated: 21794325.0,
	  population: 1439323776
	},
	{
	  name: "United Kingdom",
	  location: [55.968, -4.243],
	  people_vaccinated: 7956920.0,
	  population: 15493721
	},
	{
	  name: "England",
	  location: [51.555, -0.030],
	  people_vaccinated: 6936235.0,
	  population: 55382791
	},
	{
	  name: "Israel",
	  location: [30.803, 34.486],
	  people_vaccinated: 4535713.0,
	  population:  8655535 
	},
	{
	  name: "India",
	  location: [22.912, 78.948],
	  people_vaccinated: 3379485.0,
	  population: 1380004385
	},
	{
	  name: "Turkey",
	  location: [39.103, 34.991],
	  people_vaccinated: 2540614.0,
	  population: 84339067
	},
	{
	  name: "United Arab Emirates",
	  location: [23.871, 54.147],
	  people_vaccinated: 2317170.0,
	  population: 9890402
	},
	{
	  name: "Germany",
	  location: [51.158, 10.077],
	  people_vaccinated: 2296069.0, 
	  population:83783942
	},
	{
	  name: "Italy",
	  location: [43.060, 12.441],
	  people_vaccinated: 808746.0,
	  population: 60461826
	},
	{
	  name: "Brasil",
	  location: [-8.878, -56.570],
	  people_vaccinated: 1633573.0,
	  population: 212559417 
	},
	{
	  name: "Spain",
	  location: [39.581, -3.390],
	  people_vaccinated: 1366039.0,
	  population: 212559417 
	},
	{
	  name: "France",
	  location: [46.691, 2.551],
	  people_vaccinated: 1261221.0,
	  population: 65273511 
	},
	{
	  name: "Poland",
	  location: [53.020, 18.713],
	  people_vaccinated: 1069106.0,
	  population: 37846611
	},
	{
	  name: "Russia",
	  location: [62.606, 94.795],
	  people_vaccinated: 927026.0,
	  population: 145934462
	}
  ];
  
  // Loop through the countries array
  for (let country of countries){

  // Conditionals for countries vaccination
	let color = "";
  
	if(country.people_vaccinated>5000000){
	  color = "seagreen"
	  radio = country.people_vaccinated / 30
	}else if (country.people_vaccinated>1600000){
	  color = "gold"
	  country.people_vaccinated / 35
	}else if (country.people_vaccinated>1200000){
	  color = "darkorange"
	  country.people_vaccinated / 40
	}else{
	  color = "red"
	  country.people_vaccinated / 45
	}
  // Add circles to map
  L.circle(country.location,{
	color: "Gainsboro",
	fillColor : color,
	fillOpacity: 0.75,
	// Adjust radius
	radius: radio
  })
  .bindPopup(`<h1>${country.name}</h1> <hr> <p>People Vaccinated: ${country.people_vaccinated}</p>
  <hr> <p>Population: ${country.population}<p>`)
	.addTo(myMap)
  } 