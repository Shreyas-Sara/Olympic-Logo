canvas = document.getElementById("myCanvas");
ssd = canvas.getContext("2d");


ssd.beginPath();
ssd.strokeStyle = "red";
ssd.lineWidth = 1;
ssd.rect (150, 143, 430, 200);
ssd.stroke();

ssd.beginPath();
ssd.strokeStyle = "blue";
ssd.lineWidth = 3;
ssd.arc (230, 200, 40, 0, 360 );
ssd.stroke();

ssd.beginPath();
ssd.strokeStyle = "black";
ssd.lineWidth = 3;
ssd.arc (320, 200, 40, 0, 360);
ssd.stroke();

ssd.beginPath();
ssd.strokeStyle = "red";
ssd.lineWidth = 3;
ssd.arc (410, 200, 40, 0, 360);
ssd.stroke();

ssd.beginPath();
ssd.strokeStyle = "yellow";
ssd.lineWidth = 3;
ssd.arc (275, 250, 40, 0, 360 );
ssd.stroke();

ssd.beginPath();
ssd.strokeStyle = "green";
ssd.lineWidth = 3;
ssd.arc (365, 250, 40, 0, 360);
ssd.stroke();