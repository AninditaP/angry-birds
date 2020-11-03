class Box extends BaseClass{
  constructor(x,y,width,height)
  {
      super(x,y,width, height);
      this.image = loadImage("sprites/wood1.png");
  }
}

// class A extends B
// B si the parent class
// all the prop of B are to be used in A