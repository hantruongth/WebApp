
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
function pig() {
    var str = document.getElementById("txtArea").innerHTML;
    var splitStr = str.split(' ');
     var str1="";
    for (i = 0; i < splitStr.length; i++){
        if ('aeiou'.indexOf(splitStr[i].substr(0).toLowerCase()) >= 0) {
            splitStr[i] += "ay";
        } 
        else {
            splitStr[i] = splitStr[i].substr(1).toUpperCase() + 
                    splitStr[i].substr(2, splitStr.length - 1) + 
                    splitStr[i].substr(0).toLowerCase();
        }
    str1+=splitStr[i]+' ';   
    } 
    
   document.getElementById("txtArea").innerHTML=str1; 
}

function malkov(){
    var str = document.getElementById("txtArea").innerHTML;
    var splitStr = str.split(' ');
     var str1="";
    for (i = 0; i < splitStr.length; i++){
        if (splitStr[i].length>=5){
            splitStr[i]="Malkovich";
        }
       str1+=splitStr[i]+' ';  
    }
    document.getElementById("txtArea").innerHTML=str1; 
}

function translateText() {
    var str = document.getElementById("txtArea").textContent.toLowerCase();
    console.log(str);
    var n = pigLatinizeSentence(str);

    document.getElementById("txtArea").textContent = n;

}

function pigLatinizeSentence(word) {

    var str1 = word.split(' ');
    var text = "";
    for (i = 0; i < str1.length; i++) {
        console.log(i);
        console.log(str1[i]);
            text += translate1(str1[i]);
    }

    return text;
}

function translate1(str) {

    if(str.trim() == "" ) return str;

    str=str.toLowerCase();
    var n =str.search(/[aeiuo]/);
    switch (n){
        case 0: str = str+"way"; break;
        case -1: str = str+"ay"; break;
        default :
            //str= str.substr(n)+str.substr(0,n)+"ay";
            str=str.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
            break;
    }
    console.log(str);
    return str + " ";

}