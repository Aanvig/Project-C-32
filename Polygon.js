class Polygon {
    constructor(x, y, radius) {
        var options = {
            'restitution':0.5,
            'friction':0.8,
            'density':1.5,
            "isStatic": false

        }
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        this.radius=radius
      }
      display(){
        var pos = this.body.position
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill("red")
        ellipse(0, 0, this.radius, this.radius)
        pop();
      }
    
}