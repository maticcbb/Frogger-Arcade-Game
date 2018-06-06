// Enemies our player must avoid
const allEnemies = [];



//selects the life class elements and adds them in an array
let lifes = document.querySelectorAll('.life');
let lifesList = Array.from(lifes);
let life = 3;

class Enemy { 

constructor(x,y,speed) {
     const sprite = 'images/enemy-bug.png';
     this.y = y;
     this.x = x;
     this.speed = speed;
     this.sprite = sprite;//enemy image
     this.height = 70; // enemy's height
     this.width = 70; //enemy's width

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
   
    /* allEnemies.push(this); */
};



// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
update(dt) {
    
this.x = this.x + (this.speed * dt);
      if (this.x > 505) {
          this.x = -100;
      }
      if ((min === 2 && sec === 59) || (min === 1 && sec === 59)) {
          this.speed = this.speed + 1;

      }

   /*  this.x = this.x + (Math.random() *(15 - 1 + 1)* dt*25);
    this.y = this.y; */

        allEnemies.forEach(function (enemy) {
            if (enemy.x < player.x + player.width &&
                enemy.x + enemy.width > player.x &&
                enemy.y < player.y + player.height &&
                enemy.height + enemy.y > player.y) {
                player.x = 200;
                player.y = 390;
                life--;
                countLifes();
                console.log('collision detected!');
            }
        })

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
    this.height = 70; //player's height
    this.width = 70; //player's width

}

update(dt)  {

if(this.y <= -10) {

    setTimeout(startBack => { this.y = 390 }, 500);
}

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
                if (this.y > -10) // for checking player position to not disapear outside of the field
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
                if (this.y < 390) // for checking player position to not disapear outside of the field
            {
                this.y =  this.y + 80
                console.log(e);
            }
                break;
        } 
};

}


const player = new Player(200,390);
allEnemies.push(new Enemy(0, 140, 75));
allEnemies.push(new Enemy(0, 60,40));
allEnemies.push(new Enemy(0, 220,105));
allEnemies.push(new Enemy(0, 140, 85));
allEnemies.push(new Enemy(0, 220, 95));
allEnemies.push(new Enemy(0, 60, 68));
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

function countLifes() {
    if (life === 2) {
        lifesList[2].classList.add('hide');
    } else if (life === 1) {
        lifesList[1].classList.add('hide');
    } else if (life === 0) {
        lifesList[0].classList.add('hide');
    }
}


let counter;
let sec = 10;
let min = 3;

function timeCount() {
    let timer = document.querySelector('.time');
    

    counter = setInterval(function () {
        //if the 4 minutes expired, stops the timer and calls stopModal()
        if (min === 0 && sec === 0) {
            console.log('end of time');//just for debug purpose
            clearInterval(counter, 1000);
            
        } else { //else continues counting down
            sec--;
        };
        if (sec < 0) {
            min--;
            sec = 59;
        };
        timer.innerText = min + 'm ' + sec + 's';
    }, 1000);
}

timeCount();

