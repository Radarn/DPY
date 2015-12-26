var mainText = document.getElementsByClassName("text");
var textone = document.getElementsByClassName("textone");
var texttwo = document.getElementsByClassName("texttwo");
var b3 = document.querySelectorAll(".b3");
var jsbutt =  document.getElementsByClassName("jsButton");

for (var i = 0; i < mainText.length; i+=1){
    mainText[i].style.display = "none";
}

for (var i = 0; i < b3.length; i+=1) {
  b3[i].style.display="none";
}



jsbutt[0].addEventListener("click", showText);
jsbutt[1].addEventListener("click", showTextA2);
jsbutt[2].addEventListener("click", showTextB3);

function showText() {
   for (var i = 0; i < textone.length; i+=1){
   if(textone[i].style.display==="none") {
   textone[i].style.display = "";
  } else {
   textone[i].style.display = "none";
   }
   
    }

}

function showTextA2() {
   for (var i = 0; i < texttwo.length; i+=1){
   if(texttwo[i].style.display==="none") {
   texttwo[i].style.display = "";
  } else {
   texttwo[i].style.display = "none";
   }
   
    }

}

function showTextB3() {
   if(b3[0].style.display==="none") {
   $(".b3").fadeIn("slow");
  } else {
   $(".b3").fadeOut("slow");
   }
   
}

$(document).ready(function () {
       $('ul.nav > li').click(function (e) {
          
           $('ul.nav > li').removeClass('active');
           $(this).addClass('active');                
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
   });







