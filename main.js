var object=[]
var status=""
var modle_load=""

function preload(){
    
}
function setup(){
    canvas=createCanvas(640,420)
    canvas.center()
    modle_load=ml5.objectDetector("cocossd",modleLoaded)
    document.getElementById("status").innerHTML="status: status decting"
    webcam=createCapture(VIDEO)
    webcam.size(640,420)
    webcam.hide()

   

}
function draw(){
    image(webcam,0,0,640,420)

   
    if(status=="yes"){
        modle_load.detect(webcam,gotReult)
        document.getElementById("status").innerHTML="status: status dected"
        document.getElementById("items").innerHTML="The number of the items(OR) object:"+object.length
        for(i=0;i<object.length;i++){
            red=random(255)
            green=random(255)
            blue=random(255)
            fill(red,green,blue)
            textSize(30)
            confidence1=floor(object[i].confidence*100)
            text(object[i].label+" "+confidence1+"%",object[i].x,object[i].y)
            noFill()
            stroke(red,green,blue)
            rect(object[i].x,object[i].y,object[i].width,object[i].height)
    
        }
       
    }
    
    
    

}
function modleLoaded(){
    console.log("i am working")
    status="yes"
    
}
function gotReult(error,results){
    if(error){
        console.log("i am not working some thing is wrong please try again")
    }
    else{
      console.log(results)
      object=results  
    }
}
function start(){
    modle_load=ml5.objectDetector("cocossd",modleLoaded)
    document.getElementById("status").innerHTML="status: status decting"
    
}