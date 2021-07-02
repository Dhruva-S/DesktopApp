function getdata(topic){
    document.getElementById("topicDisplay").innerHTML=localStorage.getItem('userTopic');
    console.log(topic);
    var url = 'https://newsapi.org/v2/everything?' +
             'q='+topic+'&' +
             'from=2021-06-22&' +
             'sortBy=popularity&' +
             'apiKey=0917198423514d8c82a41272ff93c662';
   
    // var url="https://newsapi.org/v2/top-headlines?country=us&apiKey=0917198423514d8c82a41272ff93c662";      //Top Headlines from india
   var req = new Request(url);
   
   fetch(req)
       .then(function(response) {
            // console.log(response.json());
           return response.json();
       })
       .then(data=> {
           console.log(data);  
           const html=data.articles.map(article=>{
           return  `
           <div>
           <div class="news" >
           <p><img src="${article.urlToImage}" width="200px" height="100px" alt="Article image" /></p>
           <h3>Author:</h3> ${article.author}
           <a href="${article.url}"><h3>Link to the article</h3><a>
           <h3>Content:</h3>${article.content}`
           +"</div></div><br>"
           }).join('');  
           console.log(html);
           document.getElementById("text").innerHTML=html;
       });
       }
   
       window.onload = function() {
        if(localStorage.getItem("userTopic") === null){
            localStorage.setItem('userTopic',"Headlines");
        };
        
        document.getElementById("userTopic").value=localStorage.getItem('userTopic');
        var Topic=document.getElementById("userTopic").value;
       getdata(Topic);
      };
   function callGetdata(){
    //    alert("i'm in!");
       var Topic=document.getElementById("userTopic").value;
       console.log("here:"+Topic);
    //    alert("Topic: "+Topic);
       localStorage.setItem('userTopic', document.getElementById('userTopic').value);
       document.getElementById("userTopic").value=localStorage.getItem('userTopic');
       getdata(Topic);
   }

