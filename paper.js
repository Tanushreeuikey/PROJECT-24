class Paper
{
    constructor(x,y,radius)
    {
        var option=
        {
            isStatic:false,
		restitution:0.3,
		friction:0.5,
		Density:1.2
        }
        this.body=Matter.Bodies.circle(x,y,radius,option)
        World.add(world,this.body);
        this.radius=20
    }
   
    display()
    {
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill("white")
        ellipse(pos.x,pos.y,this.radius)
		
    }
}