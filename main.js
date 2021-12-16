noseX = 0;
noseY = 0;
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Model loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-40;
        noseY = results[0].pose.nose.y-10;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
function preload(){
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 80, 40);
}