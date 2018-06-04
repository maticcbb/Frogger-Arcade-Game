// Enemies our player must avoid
const allEnemies = [];
window.setInterval(function () {
    allEnemies.push(new Enemy(0,140));
    allEnemies.push(new Enemy(0,60));
    allEnemies.push(new Enemy(0,220)); 
    allEnemies.push(new Enemy(0,300)); 
}, 2000);

class Enemy { 

constructor(x,y) {
     const sprite = 'images/enemy-bug.png';
     this.y = y;
     this.x = x;
     this.sprite = sprite;//enemy image
     this.height = 101; // enemy's height
     this.width = 101; //enemy's width

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
   
    allEnemies.push(this);
};



// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
update(dt) {
    
    this.x = this.x + (Math.random() *(15 - 1 + 1)* dt*25);
    this.y = this.y;


    function collisionCheck() {
        allEnemies.forEach(function (enemy) {
            if (enemy.x < player.x + player.width &&
                enemy.x + enemy.width > player.x &&
                enemy.y < player.y + player.height &&
                enemy.height + enemy.y > player.y) {
                player.x = 202;
                player.y = 505;
                console.log('collision detected!');
            }
        })



    }

    
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

}


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
     constructor (x, y) {

    const sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.sprite = sprite ;
    this.height = 101; //player's height
    this.width = 101; //player's width

}

update(dt)  {

};

render()  {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

handleInput(e)  {
  
// Switch method to handle key inputs and get reactions to them

        switch (e) {
            case 'left':
                if (this.x > 0) // for checking player position to not disapear outside of the field
            {
                this.x = this.x - 100
                console.log(e);
            }
                break;

            case 'up':
                if (this.y > -40) // for checking player position to not disapear outside of the field
            {
                this.y = this.y - 80
                console.log(e);
            }    
                break;

            case 'right':
                if (this.x < 400) // for checking player position to not disapear outside of the field
            {
                this.x = this.x + 100
                console.log(e);
            }
                break;

            case 'down':
                if (this.y < 440) // for checking player position to not disapear outside of the field
            {
                this.y =  this.y + 80
                console.log(e);
            }
                break;
        } 
};

}


const player = new Player(200,440);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
  

    player.handleInput(allowedKeys[e.keyCode]);
});
