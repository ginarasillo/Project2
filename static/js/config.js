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
          mode: 'lines+markers'
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
            mode: 'lines+markers'
          }
        ]
        Plotly.newPlot('dailycountry', dailycountry_data);
  }); //End d3.json
} //End countryChanged



// function countryChanged2(country){
//   d3.json("/api/country/"+country).then(data=>{
//     console.log(data)

//     let country = data.country
//     filtred_data=data.country.filter(s=>s.country==sample)
//         {
//           x: data.map(d=>d.date),
//           y: data.map(d=>d.daily_vaccinations),
//           type: 'scatter',
//           mode: 'lines+markers'
//         }
//   });
      
//     Plotly.newPlot('dailycountry', dailycountry_data);

// }




init();


// function buildCharts(sample){
//   d3.json("samples.json").then((data)=>{
//       console.log("hello")
//       let samples=data.samples
//       filtred_data=samples.filter(s=>s.id==sample)
//       let results=filtred_data[0]
//       let otu_ids= results.otu_ids
//       let otu_values= results.sample_values
//       let otu_labels=results.otu_labels

//       let bar_d=[
//           {
//               y:otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
//               x: otu_values.slice(0,10).reverse(),
//               text: otu_labels.slice(0,10).reverse(),
//               type:"bar",
//               orientation:"h"
//           }
//       ];

//       Plotly.newPlot("bar", bar_d);