const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
const { width: w, height: h } = canvas;
/*
for (let below = 1; below < 6; below++) {
	for (let square = 1; square < 27; square++) {
		//////////Draw red square with a black outline
		ctx.strokeStyle = "black";
		ctx.fillStyle = "red";
		ctx.fillRect((50 * (square - 1)), (600 + (50 * below)), 50, 50);
		ctx.strokeRect((50 * (square - 1)), (600 + (50 * below)), 50, 50);
	}
}
*/
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}



for (let column = 1; column < 27; column++) {
	//////////Generate the height of each column	
	random = getRandomInt(6, 10);
	console.log(random);
	for (let row = 1; row < random; row++) {
		//////////Draw the red square with a black outline
		ctx.strokeStyle = "black";
		ctx.fillStyle = "red";
		ctx.fillRect((50 * (column - 1)), (900 - (50 * row)), 50, 50);
		ctx.strokeRect((50 * (column - 1)), (900 - (50 * row)), 50, 50);
	}
}
