window.onload = function() {
    $("start").onclick = startClick;
    $("end").onmouseover = overEnd;
    $("maze").onmouseleave = noCheat;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
        boundaries[i].onmousleave = overBoundary;
    }
};

function overBoundary() {
    var x = document.getElementsByClassName("boundary");

    for (var i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "red";
        if (x[i].style.backgroundColor == "red") {
            var s = document.getElementById("status").innerHTML = "You Lose!";
        }
    }
}

