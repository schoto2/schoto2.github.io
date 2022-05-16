//These are the variable for the snake, resoultion, and food 
let snake;
let apple;
let rez = 20;

////This sets up the canvas page, width, height, the framerate speed, snake, food location, and score
function setup() {
  w = floor(600/rez);
  h = floor(600/rez);
  createCanvas(w*rez, h*rez);
  frameRate(8);
  snake = new Snake();
  apple = get_new_apple();
  score = 0;
}

//This function will spawn the apple in a random location within the grid
function get_new_apple(){
  apple_location = get_random_location(w, h);
  return new Apple(apple_location[0], apple_location[1]);
}

function get_random_location(w, h) {
	return [floor(random(w)), floor(random(h))];
}

// This function will allow users that pressed down a key to control the snake
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }
}
function draw() {
	scale(rez)
	colorMode(RGB)
	background(0);
	if (snake.eat(apple)){
		apple = get_new_apple()
		score += 10
		print(score)
	}
	snake.update();
	snake.show();
	apple.show();
  // The text for the score will be print out in the top right corner instead of the console log
	fill(255);
	textSize(1);
	text('Score: ' + score, w - 6, 1)
  //text('Score:' + score, w - 5, 1) was too close to the top right corner so when player hit 100 you couldn't see it. So I used the code on top 

  // This part of the code will make sure that when the user hits the border of the canvas or hit the snake it will let the user know that the game has ended
	if (snake.collision()){
		textSize(3)
		text('Game Over', 7, 11)
		noLoop()
	}
}
