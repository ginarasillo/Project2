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