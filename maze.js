var lose = false ;

window.onload = function(){
  let startgame=document.getElementById("start");
  startgame.addEventListener("mouseover",function(){
    myFunction();
    let maze = document.getElementById("maze");
    maze.addEventListener("mouseleave",function(){
    colour();
    end1();
    });
  })
  
};

function myFunction() {
  var x = document.querySelectorAll("#maze div.boundary");
  var end = document.getElementById("end");
  var start = document.getElementById("start");
  var maze = document.getElementById("maze");

  for (var i = 0; i < x.length; i++) {
    x[i].addEventListener("mouseover", colour);
  }
  start.onclick = function() {

      var x = document.querySelectorAll("#maze div.boundary");
      for (var i = 0; i < x.length; i++) {
    
      x[i].classList.remove("youlose");
    }
    lose= false;
  
  }
  end.addEventListener("mouseover", end1);

  
}


