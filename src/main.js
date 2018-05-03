const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");


//////////Red square with a black outline
ctx.strokeStyle = "black";
ctx.fillStyle = "red";
ctx.fillRect(300, 600, 50, 50);
ctx.strokeRect(300, 600, 50, 50);