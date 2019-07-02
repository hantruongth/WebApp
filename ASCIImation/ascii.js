(function(){
    "use strict";

    var timer = null;
    var animationArea;
    var animationArray = [];
    var start = 0;
    var end = 0;
    var interval = 250;
    var i;
    var animationType;
    var animationsList = ANIMATIONS; // from animations.js provided 

    window.onload = function () {
        var btnPlay = document.getElementById('btnPlay');
        var btnStop = document.getElementById('btnStop');
        var turboCheckbox = document.getElementById('turboCheckbox');
        var animationSize = document.getElementById('animationSize');
        animationArea = document.getElementById("animationArea");
        animationType = document.getElementById('animationType');

        animationType.onchange = function () {
            play();
        };

        btnPlay.onclick = function () {
            play();
        };

        btnStop.onclick = function () {   
            animationArea.innerHTML = "";
            clearInterval(timer);
            timer = null; 
            setBtnState();
            
        };

        turboCheckbox.onchange = function () {
            if (turboCheckbox.checked) {
                interval = 50;
            } else {
                interval = 250;
            }
            restart();
        };
        animationSize.onchange = function () {
            animationArea.style.fontSize = this.options[this.selectedIndex].value + "pt";
            restart();
        };
    };
    function play() {
        var selectedIndex = animationType.options[animationType.selectedIndex].value;
        if (selectedIndex < 0) return;
        animationArray = animationsList[selectedIndex].split("=====\n");
        i = start;
        end = animationArray.length;
        if (timer === null) {
            timer = setInterval(animate, interval); // interval 250
        }
        setBtnState();

    }

    function animate() {
        if (i < end) {
            animationArea.value = animationArray[i];
            i++;
        }
        else {
            i = start;
            animationArea.value = animationArray[i];
        }
    }
    function restart() {
        clearInterval(timer);
        timer = setInterval(animate, interval);
    }

    function setBtnState(){
        if(timer == null){
            btnStop.disabled = true;
            btnPlay.disabled = false;
        }else{
            btnPlay.disabled = true;
            btnStop.disabled = false;
        }
    }
})();