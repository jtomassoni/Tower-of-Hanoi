let towers = document.querySelectorAll('.towers');
let towerA = document.querySelector('#towerA');
let towerB = document.querySelector('#towerB');
let towerC = document.querySelector('#towerC');
let smallDisk = document.querySelector('#smallDisk');
let mediumDisk = document.querySelector('#mediumDisk');
let largeDisk = document.querySelector('#largeDisk');
let playerMessage = document.querySelector('.playerMessage');
let resetButton = document.querySelector('.resetButton');
let stacksButtons = document.querySelector('.stacksButtons');
let moveToA = document.querySelector('#moveToA');
let moveToB = document.querySelector('#moveToB');
let moveToC = document.querySelector('#moveToC');
let divButtons = document.querySelector('.diskButtons');
console.log(divButtons);

playerMessage.innerText = 'Welcome to Tower of Hanoi.  Rules are rules';
let winningSolution = [smallDisk, mediumDisk, largeDisk];
// console.log(winningSolution);

towerA = [];
towerB = [];
towerC = [];
let currentDisk = null;

divButtons.addEventListener('click', (event) => {
	console.log(event.target.id);
	if (event.target.id != 'noClick') {
		currentDisk = event;
		playerMessage.innerText = `You've selected Disk ${currentDisk.target.value}, now select a tower to place it below.`;
		currentDisk.target.classList.toggle('selected');
	}
});

let checkTower = null;

stacksButtons.addEventListener('click', (event) => {
	// console.log(event);
	checkTower = event;
	currentDisk.target.classList.remove('selected');
});

resetButton.addEventListener('click', (event) => {
	// console.log(event);
	playerMessage.innerText = 'Welcome to Tower of Hanoi.  Rules are rules';
	console.log(divButtons);
	// divButtons.classList.remove('selected');
});

// const removeSelections = () => {
// currentDisk.target.classList.remove('selected');
// playerMessage.innerText =

// }
