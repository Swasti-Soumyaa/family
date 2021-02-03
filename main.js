var thistle= ["grandma","papa","mama","me","grandpa"];

var images=["grandma.png","papa.png","mama.png","holly(me).png","grandpapa.png"];

var i=0;

function next(){
    document.getElementById("name").innerHTML=thistle[i];
    document.getElementById("image").src=images[i];
    i++

    if (i==5){
        i=0
    }

}