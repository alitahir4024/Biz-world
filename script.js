
var slide_2 = document.querySelector(".p1").style

slide_2.transform = "translateX(100%)"

function slider() {
    slide_2.transform = "translateX(0%)"
    slide_2.transition="all 0.3s"
}

function slide() {
    slide_2.transform = "translateX(100%)"
    slide_2.transition = "all 0.01s"
}

window.onscroll = function()
{
scrollfunction()
}
function scrollfunction()
{
    if (document.body.scrollTop < 50 && document.documentElement.scrollTop > 50) {

      var nav=  document.getElementById("nav1").style;
        nav.backgroundColor = "rgba(0,0,0,.5)";
        nav.height="15vh";
        nav.transitionDuration="1s";

    }
    else {
       var nav1= document.getElementById("nav1").style;
       nav1.backgroundColor = "transparent";
       nav1.height="18vh"
    }
}


var sub_slider=document.querySelector(".sub-slider-1").style;

var parent=document.querySelector(".p6").style;

parent.transitionDuration="2s"

sub_slider.backgroundImage ="linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))"

var sub_slider_1 = document.querySelector(".sub-slider-2").style;

sub_slider_1.backgroundImage ="linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))"

function sub_1(){
    sub_slider.transition = "all 0.05s"

    if (x == 1) {
        parent.left = "-75%"
        x = 0
        sub_slider_1.backgroundImage = "none"
    }

    else if (x == 0) {
        parent.left = "-150%"
        x = 1
        sub_slider.backgroundImage ="none"
    }
}

var x = 1

function sub() {

    if(x==1){
    parent.left = "-75%"
    x=0
    }

    else if(x==0){
     parent.left = "0%"
    x=1
    }

    sub_slider_1.transition = "all 0.05s"
}

var msg = document.querySelector(".message-div").style;

var l=1

function send_msg(){
    

    if(l==1){
        msg.visibility= "hidden"
        msg.transition = "all 0.5s"
        l=0
    }

    else if(l==0){
        msg.visibility= "visible"
        msg.transition = "all 0.5s"
        l = 1
    }

}