console.log("Hola javascript")

d3.json("/api_country").then(data=>{

    let country_data = [
        {
          x: data.map(d=>d.country),
          y: data.map(d=>d.daily_vaccinations),
          type: 'bar'
        }
      ];
      
    Plotly.newPlot('country', country_data);

})

d3.json("/api_world").then(data=>{

    let world_data = {
          x: data.map(d=>d.date),
          y: data.map(d=>d.daily_vaccinations),
          type: 'scatter'
        };

    let data=[world_data];
      
    Plotly.newPlot('world', data);

})


function init(){
  selector = d3.select("#selcountry")

  d3.json("/api/countries").then(data=>{
    data.forEach((country)=>{
      selector
        .append("option")
        .text(country)
        .property("value", country);
    })
  })
}

function countryChanged(country){
  d3.json("/api/country/"+country+"/daily").then(data=>{

    let dailycountry_data = [
        {
          x: data.map(d=>d.date),
          y: data.map(d=>d.daily_vaccinations),
          type: 'scatter'
        }
      ];
      
    Plotly.newPlot('dailycountry', dailycountry_data);

  })
}



init();