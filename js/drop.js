class Drop{
      constructor(x,y,radius){

var options={
     
     restitution:0.1
}
this.body=Bodies.circle(x,y,options)
this.radius=6

World.add(world,this.body)
}

display(){
    var pos=this.body.position
    fill()
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)
}
update(){
    if(this.body.position.y>500){
      Matter.body.setPosition(this.body,{x:random(0,400),
        y:random(-9,0)})
    }
}

displaydrop(){
    fill("blue")
    ellipseMode(CENTER)
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
}

}