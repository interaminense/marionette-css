(function($){

    'use strict';

    var divSkin = document.createElement("div");
    divSkin.className = "skins";
    $("body").append(divSkin);

    var head       = $("head")
    var marionette = $(".marionette");
    var skins      = $(".skins");

    // crie um arquivo css com o mesmo
    // nome da skin abaixo dentro da pasta
    // src/css/skins para que a skin seja aplicada

    var skin = [
        "default",
        "anatomic",
        "happy",
        "cute",
        "spider"
    ]

    var link = [];
    var button = [];

    var applySkin = function() {
        $(".btn-skin").click(function(event) {
            $(".btn-skin").removeClass("active");
            $(this).addClass("active");
            marionette.removeClass().addClass("marionette " + event.currentTarget.classList[1]);
        });
    };

    var createElements = function() {

        for (var i = 0; i < skin.length; i++) {

            link[i] = document.createElement("link");
            link[i].rel = "stylesheet";
            link[i].href = "src/css/skins/" + skin[i] + ".css";
            head.append(link[i]);

            button[i] = document.createElement("button");
            button[i].type = "button";
            if(skin[i] == "default")
                button[i].className = "btn-skin active " + skin[i];
            else
                button[i].className = "btn-skin " + skin[i];
            button[i].innerHTML = skin[i];
            skins.append(button[i]);

        }

        applySkin();

    };

    createElements();

})($);
