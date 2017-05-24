var tecla = {
	LEFT: 37,
	UP: 38,
	RIGHT:39,
	DOWN: 40
}

function myFunction(event){
   var x = event.keyCode;
   if (x==tecla.UP){
      console.log("arriba");
   } else if (x==tecla.LEFT){
      console.log("izquierda");
   } else if (x==tecla.RIGHT){
      console.log("derecha");
   } else if (x==tecla.DOWN){
      console.log("abajo");
   }
}
/*
document.addEventListener("keydown",myFunction);

function myFunction(event) {
    var x = event.keyCode;
    if (x == tecla.UP) {  // 27 is the ESC key
        alert ("You pressed the Escape key!");
    }
}*/

//var thing = document.getElementById("cosa");
document.addEventListener("keydown",myFunction)