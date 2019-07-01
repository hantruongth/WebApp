
function showAlert(){
    alert('Hello World');
}
function changeSize(unit){
    var element = document.getElementById('txtArea');
    //element.style.fontSize = '24px';
    var currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
    var intSize = parseInt(currentSize.replace('px',''));
    element.style.fontSize = (intSize + unit) + 'px';
}
var isTimerActive = false;
var timerId;
function handleTimerClick(unit){
    if(isTimerActive == false){
        timerId = setInterval(changeSize, 500, unit);
        isTimerActive = true;
    }else{
        clearInterval(timerId);
        isTimerActive = false;
    }
}

function changeStyle(){
    var chkbox = document.getElementById('blingCheckbox');
    //var element = document.getElementById('txtArea');
    
    if(chkbox.checked){
        // element.style.fontWeight = 'Bold';
        // element.style.color = 'green';
        // element.style.textDecoration = 'underline';
        document.body.style.backgroundImage = "url('images/hundred-dollar-bill.jpg')";
    }else{
        // element.style.fontWeight = 'Normal';
        // element.style.textDecoration='none';
        // element.style.color = 'black';
        document.body.style.backgroundImage = "none";

    }


}