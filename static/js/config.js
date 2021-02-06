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

d3.json("/api_dailycountry").then(data=>{

    let dailycountry_data = [
        {
          x: data.map(d=>d.date),
          y: data.map(d=>d.daily_vaccinations),
          type: 'scatter'
        }
      ];
      
    Plotly.newPlot('dailycountry', dailycountry_data);

})