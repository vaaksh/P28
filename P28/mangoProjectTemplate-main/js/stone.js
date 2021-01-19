var radius, pos;
class Stone {
    constructor(x, y, r) {
      var options = {
          isStatic:false,
          'restitution':0,
          'friction':1,
          'density':1.2
      }
      this.image = loadImage("images/stone.png")
      this.body = Bodies.circle(x, y, r/2, options);
      World.add(world, this.body);
      radius = r;
      pos =this.body.position;
      
    }
    display(){
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, radius, radius);
    }
  };
  