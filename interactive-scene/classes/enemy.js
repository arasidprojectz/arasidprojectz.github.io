class Enemy {
  constructor(tempX, tempY, tempWidth, tempHeight) {
    this.x = tempX;
    this.y = tempY;
    this.width = tempWidth;
    this.height = tempHeight;
  }
  display() {
    fill(0);
    rect(this.x, this.y, this.width, this.height);
  }
}