class CrumpledPaper{
    constructor(x,y,radius,fill){
        var options ={
            restitution : 1.0
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.fill=fill;
        World.add(world,this.body);
    }

    display() {
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill(this.fill);
        ellipse(pos.x,pos.y,this.radius);
    }    
}