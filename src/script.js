var upperLimbLeft = $(".upper-limb-left");
var upperLimbRight = $(".upper-limb-right");
var forearmLeft = $(".upper-limb-left .forearm");
var forearmRight = $(".upper-limb-right .forearm");

var countUpperLeft = 0; countUpperRight = 0; countForearmLeft = 0; countForearmRight = 0;
var velocity = 10;

$(document).keydown(function( event ) {
    if(event.keyCode == 81) {
        countUpperLeft = countUpperLeft + velocity;
    }
    if(event.keyCode == 65) {
        countUpperLeft = countUpperLeft - velocity;
    }
    if(event.keyCode == 87) {
        countForearmLeft = countForearmLeft - velocity;
    }
    if(event.keyCode == 68){
        countUpperRight = countUpperRight - velocity;
    }
    if(event.keyCode == 69){
        countUpperRight = countUpperRight + velocity;
    }
    if(event.keyCode == 82) {
        countForearmRight = countForearmRight - velocity;
    }


    console.log( event.keyCode );

    upperLimbLeft.css("transform", "rotate("+countUpperLeft+"deg)");
    upperLimbRight.css("transform", "rotate("+countUpperRight+"deg)");
    forearmLeft.css("transform", "rotate("+countForearmLeft+"deg)");
    forearmRight.css("transform", "rotate("+countForearmRight+"deg)");
});
