var skin = {
    "default" : {
        "button" : $("button.default"),
        "class"  : "default"
    },
    "anatomic" : {
        "button" : $("button.anatomic"),
        "class"  : "anatomic"
    },
    "happy" : {
        "button" : $("button.happy"),
        "class"  : "happy"
    }
}

applySkin(skin.default.button, skin.default.class);
applySkin(skin.anatomic.button, skin.anatomic.class);
applySkin(skin.happy.button, skin.happy.class);

function applySkin(button, className) {
    var marionette = $(".marionette");
    button.click(function() {
        marionette.removeClass().addClass("marionette").toggleClass(className);
    });
}

console.log(skin);
