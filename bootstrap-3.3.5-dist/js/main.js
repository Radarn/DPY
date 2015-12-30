/* Extremely bad code, no best practices. Going to fix when I have time */

var mainText = document.getElementsByClassName("text");
var textone = document.getElementsByClassName("textone");
var texttwo = document.getElementsByClassName("texttwo");
var b3 = document.querySelectorAll(".b3");
var c1 = document.querySelectorAll(".c1");
var jsbutt =  document.getElementsByClassName("jsButton");

for (var i = 0; i < mainText.length; i+=1){
    mainText[i].style.display = "none";
}



var jump=function(e)
{
       //prevent the "normal" behaviour which would be a "hard" jump
       e.preventDefault();
       //Get the target
       var target = $(this).attr("href");
       //perform animated scrolling
       $('html,body').animate(
       {
               //get top-position of target-element and set it as scroll target
               scrollTop: $(target).offset().top
       //scrolldelay: 2 seconds
       },1000,function()
       {
               //attach the hash (#jumptarget) to the pageurl
               location.hash = target;
       });
}

$(document).ready(function()
{
       $('a[href*=#]').bind("click", jump);
       return false;
});


/* Blog Page ... Need to sort out so that this code only loads on blog.html */

jsbutt[0].addEventListener("click", showText);
jsbutt[1].addEventListener("click", showTextA2);
jsbutt[2].addEventListener("click", showTextB3);
jsbutt[3].addEventListener("click", showTextC1);

function showText() {
   for (var i = 0; i < textone.length; i+=1){}
   if(textone[0].style.display === "none") {
   $(".textone").fadeIn("slow");
  } else {
   $(".textone").fadeOut("slow");
   }
}

function showTextA2() {
   for (var i = 0; i < texttwo.length; i+=1){}
   if(texttwo[0].style.display === "none") {
   $(".texttwo").fadeIn("slow");
  } else {
   $(".texttwo").fadeOut("slow");
   }
}

function showTextB3() {
  for (var i = 0; i < b3.length; i+=1) {}
   if(b3[0].style.display=== "none") {
   $(".b3").fadeIn("slow");
  } else {
   $(".b3").fadeOut("slow");
   }
   
}

function showTextC1() {
  for (var i = 0; i < c1.length; i+=1) {
}

  if(c1[0].style.display === "none") {
    $(".c1").fadeIn("slow");
  } else {
    $(".c1").fadeOut("slow");
  }
}

var jump=function(e)
{
       //prevent the "normal" behaviour which would be a "hard" jump
       e.preventDefault();
       //Get the target
       var target = $(this).attr("href");
       //perform animated scrolling
       $('html,body').animate(
       {
               //get top-position of target-element and set it as scroll target
               scrollTop: $(target).offset().top
       //scrolldelay: 2 seconds
       },500,function()
       {
               //attach the hash (#jumptarget) to the pageurl
               location.hash = target;
       });

}

$(document).ready(function()
{
       $('a[href*=#]').bind("click", jump);
       return false;
});



   /* $('a[href^="#"]').on('click', function(event) {
        var target = $(this.href);
        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
/*$(document).ready(function () {
       $('ul.nav > li').click(function (e) {
          
           $("body").animate({"scrollTop": window.scrollY+300}, 1000);
        return false;            
       });    
       
$(function() {
 $('a[href*=#]:not([href=#])').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     if (target.length) {
       $('html,body').animate({
         scrollTop: target.offset().top
       }, 1000);
       return false;
     }
   }
 });
});
})      
   });*/







