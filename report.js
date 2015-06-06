
var ign = document.getElementById("ign");
var reason = document.getElementById("reason");
var rank = document.getElementById("rank");
var infractions = "";
var name = document.getElementById("name");
var proof = document.getElementById("proof");
var kicks = document.getElementById("Kicks");
var mutes = document.getElementById("Mutes");
var bans = document.getElementById("Bans");

var kicks2 = "";
var mutes2 = "";
var bans2 = "";

var reportDisplay = document.getElementById("reportDisplay");
var report = document.getElementById("report");

var skin = document.getElementById("skin");
var requesting = document.getElementById("requesting");

var select = document.getElementById("select");
var requestingDisplayD = "";


setInterval(function(){
    if(bans.value == 0 && kicks.value == 0 && mutes.value == 0){
        infractions = " None";
        bans2 = "";
        kicks2 = "";
        mutes2 = "";

    }else{
        infractions = "";
    }
    if(bans.value  == 0){
        bans2 = "";
    }else{
        bans2 = " Bans: " + bans.value;
    }
    if(kicks.value == 0){
        kicks2 = "";
    }else{
        kicks2 = " Kicks: " + kicks.value;
    }
    if(mutes.value == 0){
        mutes2 = "";
    }else{
        mutes2 = " Mutes: " + mutes.value;
    }

    if(ign.value == ""){
        skin.src = "https://minotar.net/body/Steve/100.png";
    }else{
        skin.src = "https://minotar.net/body/" + ign.value + "/100.png";

    }

     if(requesting.checked){

        select.style.display = "block";

        if(select.value == "Ban"){

            requestingDisplayD = "Requesting: Ban";

        }else if(select.value = "Longer Mute"){

            requestingDisplayD = "Requesting: Longer Mute";

        }

    }else{
        select.style.display = "none";
        requestingDisplayD = "";

    }



    report.innerHTML = "[--REPORT--]" + "\n" +
    "IGN: " +
    ign.value + "\n" +
    "Reason: " +
    reason.value +  "\n" +
    "Rank: " +
    rank.value +  "\n" +
    "Infractions: " +
    bans2 + mutes2 + kicks2 +  infractions +  "\n" +
    "Proof: " +
    proof.value + "\n" +
    requestingDisplayD + "\n" +
    "_Made with http://coooper.voic3.net/Report.php _";

    reportDisplay.innerHTML = "[--REPORT--]" + "<br/><br/>" +
    "IGN: " +
    ign.value + "<br/><br/>" +
    "Reason: " +
    reason.value + "<br/><br/>" +
    "Rank: " +
    rank.value + "<br/><br/>" +
    "Infractions:" +
    bans2 + mutes2 + kicks2 +  infractions +"<br/><br/>" +
    "Proof: " +
     proof.value + "<br/><br/>" +
    requestingDisplayD;

}, 500);

function insertSkinAsProof() {

    if (ign.value == "") {
        proof.value = "https://minotar.net/body/Steve/100.png";
    } else {
        proof.value = "https://minotar.net/body/" + ign.value + "/100.png";
    }
}






