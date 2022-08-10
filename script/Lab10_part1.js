function changeColor(){
    var fontColors = document.getElementsByName("color");
    for(var i = 0; i  < fontColors.length; i++){
        if(fontColors [i].checked){
            document.getElementById("text").style.color=fontColors[i].value;
        }
    }
}

var fontColorArray = ["gray","slategray","darkblue","teal","maroon","black"];
var bgColorArray = ["azure","linen","snow","powderblue","ivory","lightpink","lightyellow"];

var curFontColor=1;
var curBgColor=1;

function changeFontColor(){
}

function changeBgColor(){
}

function changeBg(){   
    var backgroundc = document.getElementById("colorsel");
    document.getElementById("td_text").style.backgroundColor = backgroundc.options[backgroundc.selectedIndex].text;
}
