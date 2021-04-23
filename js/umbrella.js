class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.image=loadImage("walking1.png")
        this.Umbrella=Bodies.circle(x,y,60,options)
        this.radius=70
        World.add(world,this.Umbrella)
    }
    display(){
        var pos=this.Umbrella.position
        imageMode(CENTER)
        image(this.image,position.x,position.y+80,400,400)
    }
}