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

