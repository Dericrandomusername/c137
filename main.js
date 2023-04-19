
leftwristX=0;
rightwristX=0;
difference=0;

function setup() {
    video=createCapture(VIDEO)
    video.size (550,500)
    canvas=createCanvas(550,550)
    canvas.position(560,160);
    poseNet=ml5.poseNet(video,modelloaded)
    poseNet.on('pose',gotposes);

}
function modelloaded(){
    console.log("model has been initialised");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX)
    }
}
function draw(){
    background("black");
    fill("lightblue");
    stroke("blue");
    textSize(difference);
    text("deric",50,300)
    document.getElementById("square_sides").innerHTML="width and height of font will be ="+difference;
}