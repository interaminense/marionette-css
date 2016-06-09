(function($) {

    'use strict';

    var divManual = document.createElement("div");
    divManual.className = "manual";
    $("body").append(divManual);

    var manual = $(".manual");
    var velocity = 20;
    var members = [
        {
            "name" : "upLeft",
            "element" : $(".upper-member-left"),
            "count" : 0,
            "key" : [{ "code" :  81, "event" : "left", "name" : "Q" },{ "code" :  87, "event" : "right", "name" : "W" }],
            "infoManual" : "upper"
        },
        {
            "name" : "upRight",
            "element" : $(".upper-member-right"),
            "count" : 0,
            "key" : [{ "code" :  69, "event" : "left", "name" : "E" },{ "code" :  82, "event" : "right", "name" : "R" }],
            "infoManual" : "upper"
        },
        {
            "name" : "upForearmLeft",
            "element" : $(".upper-member-left .forearm"),
            "count" : 0,
            "key" : [{ "code" : 65, "event" : "left", "name" : "A" },{ "code" : 83, "event" : "right", "name" : "S" }],
            "infoManual" : "upper"
        },
        {
            "name" : "upForearmRight",
            "element" : $(".upper-member-right .forearm"),
            "count" : 0,
            "key" : [{ "code" : 68, "event" : "left", "name" : "D" },{ "code" : 70, "event" : "right", "name" : "F" }],
            "infoManual" : "upper"
        },
        {
            "name" : "lowerLeft",
            "element" : $(".lower-member-left"),
            "count" : 0,
            "key" : [{ "code" : 85, "event" : "left", "name" : "U" },{ "code" : 73, "event" : "right", "name" : "I" }],
            "infoManual" : "lower"
        },
        {
            "name" : "lowerRight",
            "element" : $(".lower-member-right"),
            "count" : 0,
            "key" : [{ "code" : 79, "event" : "left", "name" : "O" },{ "code" : 80, "event" : "right", "name" : "P" }],
            "infoManual" : "lower"
        },
        {
            "name" : "lowerLegLeft",
            "element" : $(".lower-member-left .leg"),
            "count" : 0,
            "key" : [{ "code" : 74, "event" : "left", "name" : "J" },{ "code" : 75, "event" : "right", "name" : "K" }],
            "infoManual" : "lower"
        },
        {
            "name" : "lowerLegRight",
            "element" : $(".lower-member-right .leg"),
            "count" : 0,
            "key" : [{ "code" : 76, "event" : "left", "name" : "L" },{ "code" : 186 , "event" : "right", "name" : "Ç" }],
            "infoManual" : "lower"
        },
        {
            "name" : "trunk",
            "element" : $(".trunk"),
            "count" : 0,
            "key" : [{ "code" : 39, "event" : "left", "name" : "left" },{ "code" : 37, "event" : "right", "name" : "right" }]
        }
    ];

    var animateMembers = function( event ) {

        console.log(event.keyCode)

        for (var i = 0; i < members.length; i++) {

            var member = members[i];

            for (var j = 0; j < member.key.length; j++) {

                if(event.keyCode == member.key[j].code){

                    if(member.key[j].event == "left"){
                        member.count = member.count + velocity;
                    }else{
                        member.count = member.count - velocity;
                    }
                    member.element.css("transform", "rotate(" + member.count + "deg)");

                    //add class clicked when keyDown
                    if(member.infoManual){
                        var keyBtn = $(".btn-key." + member.key[j].name);
                        keyBtn.addClass("clicked");
                    }

                }

            }
        }

    }

    var generateManual = function() {

        var infoUp = document.createElement("div");
        infoUp.className = "info-manual upper";
        manual.append(infoUp);

        var infoLower = document.createElement("div");
        infoLower.className = "info-manual lower";
        manual.append(infoLower);

        var infoUp = $(".info-manual.upper");
        var infoLower = $(".info-manual.lower");

        for (var i = 0; i < members.length; i++) {

            var member = members[i];

            for (var j = 0; j < member.key.length; j++) {

                if(member.infoManual){

                    var keyBtn = document.createElement("div");
                    keyBtn.className = "btn-key " + member.key[j].name;
                    keyBtn.innerHTML = member.key[j].name;

                    if(member.infoManual == "upper"){
                        infoUp.append(keyBtn);
                    }else{
                        infoLower.append(keyBtn);
                    }

                }

            }

        }

    }

    var removeAllClass = function() {

        var keyBtn = $(".btn-key");

        // console.log(keyBtn);

        for (var i = 0; i < keyBtn.length; i++) {
            keyBtn[i].classList.remove("clicked");
        }


    }

    $(document).keydown(function( event ) {
        animateMembers( event );
    });

    $(document).keyup(function() {
        removeAllClass();
    });

    generateManual();

})($);
