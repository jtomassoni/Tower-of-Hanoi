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
let diskButtons = document.querySelector('.diskButtons');

// console.log(diskButtons);

playerMessage.innerText = 'Welcome to Tower of Hanoi.  Rules are rules';

let currentDisk = null;
let incrementer = 0;

diskButtons.addEventListener('click', (event) => {
	//prevent action on the negative space
	if (event.target.id === 'noClick') {
		return true;
	}
	//prevent more than one disk from being selected
	let buttonClasses = event.target.classList;
	if (incrementer % 2 === 0) {
		if (buttonClasses.value != 'selected') {
			currentDisk = event;
			playerMessage.innerText = `You've selected Disk ${currentDisk.target.value}, now select a tower to place it below.`;
			currentDisk.target.classList.toggle('selected');
		}
	}
	if (incrementer % 2 != 0) {
		playerMessage.innerText = `You've already selected Disk ${currentDisk.target.value}, please select a tower to place it below.`;
		return;
	}
	console.log(stacksButtons);
	incrementer++;
});

towerA = [];
towerB = [];
towerC = [];
// console.log(towerA);
let checkTower = null;

// stacksButtons.addEventListener('click', (event) => {
//     checkTower = event;
// 	console.log(checkTower.target.value);
// });

// resetButton.addEventListener('click', (event) => {
// 	// console.log(event);
// 	playerMessage.innerText = 'Welcome to Tower of Hanoi.  Rules are rules';
// 	console.log(diskButtons);
// 	// diskButtons.classList.remove('selected');
// });

// const removeSelections = () => {
// currentDisk.target.classList.remove('selected');
// playerMessage.innerText =

// }

// let winningSolution = [smallDisk, mediumDisk, largeDisk];
