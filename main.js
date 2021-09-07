function preload() {

}

function setup() {
    canvas = createCanvas(400, 400);
    Video=createCapture(VIDEO);
    Video.hide();
    canvas.center();

}

function draw() {
    
 image(Video,50,50,300,300);
}

function take_snapshot() {
    save("lipstickFilter.png");

}
