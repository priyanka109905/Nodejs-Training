/*Function isLandscape, it takes two parameters,
width, and height of an image, and returns true
if the image is landscape, which means width is greater than
height, otherwise it returns false.
*/
function landscape(width,height){
    if(width>height){
        console.log("It is Landscape");
    }
    else{
        console.log("It is not landscape")
    }
}

landscape(300,200)