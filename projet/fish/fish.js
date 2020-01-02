
var canvas = document.getElementById('aquarium');
var ctx = canvas.getContext('2d');

// Contains instances of class Fish
var fishes = [];
// var fishColor = ['red', 'blue', 'white', 'black';]

class Fish {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 10;
    // this.color // todo: give a random color to the fish from array fishColor

    // Push each new fish in the fishes array above.
    fishes.push(this);
  }
}


// ctx.fillStyle = 'rgb(200, 0, 0)';
// ctx.fillRect(10, 10, 50, 50);

// ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
// ctx.fillRect(30, 30, 50, 50);

function newFish(event) {
  let fish = new Fish(event.offsetX, event.offsetY)
  ctx.fillStyle = 'rgb(20, 50, 80)';
  ctx.fillRect(fish.x, fish.y, fish.width, fish.height);
  console.log(event.offsetX); 
}

document.getElementById('aquarium').addEventListener('click', newFish)