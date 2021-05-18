class Chain{

constructor(bodyA,bodyB,offsetX,offsetY){
    var options={
        bodyA:bodyA,bodyB:bodyB,
        pointB:{x:offsetX,y:offsetY},

    
    }
    this.offsetX=offsetX
    this.offsetY=offsetY
    this.chain = Constraint.create(options)
    World.add(world,this.chain)
}
display(){
    var pointA=this.chain.bodyA.position
    var pointB = this.chain.bodyB.position
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY)
}
}      

