/** @type {HTMLCanvasElement} */

/*document.addEventListener('keydown', (e) => {

    switch(e.code) {

        case 'ArrowLeft':
            player.x -= newGame.playerSpeed;
            break

        case 'ArrowRight':
            player.x += newGame.playerSpeed;
            break

        case 'ArrowUp':
            player.y -= newGame.playerSpeed;
            break

        case 'ArrowDown':
            player.y += newGame.playerSpeed;
            break

        /* default :
            player.x = player.x ;
            player.y = player.y ; */

        
        
   /*  }
}) */



let keysPressed = {};             //Object that will store the events generated bye the keydown

//Event Listener used to detect the keys pressed
//Used with conditional and objects to detect to keys pressed at the same time
//Enabling the player to move on a diagonal

document.addEventListener('keydown', (e) => {
    keysPressed[e.key] = true;
    

    if ((keysPressed['ArrowUp'] && e.key == 'ArrowLeft') || (keysPressed['ArrowLeft'] && e.key == 'ArrowUp')) {
        player.x -= newGame.playerSpeed;
        player.y -= newGame.playerSpeed;
    }else if ((keysPressed['ArrowUp'] && e.key == 'ArrowRight') || (keysPressed['ArrowRight'] && e.key == 'ArrowUp')) {
        player.x += newGame.playerSpeed;
        player.y -= newGame.playerSpeed;
    }else if ((keysPressed['ArrowDown'] && e.key == 'ArrowLeft') || (keysPressed['ArrowLeft'] && e.key == 'ArrowDown')){
        player.x -= newGame.playerSpeed;
        player.y += newGame.playerSpeed;
    }else if ((keysPressed['ArrowDown'] && e.key == 'ArrowRight') || (keysPressed['ArrowRight'] && e.key == 'ArrowDown')){
        player.x += newGame.playerSpeed;
        player.y += newGame.playerSpeed;
    }else if (e.key == 'ArrowUp'){
        player.y -= newGame.playerSpeed;
    }else if(e.key == 'ArrowDown'){
        player.y += newGame.playerSpeed;
    }else if(e.key == 'ArrowLeft'){
        player.x -= newGame.playerSpeed;
    }else if(e.key == 'ArrowRight'){
        player.x += newGame.playerSpeed;
    }
}) 


document.addEventListener('keyup', (e) => {

    delete keysPressed[e.key];
}) 