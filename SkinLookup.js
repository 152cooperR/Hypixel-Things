setInterval(function(){

    var name = document.getElementById("name");
    var skin = document.getElementById("skin");
    var label = document.getElementById("label");


    if(name.value == ""){
        label.innerText = "Steves`s Skin";
        skin.src = "https://minotar.net/body/Steve/100.png";

    }else{
        label.innerText = name.value + "`s Skin";

        skin.src = "https://minotar.net/body/" + name.value + "/100.png";

    }

}, 250);