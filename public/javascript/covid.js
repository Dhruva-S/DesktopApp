window.onload = function() {
    if(localStorage.getItem("userCountry") === null){
        getCovidData();
    }
    else {
    document.getElementById("userCountry").value=localStorage.getItem('userCountry');
    var Topic=localStorage.getItem('userCountry');
   getCovidDataByCountry(Topic);
    }
  };


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
           console.log(data);  
           const html=data.map(data=>{
            return `
            <div class="jumbotron">
            <h1 class="display-4">${data.country}</h1>
            <div  style="text-align:center; max-width: 18rem; " class="card border-success mb-3">
           <img class="card-img-top" src="${data.countryInfo.flag}" alt="Card image cap">
            </div>
            <hr class="my-4">
            <h3>Active cases </h3><p>${data.active}</p>
            <h3>Total cases  </h3><p>${data.cases}</p>
            <h3>Critical cases </h3><p>${data.critical}</p>
            <h3>Total deaths </h3><p>${data.deaths}</p>
            <h3>One case per people </h3><p>${data.oneCasePerPeople}</p>
            <h3>One death per people </h3><p>${data.oneDeathPerPeople}</p>
           
            </div>
            `
           })
        //    const image=data.map(data=>{
        //    return  `
        //    <div class="card border-success mb-3" style="max-width: 18rem;">
        //    <img class="card-img-top" src="${data.countryInfo.flag}" alt="Card image cap">
        //     </div>`
        //    })
           console.log(html);
           document.getElementById("text").innerHTML=html;
        //    document.getElementById("flag").innerHTML=image;
       });  
       }


       function getCovidDataByCountry(countryName){
        var url ='https://disease.sh/v3/covid-19/countries/'+countryName+'?strict=true';
        document.getElementById("userCountry").innerHTML=countryName;
        // var url="https://newsapi.org/v2/top-headlines?country=us&apiKey=0917198423514d8c82a41272ff93c662";      //Top Headlines from india
       var req = new Request(url);
       
       fetch(req)
           .then(function(response) {
                // console.log(response.json());
               return response.json();
           })
           .then(data=> {
               console.log(data);  
               const html=
                `
                <div class="jumbotron">
                <h1 class="display-4">${data.country}</h1>
                <div  style="text-align:center; max-width: 18rem; " class="card border-success mb-3">
               <img class="card-img-top" src="${data.countryInfo.flag}" alt="Card image cap">
                </div>
                <hr class="my-4">
                <h3>Active cases </h3><p>${data.active}</p>
                <h3>Total cases  </h3><p>${data.cases}</p>
                <h3>Critical cases </h3><p>${data.critical}</p>
                <h3>Total deaths </h3><p>${data.deaths}</p>
                <h3>One case per people </h3><p>${data.oneCasePerPeople}</p>
                <h3>One death per people </h3><p>${data.oneDeathPerPeople}</p>
               
                </div>
                `
               console.log(html);
               document.getElementById("text").innerHTML=html;
            //    document.getElementById("flag").innerHTML=image;
           });  
           document.getElementById("userCountry").innerHTML=countryName;
           }

    //    getCovidData();
      function getCovidDataByCountryHelper(){
        localStorage.setItem('userCountry', document.getElementById('userCountry').value);
      }
    