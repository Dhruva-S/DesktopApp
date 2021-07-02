function getdata(topic){
    document.getElementById("topicDisplay").innerHTML=localStorage.getItem('userTopic');
    console.log(topic);
    // var url = 'https://newsapi.org/v2/everything?' +
    //          'q='+topic+'&' +
    //          'from=2021-06-22&' +
    //          'sortBy=popularity&' +
    //          'apiKey=0917198423514d8c82a41272ff93c662';
   var url='https://gnews.io/api/v4/search?q='+topic+'&token=0ecab469d6e94c2fcec80c2ed936f9db&lang=en';
    // var url="https://newsapi.org/v2/top-headlines?country=us&apiKey=0917198423514d8c82a41272ff93c662";      //Top Headlines from india
   var req = new Request(url);
   
   fetch(req)
       .then(function(response) {
            // console.log(response.json());
           return response.json();
       })
    //    .then(data=> {
    //        console.log(data);  
    //        const html=data.articles.map(article=>{
    //        return  `
    //        <div>
    //        <div class="news" >
    //        <p><img src="${article.urlToImage}" width="200px" height="100px" alt="Article image" /></p>
    //        <h3>Author:</h3> ${article.author}
    //        <a href="${article.url}"><h3>Link to the article</h3><a>
    //        <h3>Content:</h3>${article.content}`
    //        +"</div></div><br>"
    //        }).join('');  
    //        console.log(html);
    //        document.getElementById("text").innerHTML=html;
    //    });

       .then(data=> {
        console.log(data);  
        const html=data.articles.map(articles=>{
        return  `
        <div>
        <div class="news" >
        <h3>${articles.title}</h3>
        <p><img src="${articles.image}" width="400px" height="200px" alt="Article image" /></p>
        <h4 class="text text-muted">${articles.description}</h4>
        <hr>
        <h3>Content</h3><h5 class="text text-muted">${articles.content}</h5>
        <a href="${articles.url}"><h3 >Open article</h3><a></a>`
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

