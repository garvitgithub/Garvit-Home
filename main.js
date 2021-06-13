function setup(){
    canvas=createCanvas(700,500);
    canvas.center();
    detected=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="detecting objects";
    }
    img="";status="";objects=[];
    function modelLoaded(){
    console.log("model has loaded");
    status=true;
    detected.detect(img,gotResult);
    }
    function preload(){
    img=loadImage("84a0766c-2f7a-4b55-9af6-dfbf24f53aa7.jpeg");
    }
    function draw(){
    image(img,0,0,700,500);
if(status != ""){
for(i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="detected!!!!!";
p=floor(objects[i].confidence*100);
stroke ("#ff0000");text(objects[i].label+" "+p+"%",objects[i].x,objects[i].y);
noFill ();
stroke ("#ff0000");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].hight)


}


}








    }
    function gotResult(error,results){
        if(error){console.log(error);}else{
        console.log(results);
        objects=results;
        }
        }