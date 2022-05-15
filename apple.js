//Needed to make a new class for the apple in order to maintain the color so it wouldn't interfere with the colorMode function for the snake and apple
class Apple {
	constructor(x, y){
		this.widht = 1;
		this.x = x
		this.y = y
	}
	show(){
		noStroke()
		colorMode(RGB)
		fill(255, 0, 0)
		rect(this.x, this.y, this.widht, this.widht)
	}
}