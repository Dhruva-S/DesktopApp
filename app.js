const express=require("express");//require express module
const path=require('path'); 
const { ServerResponse } = require("http");
const https=require("https");
const app=express();//initializes a new express app
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); 


//Listening on the default port for a hosting server and on port 3000 for the localhost 
app.listen(process.env.PORT||3000,function(req,res){
    console.log("server has started om port 3000");
});



app.use(express.static(__dirname + '/public'));
var wd = require("word-definition");
// app.get("/",function(req,res){

//     res.sendFile(__dirname+"/index.html");
// });


app.get("/",function(req,res){
    // const query=req.body.cityName;
    const query="Mangalore";
   const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&Appid=709116cfdf42b242a173d864e3de0d7f&units=metric";
   https.get(url,function(response){
   console.log(response.statusCode);
   
   response.on("data",function(data){
       const weatherData=JSON.parse(data);
       const temp=weatherData.main.temp;
       const weatherDescription=weatherData.weather[0].description;
       const icon=weatherData.weather[0].icon;
       
       const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png";
       console.log(weatherDescription);
       
    //    res.write("<p>The weather is : "+ weatherDescription+" </p>");
    //    res.write("<h1> The temperature is:"+temp+" degrees celsius</h1>");
    //    res.write("<img src="+imageURL+">");
    //    res.send();

       res.render('landing', { 
        temp: temp,
        weatherDescription: weatherDescription,
        imageURL :imageURL
        });
   });
   
   });
   });
// app.get("/",function(req,res){
//     // res.sendFile(__dirname+"/html/myeditor.html");
//     res.sendFile(path.join(__dirname,'','index.html'));
// });

app.get("/html/myeditor.html",function(req,res){
    // res.sendFile(__dirname+"/html/myeditor.html");
    res.sendFile(path.join(__dirname,'html','myeditor.html'));
});

app.get("/html/covid.html",function(req,res){
    // res.sendFile(__dirname+"/html/myeditor.html");
    res.sendFile(path.join(__dirname,'html','covid.html'));
});


app.get("/ToDoList/index.html",function(req,res){
    // res.sendFile(__dirname+"/html/myeditor.html");
    res.sendFile(path.join(__dirname,'ToDoList','index.html'));
});


app.get("/html/news.html",function(req,res){
    // res.sendFile(__dirname+"/html/myeditor.html");
    res.sendFile(path.join(__dirname,'html','news.html'));
});
app.get("/images/list.jpg",function(req,res){
    // res.sendFile(__dirname+"/html/myeditor.html");
    res.sendFile(path.join(__dirname,'images','list.jpg'));
});

app.get("/images/news.jpg",function(req,res){
    // res.sendFile(__dirname+"/html/myeditor.html");
    res.sendFile(path.join(__dirname,'images','news.jpg'));
});

app.get("/images/EasyText.png",function(req,res){
    // res.sendFile(__dirname+"/html/myeditor.html");
    res.sendFile(path.join(__dirname,'images','EasyText.png'));
});

app.post("/",function(req,res){
    wd.getDef(req.body.word, "en", null, function(word) {
         
        //  console.log(typeof(ans));
        console.log(word.definition);
    //     res.write("<p>The definition is "+ ans+" </p>");
    //    res.send();
    var name=word.word;
    var category=word.category;
    var definition=word.definition;
   
            res.render('searchResult', { 
                name: name,
                category: category,
                definition :definition
                });
    });
   });
   