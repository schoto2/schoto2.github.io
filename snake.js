// This is the function to create the snake, with the location and body lenght 
class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(0,0);
    this.xdir = 1;
    this.ydir = 0;
    this.widht = 1;
    
  }

  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }
 
// This function makes sures when the snake eats a apple that it will shift the new body to the back of the snake
  getHead(){
    return this.body[this.body.length-1].copy()
  }
  
  update() {
    let head = this.getHead();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
  }
//The grow function is for when the snake passes the apple then it will allow it to grow a new body thus pushing that body in the back
  grow() {
    let head = this.getHead();
    this.body.push(head);
  }

  // This function will let the snake know if the player passes the edge of the canvas or touch the snake it will cause it to end the game lines 36- 53
  collisionWall() {
    let x = this.getHead.x;
    let y = this.getHead.y;
    if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
      return true;
    }
    return false;
  }
  collisionSnake() {
    let head = this.getHead();
    for (let i = 0; i < this.body.length - 1; i++) {
      let part = this.body[i];
      if (part.x === head.x && part.y === head.y) {
        return true;
      }
    }
    return false;
  }
  
  collision(){
    return (this.collisionWall() || this.collisionSnake());
  }
   // this function receives the position where the apple is and when the snake eats the apple it will grow 
  eat(apple) {
    let x = this.getHead().x;
    let y = this.getHead().y;
    if (x == apple.x && y == apple.y) {
      this.grow();
      return true;
    }
    return false;
  }

  show() {
    for (let i = 0; i < this.body.length; i++) {
      noStroke();
      colorMode(HSB);
      fill((100 + 20*i)%360, 100, 95)
      rect(this.body[i].x, this.body[i].y, this.widht, this.widht)
      
    }
  }
}