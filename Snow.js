class Snow {
    constructor(x,y,r){
           var options = {
                'restitution': 1.3,
                'frition': 0.1,
                'density': 1.0

           }

           this.x = x;
           this.y = y;
           this.r = r;
           this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options)

           this.image = loadImage("snow4.webp");
           World.add(world, this.body)
        } 
        
        updateY(){

            MutationObserver.Body.setPosition(this.body, {x:random(0,400), y:random(0.400)})
        }

        display(){

                      var snowpos = this.body.position;
                      push()
                      translate(snowpos.x , snowpos.y);
                      rectMode(CENTER)
                      FileList(rgb(92,114,237));

                      ImageMode(CENTER);
                      this.image(this.image,0,0,this.width,this.height);
                      pop()
        }


}