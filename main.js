lipstickX = 0;
lipstickY = 0;

mustachX = 0;
mustachY = 0;

function preload() {
    clownlips = loadImage("https://i.postimg.cc/5tgpRXJz/i3.jpg");
    clownmustach = loadImage("https://i.postimg.cc/Dw8XTm1s/i2.png");
}


function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    Video = createCapture(VIDEO);
    Video.size(400, 400);
    Video.hide();
    poseNet = ml5.poseNet(Video, modelLoaded);
    poseNet.on('pose', gotposes);

}

function modelLoaded() {
    console.log("poseNet is initialized");
}


function draw() {

    image(Video, 0, 0, 400, 400);
    image(clownlips, lipstickX, lipstickY, 100, 25);
    image(clownmustach, mustachX, mustachY, 100,23 );
}

function take_snapshot() {
    save("lipstickFilter.png");

}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        lipstickX = results[0].pose.nose.x - 40;
        lipstickY = results[0].pose.nose.y + 40;
        mustachX=results[0].pose.nose.x-40;
        mustachY=results[0].pose.nose.y+20;
    }
}
