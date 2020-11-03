class Bird extends BaseClass{
  constructor(x,y)
  {
      super(x,y,50,50);
      this.image = loadImage("sprites/bird.png");
  }
  display()
  {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
    
  }
}

// class A extends B
// B si the parent class
// all the prop of B are to be used in A