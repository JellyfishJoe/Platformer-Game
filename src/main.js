const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
//const { width: w, height: h } = canvas;
//Width of squares
var w = 50;
//Height of squares
var h = 50;
//Create an array for the height of the columns
var height = new Array();
height[0] = 5;

var index = 0;
var value;

console.log(height[0]);

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawRandom() {
	for (let column = 0; column < Math.ceil(canvas.width / w); column++) {
		//Generate the height of each column
		random = getRandomInt((height[index] - 1), (height[index] + 1));
		//Add height to the array
		height.push(random);
		console.log(height[index]);
		//Draw the columns with the height of their row number's index in height
		for (let row = 0; row <= height[index]; row++) {
			//Draw the squares
			ctx.stokeStyle = "black";
			ctx.fillStyle = "red";
			ctx.fillRect((w * index), (900 - (h * row)) - 100, w, h);
			ctx.strokeRect((w * index), (900 - (h * row)) - 100, w, h);
		}

		for (let bot_row = 0; bot_row <= 1; bot_row++) {
			ctx.strokeStyle = "black";
			ctx.fillStyle = "red";
			ctx.fillRect((w * index), (900 - h), w, h);
			ctx.strokeRect((w * index), (900 - h), w, h);
		}

		console.log("drawn " + index + " rows");
		index++;
	}
}

drawRandom();

document.onkeydown = checkKey;

function checkKey(e) {
	switch (e.keyCode) {
		case 39:
			moveRight();
			break;
	}
};

function draw() {
	for (let column = 0; column < Math.ceil(canvas.width / w); column++) {
		for (let row = 0; row <= height[index]; row++) {
			ctx.strokeStyle = "black";
			ctx.fillStyle = "red";
			ctx.fillRect((w * index), (900 - (h * row)) - 100, w, h);
			ctx.strokeRect((w * index), (900 - (h * row)) - 100, w, h);
		}

		for (let bot_row = 0; bot_row <= 1; bot_row++) {
			ctx.strokeStyle = "black";
			ctx.fillStyle = "red";
			ctx.fillRect((w * index), (900 -h), w, h);
			ctx.strokeRect((w * index), (900 - h), w, h);
		}
	}
}

function moveRight() {	
	console.log(height);
	random = getRandomInt((height[index] - 1), (height[index] + 1));
	height.shift();
	height.push(random);
	console.log(height);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	draw();
}