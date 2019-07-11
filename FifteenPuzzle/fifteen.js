'use strict';
$(document).ready(function() {
    var zi = 1;
    var piece_size = 100;
    var emptySq = {
        x: 300,
        y: 300
    };

    var init = (function() {
        var divs = $("#puzzlearea div");
          
        // initialize each piece
        for (var i=0; i < divs.length; i++) {
            var div = divs[i];
            
            // calculate x and y for this piece
            var x = ((i % 4) * 100) ;
            var y = (Math.floor(i / 4) * 100) ;

            // set basic style and background
            div.className = "puzzlepiece";
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            div.style.backgroundImage = 'url("images/background.jpg")';
            div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
            
            // store x and y for later
            div.x = x;
            div.y = y;

        }

    })();

    var shuffle = function(array) {
        var N = array.length,
            temp, R;

        while (0 !== N) {
            R = Math.floor(Math.random() * N);
            N -= 1;
            temp = array[N];
            array[N] = array[R];
            array[R] = temp;
        }

        return array;
    };

    var shufflePiece = function() {
        var positions = [];
        $('#puzzlearea div').each(function (idx, div) {
            positions.push(div);
        });

        shuffle(positions);
        var divs  = $("#puzzlearea div");

        var html = "";
          
        // initialize each piece
        for (var i=0; i < divs.length; i++) {
            var div = divs[i];
            
            // calculate x and y for this piece
            var x = positions[i].x;
            var y = positions[i].y;
            var pos = div.style.backgroundPosition;

            // set basic style and background
            html += "<div class='puzzlepiece' style=\"left: "+x+"px; top:"+y+"px; background-image:url('images/background.jpg'); background-position:"+
            pos + "\">" + (i+1) +"</div>";
        }
        
        $("#puzzlearea div").remove();
        setTimeout(function() {
            $("#puzzlearea").append(html);

            var divs  = $("#puzzlearea div");
                  
            // initialize x and y value each piece
            for (var i=0; i < divs.length; i++) {
                var div = divs[i];
                div.x = positions[i].x;
                div.y = positions[i].y;
            }
        }, 10);
    };

    var movable = function(oldPos, newPos) {
        var isMovable = false;

        if (oldPos.x == newPos.x && newPos.y == (oldPos.y - piece_size)) {
        	isMovable = true;
        }
        if (oldPos.x == newPos.x && newPos.y == (oldPos.y + piece_size)) {
        	isMovable = true;
        }
        if ((oldPos.x - piece_size) == newPos.x && newPos.y == oldPos.y) {
        	isMovable = true;
        }
        
        if ((oldPos.x + piece_size) == newPos.x && newPos.y == oldPos.y) {
        	isMovable = true;
        }

        return isMovable;
    };

    var move = function(clickedSq) {
        var newXPos = clickedSq.x;
        var newYPos = clickedSq.y;

        if (movable(emptySq, clickedSq)) {
            $(clickedSq).css('z-index', zi++);
            $(clickedSq).animate({ left: emptySq.x, top: emptySq.y }, 200, function() {

                clickedSq.x = emptySq.x;
                clickedSq.y = emptySq.y;

                emptySq.x = newXPos;
                emptySq.y = newYPos;
            });
        }
    };

    var mouseOver = function(hoveredSq) {
        if (movable(emptySq, hoveredSq)) {
            $(hoveredSq).addClass('movablepiece');
        }
    };

    var mouseLeave = function(hoveredSq) {
        $(hoveredSq).removeClass('movablepiece');
    };

    $('#shufflebutton').on('click', shufflePiece);

    $("#puzzlearea").on('click', 'div', function() {
        move(this);
    });

    $("#puzzlearea").on('mouseover', 'div', function() {
        mouseOver(this);
    });

    $("#puzzlearea").on('mouseleave', 'div', function() {
        mouseLeave(this);
    });

    // initialize
    var start = init;
    
});