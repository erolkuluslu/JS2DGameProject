// karakter yönetmeli bir oyun

//karakter çeşitleri
//her karakterin kendine ait skilleri olsun
// level sistemi
// yaratıklar(düşmanlar olsun)
//harita olsun 

//console.log("test");

var gameBoard = document.getElementById('game-board');
var context = gameBoard.getContext("2d");
var moveBtn = document.getElementById('move-btn');
var stopBtn = document.getElementById('stop-btn');
var attackBtn = document.getElementById('attack-btn');

make_base();
draw_attackig_warrior();

//console.log(make_base());
function make_base()
{
  base_image = new Image();
  base_image.src = 'character-walk-1.png';
  base_image.onload = function(){
    context.drawImage(base_image, 20, 0, 50, 50);
    
  }

  return base_image;
}
function draw_attackig_warrior()
{
  attackig_warrior = new Image();
  attackig_warrior.src = 'character-attack-1.png';
  attackig_warrior.onload = function(){
    context.drawImage(attackig_warrior, 20, 60, 50, 50);
    
  }

  return attackig_warrior;
}


// Charachter Animations 
const character = make_base();
const character2 = draw_attackig_warrior();

const walkingAnimation = [  'character-walk-1.png',  'character-walk-2.png',  'character-walk-3.png'];

const attackingAnimation = [  'character-attack-1.png',  'character-attack-2.png',  'character-attack-3.png'];

let currentFrame = 0;
let animationInterval;
let currentFrame2 = 0;
let animationInterval2;

function startWalkingAnimation() {
  animationInterval = setInterval(() => {
    character.src = walkingAnimation[currentFrame];
    //gameBoard.removeChild(character);
    //console.log(gameBoard.parentNode);
    context.clearRect(20, 0, character.width, character.height);
    currentFrame = (currentFrame + 1) % walkingAnimation.length;
  }, 300);

}


function startAttackingAnimation() {
  animationInterval2 = setInterval(() => {
    character2.src = attackingAnimation[currentFrame2];
    context.clearRect(20, 20, character2.width, character2.height);
    currentFrame2 = (currentFrame2 + 1) % attackingAnimation.length;
  }, 300);
}

function stopAnimation() {
  clearInterval(animationInterval);
  clearInterval(animationInterval2);
}



moveBtn.addEventListener('click', () => {
    startWalkingAnimation();
    startAttackingAnimation();
})


stopBtn.addEventListener('click', () => {
    stopAnimation();
})
attackBtn.addEventListener('click', () => {
  startAttackingAnimation();
})


/*

// Finite State Machine (FSM)
const character = document.getElementById('character');

const walkingAnimation = [  'character-walk-1.png',  'character-walk-2.png',  'character-walk-3.png',  'character-walk-4.png',  'character-walk-5.png'];

const attackingAnimation = [  'character-attack-1.png',  'character-attack-2.png',  'character-attack-3.png',  'character-attack-4.png'];

const baseAnimation = [  'character-base.png'];

let currentFrame = 0;
let animationInterval;

const FSM = {
  state: 'base',
  transitions: {
    walk: {
      base: 'walking',
      walking: 'walking',
      attacking: 'attacking'
    },
    attack: {
      base: 'attacking',
      walking: 'attacking',
      attacking: 'attacking'
    },
    base: {
      base: 'base',
      walking: 'base',
      attacking: 'base'
    }
  },
  onEnter: {
    base: () => {
      stopAnimation();
      character.src = baseAnimation[0];
    },
    walking: startWalkingAnimation,
    attacking: startAttackingAnimation
  }
};

function startWalkingAnimation() {
  animationInterval = setInterval(() => {
    character.src = walkingAnimation[currentFrame];
    currentFrame = (currentFrame + 1) % walkingAnimation.length;
  }, 100);
}

function startAttackingAnimation() {
  animationInterval = setInterval(() => {
    character.src = attackingAnimation[currentFrame];
    currentFrame = (currentFrame + 1) % attackingAnimation.length;
  }, 100);
}

function stopAnimation() {
  clearInterval(animationInterval);
}

function transition(event) {
  const nextState = FSM.transitions[event][FSM.state];
  if (nextState) {
    FSM.state = nextState;
    FSM.onEnter[nextState]();
  }
}

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') {
    transition('walk');
  } else if (event.key === ' ') {
    transition('attack');
  }
});

document.addEventListener('keyup', event => {
  if (event.key === 'ArrowRight') {
    transition('base');
  }
});


*/
