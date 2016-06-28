

$(document).ready(function() {

//Default grid size and square attribute
	grid(25);

	black();

//Button options

	$('#black').click(function(){
       black();
    });

	$('#red').click(function() {
		red();
	});

	$('#green').click(function() {
		green();
	});

	$('#blue').click(function() {
		blue();
	});

    $('#random').click(function() {
    	random();
    });

    $('#erase').click(function() {
    	erase();
    });

    $('#reset').click(function() {
    	resetGrid();
    });

    
});

//Generates grid size

function grid(input) {

var cellSize = $(".main").width() / input - 2;
	for(var x = 0; x < input; x++) {
        for(var y = 0; y < input; y++) {
            $(".main").append("<div class='unit'></div>");
        }
    }

    $(".unit").css("width", cellSize);
    $(".unit").css("height", cellSize);

}

//Changes background unit color

function black() {
		$(".unit").hover(function() {
			$(this).css("background-color", "black")
			})
}

function red() {
	$(".unit").hover(function() {
		$(this).css("background-color", "#980000")
	})
}

function green() {
	$(".unit").hover(function() {
		$(this).css("background-color", "#006633")
	})
}

function blue() {
	$(".unit").hover(function() {
		$(this).css("background-color", "#003366")
	})
}


function random() {	
	$(".unit").hover(function() {
		$(this).css("background-color", randomColor());
		})
}

function erase () {
	$(".unit").hover(function() {
		$(this).css("background-color", "white")
	})
}


//Clears and resets grid

function clear() {
    $(".unit").remove();
}

function resetGrid() {
    var input = prompt("How many sides per square would you like. Please pick a number between 1 and 80.");
    if (input > 0 && input <= 80) {
    	clear();
        grid(input);
        black();
    } else {
        resetGrid()
    }
}



//Generates random colors

var safeColors = ['00','33','66','99','cc','ff'];
				
function rand () {
	return Math.floor(Math.random()* safeColors.length);
}

function randomColor() {
	var r = safeColors[rand()];
	var g = safeColors[rand()];
	var b = safeColors[rand()];
	   return "#"+r+g+b;
}
