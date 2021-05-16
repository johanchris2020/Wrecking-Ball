class Ball{
    constructor(x,y,width, height){
        var options = {
            'density': 1.0,
            'restitution':0.8
        }
        this.body = Bodies.rectangle(x,y,width,height, options);
        console.log(this.body);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle; 
        push();
        translate(this.body.position.x, this.body.position.x);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.width,this.height);
        pop();
    }
}