class Line{

constructor(bodyA,pointB){

    var options={

        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        lenght:1

    }

    this.line = Constraint.create(options);
    World.add(world,this.line)

    this.pointB = pointB;
}

display(){

    var pointA = this.line.bodyA.position
    var pointB = this.pointB

    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);

}

}