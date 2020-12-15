class BOB{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8 }
             //this.width=width;
            
        this.radius=radius;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(this.x,this.y,this.radius/2,options);
       // this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        //var angle = this.body.angle;

        
         // fill("green");
          push ();
          translate(pos.x,pos.y);
         // rotate(angle);
          noStroke();
          //ellipseMode(RADIUS);
          ellipse(0, 0, this.radius, this.radius);
          pop();
       
    }
}