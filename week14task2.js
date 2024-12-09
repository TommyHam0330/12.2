const canvas2 = document.getElementById("jrcanvas2");
const ctx2 = canvas.getContext("2d");

let gradient2 = ctx2.createRadialGradient(350, 600, 150, 300, 120, 10);
gradient2.addColorStop(0, "yellow");
gradient2.addColorStop(1, "green");

ctx2.beginPath();
ctx2.arc(350, 600, 150, 0 , Math.PI * 2);
ctx2.fillStyle = gradient2;
ctx2.fill();