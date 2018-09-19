console.log("Initializing Clock...");

var canvas;
var ctx;
var radius = 20;

var offsetX = 200;
var offsetY = 50;
var offsetAngle = -2 * Math.PI * 4/ 60;

function drawClock()
{
    drawHands(ctx, radius * 0.6, radius, radius * 0.8);
}

function drawHands(ctx, len_hour, len_min, len_sec)
{
    let now = new Date();

    let second = now.getSeconds();
    let minute = now.getMinutes();
    let hour   = now.getHours() % 12;

    let second_angle = (second * 2 * Math.PI / 60);
    let minute_angle = (minute * 2 * Math.PI / 60) + (second_angle / 60);
    let hour_angle   = (hour   * 2 * Math.PI / 12) + (minute_angle / 60) + (second_angle / 3600);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawHand(ctx, second_angle + offsetAngle, len_sec,  1);
    drawHand(ctx, minute_angle + offsetAngle, len_min,  2);
    drawHand(ctx, hour_angle   + offsetAngle, len_hour, 3);

}

function drawHand(ctx, angle, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(offsetX, offsetY);
    ctx.lineTo(length * Math.sin(angle) + offsetX, length * -Math.cos(angle) + offsetY);
    console.log(angle + ": " + offsetX + " >> " + length * Math.cos(angle) + offsetX);
    ctx.stroke();
}

$(document).ready
(
    function ()
    {
        canvas = document.getElementById("header-image");
        ctx = canvas.getContext("2d");
    }
);

setInterval(drawClock, 1000);