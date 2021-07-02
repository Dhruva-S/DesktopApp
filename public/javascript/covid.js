getCovidData();


function getCovidData(){
    // document.getElementById("topicDisplay").innerHTML=localStorage.getItem('userTopic');
    // console.log(topic);
    var url ='https://disease.sh/v3/covid-19/countries/';
   
    // var url="https://newsapi.org/v2/top-headlines?country=us&apiKey=0917198423514d8c82a41272ff93c662";      //Top Headlines from india
   var req = new Request(url);
   
   fetch(req)
       .then(function(response) {
            // console.log(response.json());
           return response.json();
       })
       .then(data=> {                                      
        //    console.log(data);  
           const html=data.map(data=>{
            return `
            <tr>
            <td>${data.country}</td>
            <td class="w-25">
            <img src="${data.countryInfo.flag}" class="img-fluid img-thumbnail" alt="Sheep">
            </td>
            <td>${data.active}</td>
            <td>${data.cases}</td>
            <td>${data.critical}</td>
            <td>${data.deaths}</td>
            <td>${data.critical}</td>
            <td>${data.population}</td>
            <td>${data.recovered}</td>
            <td>${data.todayCases}</td>
            <td>${data.todayDeaths}</td>
            <td>${data.tests}</td>
            </tr>`
           }).join('');

      
        //    console.log(html);
           document.getElementById("text").innerHTML=html;
       });  
       }

       
       
    