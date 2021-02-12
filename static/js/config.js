console.log("Hola")

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
data.shift()

    let world_data = [
      {
          x: data.map(d=>d.date),
          y: data.map(d=>d.daily_vaccinations),
          type: 'scatter',
          mode: 'lines+markers',
          marker: {size:6}
          }
        ];


      
    Plotly.newPlot('world', world_data);

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
  d3.json("/api/country/"+country).then(data=>{
    let values = Object.values(data)
    let dates = values[0].date
    let dailyvaccinations =values[0].daily_vaccinations

        let dailycountry_data = [
          {
            x: dates,
            y: dailyvaccinations,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {size:12}
          }
        ]
        Plotly.newPlot('dailycountry', dailycountry_data);
  }); //End d3.json
} //End countryChanged







init();


