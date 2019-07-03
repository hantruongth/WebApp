$(function() {
    $('#add').click(populate);
    $('#kill').click(kill);
    $('#stomp').click(stomp);
    $('#patrol').click(patrol);
    $('#enrage').click(enrageRaptor);
    $('#cleanup').click(clearDead);

    // Make it a city of N Men...Initially
    var people = $('#people .person').addClass('boy');
});

// Helper function to get which gender is currently selected.
function getGender() {
    return $('input:checked').val();
}

// Add! button event handler; adds 5 people of current gender
function populate() {
    var gender = getGender();
    for (var i = 0; i < 5; i++) {
        $('#people').append($('<div>').addClass('person ' + gender));
    }
}

// Kill! button event handler
// tells raptor to randomly kill 1/5 of selected gender
function kill() {
    var gender = getGender();
    splat(gender);
}

// Get all guys or girls and splat one fifth of them
// Random targets, could over lap splats,
// allowing for more randomness double death or not!
function splat(gender) {
    var peeps = $('#people .' + gender);
    for (var i = 0; i < peeps.length / 5; i++) {
        var randomIndex = Math.floor(Math.random() * peeps.length);
        $(peeps[randomIndex]).removeClass(gender);
        $(peeps[randomIndex]).addClass('splat');   // so future kills won't choose splat victims
    }
}

// Clean up the dead! button event handler
function clearDead() {
    $('#people .splat').remove();
}

// Stomp! button event handler
function stomp() {
    $('#raptor').css('top', function(idx, old) {
        return ((parseInt(old) + 75) % 150) + 'px';
    });
    splat('boy');
    splat('girl');
}

// Enrage! button event handler
function enrageRaptor() {
    // If enraged -- go back to normal, else get ENRAGED
    if ($('#raptor').hasClass('enrage')) {
        $('h1').first().removeClass('enrage');
        $('#raptor')
            .removeClass('enrage')
            .width(function(idx, old) {
                return old - 50;
            });
    } else {
        $('h1').first().addClass('enrage');
        $('#raptor')
            .addClass('enrage')
            .width(function(idx, old) {
                return old + 50
            });
    }
}


// Patrol! event handler code (advanced)
var timer;

function patrol() {
    clearInterval(timer);
    timer = setInterval(patrolRight, 20);
}

function patrolRight() {
    $('#raptor').css('left', function(idx, old) {
        if (parseInt(old) >= 300) {
            clearInterval(timer);
            timer = setInterval(patrolLeft, 20);
        }
        return parseInt(old) + 4 + 'px'
    });
}

function patrolLeft() {
    $('#raptor').css('left', function(idx, old) {
        if (parseInt(old) <= 10) {
            clearInterval(timer);
            $(this).css({
                'top': '5px',
                'left': '10px'
            });
        }
        return parseInt(old) - 4 + 'px';
    });
}