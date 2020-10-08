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
// console.log(divButtons);

playerMessage.innerText = 'Welcome to Tower of Hanoi.  Rules are rules';
let winningSolution = [smallDisk, mediumDisk, largeDisk];
// console.log(winningSolution);

towerA = [];
towerB = [];
towerC = [];
let currentDisk = null;

divButtons.addEventListener('click', (event) => {
	currentDisk = event;
	playerMessage.innerText = `You've selected Disk ${currentDisk.target.value}, now select a tower to place it below.`;
	console.log(currentDisk.target.classList.add('selected'));
});

let checkTower = null;
stacksButtons.addEventListener('click', (event) => {
	console.log(event);
	checkTower = event;
	//if the tower has a value in index[0] that's bigger than
});
