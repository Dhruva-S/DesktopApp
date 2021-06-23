//Getting jquery for a javascript file
// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);

// ta = document.querySelector("#textarea");
ta=document.getElementById("textarea");
count = document.querySelector("#counter");




ta.addEventListener("input", function (e) {
  count.innerHTML = this.value.length;
});

//adding event listener for background colors
document.querySelector(".btn-primary").addEventListener("click",function(e){
// ta.className = "bg bg-primary";
// $("#textarea").toggleClass("bg bg-primary");
document.getElementById("textarea").classList.toggle("bg-bg-primary");
});

document.querySelector(".btn-success").addEventListener("click",function(e){
// $("#textarea").toggleClass("bg bg-success");
document.getElementById("textarea").classList.toggle("bg-bg-success");
});

document.querySelector(".btn-danger").addEventListener("click",function(e){
// ta.className = "bg bg-danger";
// $("#textarea").toggleClass("bg bg-danger");
document.getElementById("textarea").classList.toggle("bg-bg-danger");
});

document.querySelector(".btn-warning").addEventListener("click",function(e){
// ta.className = "bg bg-warning";
document.getElementById("textarea").classList.toggle("bg-bg-warning");
});

document.querySelector(".dark").addEventListener("click",function(e){
// ta.className = "bg-dark text-white";
document.getElementById("textarea").classList.toggle("bg-bg-dark");
});

// //BOLD PROPERTY
// $(".bold").click(function() { //bold being the element initiating the trigger
//     $("#textarea").toggleClass("bold");  //textarea being the element to where applied to it.
// });

document.querySelector(".bold").addEventListener("click",function(e){
    document.getElementById("textarea").classList.toggle("bold");
});
//ITALICS
// $(".italic").click(function() { 
//     $("#textarea").toggleClass("italics");  
// });

document.querySelector(".italic").addEventListener("click",function(e){
    document.getElementById("textarea").classList.toggle("italics");
});
//LEFT ALIGN 
// $(".left-align").click(function() { 
//     ta.style.textAlign="left";
// });

document.querySelector(".left-align").addEventListener("click",function(e){
    ta.style.textAlign="left";
});
//RIGHT ALIGN
$(".right-align").click(function() { 
    ta.style.textAlign="right";
});

document.querySelector(".right-align").addEventListener("click",function(e){
    ta.style.textAlign="right";
});
//CENTER ALIGN
// $(".center-align").click(function() { 
//    ta.style.textAlign="center";
// });
document.querySelector(".center-align").addEventListener("click",function(e){
    ta.style.textAlign="center";
});


// $(".underline").click(function() { 
// $("#textarea").toggleClass("underline");  
// });
document.querySelector(".underline").addEventListener("click",function(e){
    document.getElementById("textarea").classList.toggle("underline");
});


// $(".caps").click(function() { 
// $("#textarea").toggleClass("caps");
// });

document.querySelector(".caps").addEventListener("click",function(e){
    document.getElementById("textarea").classList.toggle("caps");
});


// $(".clear").click(function() { 
// ta.value="";
// count.innerHTML = this.value.length;
// });

document.querySelector(".clear").addEventListener("click",function(e){
    ta.value="";
count.innerHTML = this.value.length;
});
//Text size
// document.querySelector(".small-Text").addEventListener("click",function(e){
//  ta.classList.add("sm-txt");
// });

// document.querySelector(".medium-Text").addEventListener("click",function(e){
//  ta.classList.add("md-txt");
// });

// document.querySelector(".large-Text").addEventListener("click",function(e){
//  ta.classList.add("lg-txt");
// });