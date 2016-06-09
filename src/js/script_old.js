(function($) {

    'use strict';

    console.log(members);

    var upMemberLeft     = $(".upper-member-left");
    var upMemberRight    = $(".upper-member-right");
    var upForearmLeft    = $(".upper-member-left .forearm");
    var upForearmRight   = $(".upper-member-right .forearm");
    var lowerMemberLeft  = $(".lower-member-left");
    var lowerMemberRight = $(".lower-member-right");
    var lowerLegLeft     = $(".lower-member-left .leg");
    var lowerLegRight    = $(".lower-member-right .leg");
    var trunk            = $(".trunk");
    var manual           = $(".manual");

    var velocity = 10;

    var count = {
        "upMemberLeft"     : 0,
        "upMemberRight"    : 0,
        "upForearmLeft"    : 0,
        "upForearmRight"   : 0,
        "lowerMemberLeft"  : 0,
        "lowerMemberRight" : 0,
        "lowerLegLeft"     : 0,
        "lowerLegRight"    : 0,
        "trunk"            : 0,
    }

    var key = {
        "Q" : 81, //up upMemberLeft
        "A" : 65, //down upMemberLeft
        "W" : 87, //up upForearmLeft
        "S" : 83, //down upForearmLeft
        "E" : 69, //up upMemberRight
        "D" : 68, //down upMemberRight
        "R" : 82, //up upForearmRight
        "F" : 70, //down upForearmRight
        "Y" : 89, //up lowerMemberLeft
        "H" : 72, //down lowerMemberLeft
        "U" : 85, //up lowerLegLeft
        "J" : 74, //down lowerLegLeft
        "I" : 73, //up lowerMemberRight
        "K" : 75, //down lowerMemberRight
        "O" : 79, //up lowerLegRight
        "L" : 76, //down lowerLegRight
        "Z" : 90, //move trunk to left
        "X" : 88 //move trunk to right
    }

    $(document).keydown(function( event ) {

        switch (event.keyCode) {
            case key.Q:
            count.upMemberLeft = rotateMember(upMemberLeft, event, "up", count.upMemberLeft);
            break;
            case key.A:
            count.upMemberLeft = rotateMember(upMemberLeft, event, "down", count.upMemberLeft);
            break;
            case key.W:
            count.upForearmLeft = rotateMember(upForearmLeft, event, "up", count.upForearmLeft);
            break;
            case key.S:
            count.upForearmLeft = rotateMember(upForearmLeft, event, "down", count.upForearmLeft);
            break;
            case key.E:
            count.upMemberRight = rotateMember(upMemberRight, event, "up", count.upMemberRight);
            break;
            case key.D:
            count.upMemberRight = rotateMember(upMemberRight, event, "down", count.upMemberRight);
            break;
            case key.R:
            count.upForearmRight = rotateMember(upForearmRight, event, "up", count.upForearmRight);
            break;
            case key.F:
            count.upForearmRight = rotateMember(upForearmRight, event, "down", count.upForearmRight);
            break;
            case key.Y:
            count.lowerMemberLeft = rotateMember(lowerMemberLeft, event, "up", count.lowerMemberLeft);
            break;
            case key.H:
            count.lowerMemberLeft = rotateMember(lowerMemberLeft, event, "down", count.lowerMemberLeft);
            break;
            case key.U:
            count.lowerLegLeft = rotateMember(lowerLegLeft, event, "up", count.lowerLegLeft);
            break;
            case key.J:
            count.lowerLegLeft = rotateMember(lowerLegLeft, event, "down", count.lowerLegLeft);
            break;
            case key.I:
            count.lowerMemberRight = rotateMember(lowerMemberRight, event, "up", count.lowerMemberRight);
            break;
            case key.K:
            count.lowerMemberRight = rotateMember(lowerMemberRight, event, "down", count.lowerMemberRight);
            break;
            case key.O:
            count.lowerLegRight = rotateMember(lowerLegRight, event, "up", count.lowerLegRight);
            break;
            case key.L:
            count.lowerLegRight = rotateMember(lowerLegRight, event, "down", count.lowerLegRight);
            break;
            case key.Z:
            count.trunk = rotateMember(trunk, event, "down", count.trunk);
            break;
            case key.X:
            count.trunk = rotateMember(trunk, event, "up", count.trunk);
            break;
        }

        console.log(event);

    });

    function rotateMember(element, key, direction, count) {

        if(direction == "up"){
            count = count + velocity;
        }else{
            count = count - velocity;
        }
        element.css("transform", "rotate("+count+"deg)");
        manual.append("<div class='press'>press "+key.key+"</div>");
        return count;
    }

})($);
