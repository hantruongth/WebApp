
(function () {
    "use strict";

    var timer = null;
    var animationArea;
    var animationArray = [];
    var start = 0;
    var end = 0;
    var interval = 250;
    var i;
    var animationType;
    var animationsList = ANIMATIONS;

    window.onload = function () {
        var btnPlay = document.getElementById('btnPlay');
        var btnStop = document.getElementById('btnStop');
        var turboCheckbox = document.getElementById('turboCheckbox');
        var animationSize = document.getElementById('animationSize');
        animationArea = document.getElementById("animationArea");
        animationType = document.getElementById('animationType');

        btnStop.display = 'none';

        animationType.onchange = function () {
            play();
        };


        btnPlay.onclick = function () {
            play();
        };

        btnStop.onclick = function () {   
            animationArea.innerHTML = "";
            // btnPlay.display = 'block';
            // btnStop.display = 'none';
            clearInterval(timer);
            timer = null; 
            setBtnState();
            
        };

        turboCheckbox.onchange = function () {
            if (turboCheckbox.checked) {
                interval = 50;
            } else {
                interval = interval * 5;
            }
            regenerate();
        };


        animationSize.onchange = function () {
            animationArea.style.fontSize = this.options[this.selectedIndex].value + "pt";
            regenerate();
        };
    };

    function regenerate() {
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

    function play() {
        var selectedIndex = animationType.options[animationType.selectedIndex].value;
        if (selectedIndex < 0) return;
        animationArray = animationsList[selectedIndex].split("=====\n");
        i = start;
        end = animationArray.length;
        if (timer === null) {
            timer = setInterval(animate, interval);
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

})();
