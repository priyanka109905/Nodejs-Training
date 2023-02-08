function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('drwa');
    }

}
const circle=new Circle(1);