function draw() {
    var canvas = document.getElementById("btn");
    var content = canvas.getContext('2d');
    content.fillStyle = "#03ff00";
    content.fillRect(0, 0, 500, 500);
    content.strokeStyle = "#0000ff";
    content.strokeRect(50, 50, 200, 200);
    content.lineWidth = 5;
    content.clearRect(60, 60, 60, 60);
}