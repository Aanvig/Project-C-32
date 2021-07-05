class Box {
  constructor(x, y, width, height) {
    var options = {
        'isStatic': false
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    
    var pos=this.body.position
    
    if(this.body.speed<5) {
    push();
    fill("lightBlue")
    translate(pos.x, pos.y);
    rotate(this.body.angle)
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
    }
    else {
      World.remove(world,this.body)

      this.visibility=this.visibility-1;

      push()
      tint(255,this.visibility);
      rect(0, 0, this.width, this.height);
      pop()
    }
  }
}