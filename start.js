
//déclaration de l'objet personnage (joueur et ennemis)

var player = document.getElementById("perso");
var mob = document.getElementsByClassName("mob");
mob = mob[0];
//position du joueur

    document.addEventListener("keydown",function(evenement) {
        startGame(evenement);
    });
function startGame(event) {
 
    //déplacements joueur
        if (event.keyCode == 39) {
            moveRight(player);
        }
        if (event.keyCode == 37) {
            moveLeft(player);
        }
        if (event.keyCode == 38) {
            moveUp(player);
        }
        if (event.keyCode == 40)  {
            moveDown(player);
        }
        //bombe touche espace
        if (event.keyCode == 32) {
            dropBomb();
        }
    
}
   //déplacements mob
        
   setInterval("mobMove()",1000);