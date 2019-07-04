$(document).ready(function () {
    var state = true;
    $("#start").click(function () {
        status = 1;
        var flag;
        if(!state) {
            console.log("Click 'S' to begin");
            $(".boundary").removeClass('youlose');
            $("#status").text("Click the 'S' to begin");
            state = true;
        }
        $(".boundary").mouseenter(function () {
           if(!flag){
               lose();
           }

        });
        $("#maze").mouseleave(function () {
            if(!flag){
                lose();
            }
        });
        $("#end").mouseenter(function () {
            if(status==1){
                $("#status").text("YOU WIN");
                flag = 1;
            }
            else{
               lose();
            }
        });
    })
    function lose() {
        $(".boundary").addClass('youlose');
        $("#status").text("YOU LOSE!!");
        status = 0;
        state = false;
    }
})