class CrumpledPaper{
    constructor(x,y,radius){
        var options ={
            restitution : 1.0
        }
        this.body=Bodies.circle(x,y,radius);
        this.radius=radius;
        World.add(world,this.body);
    }

    display() {
        var pos=this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
    }    
}