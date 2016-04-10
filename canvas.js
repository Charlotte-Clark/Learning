var canvas = document.getElementById("myCanvas");

var context = canvas.getContext("2D");

context.strokeStyle = "red";
context.fillstyle = "rgba(255, 255, 0, 0.5)";
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);

function drawPattern()  {
    var canvas = document.getElementById("myCanvas2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    
    var img = new Image();
    img.src = "../images/image.png";
    
    img.onload = function() {
        var pattern = context.createPattern(img, "repeat");
        context.fillStyle = pattern;
        context.fillRect(10,10,100,100);
        context.strokeRect(10, 10, 100, 100);
    };
    
};

function drawGradient() {
    var canvas = document.getElementById("myCanvas3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "white");
    context.fillStyle = gradient;
    context.fillRect(10, 10, 100, 100);
    context.strokeRect(10, 10, 100, 100);
}

