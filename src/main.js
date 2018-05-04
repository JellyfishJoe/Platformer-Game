const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
//const { width: w, height: h } = canvas;
//Width of squares
var w = 1;
//Height of squares
var h = 1;
//Create an array for the height of the columns
var height = new Array();
height[0] = 100;

var index = 0;
var xedni = 0;
var value;

console.log(height[0]);

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let column = 0; column < Math.ceil(canvas.width / w); column++) {
	//Generate the height of each column
	random = getRandomInt((height[index] - 1), (height[index] + 1));
	//Add height to the array
	height.push(random);
	//Set a variable equal to the length of the array
	console.log(height[index]);
	//Draw the columns with the height of their row number's index in height
	for (let row = 0; row <= height[index]; row++) {
		//Draw the squares
		ctx.stokeStyle = "black";
		ctx.fillStyle = "red";
		ctx.fillRect((w * index), (900 - (h * row)), w, h);
		ctx.strokeRect((w * index), (900 - (h * row)), w, h);
	}
	
	console.log("drawn" + index + "rows");
	index++;
}

console.log(height);