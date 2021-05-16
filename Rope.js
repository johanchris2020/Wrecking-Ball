class Rope{
    constructor(bodyA, pointB){
        var options = {bodyA: bodyA, pointB: pointB, stiffness: 1.0, length: 100}
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(4);
        line(pointB.x, pointB.y, pointA.x,pointA.y);

    }
}