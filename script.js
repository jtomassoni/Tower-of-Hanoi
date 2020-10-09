let towers = document.querySelectorAll('.towers');
let towerA = document.querySelector('#towerA');
let towerB = document.querySelector('#towerB');
let towerC = document.querySelector('#towerC');
let disk1 = document.querySelector('#disk1');
let disk2 = document.querySelector('#disk2');
let disk3 = document.querySelector('#disk3');
let playerMessage = document.querySelector('.playerMessage');
let resetButton = document.querySelector('.resetButton');
let stacksButtons = document.querySelector('.stacksButtons');
let moveToA = document.querySelector('#moveToA');
let moveToB = document.querySelector('#moveToB');
let moveToC = document.querySelector('#moveToC');
let diskButtons = document.querySelector('.diskButtons');

playerMessage.innerText = 'Welcome to Tower of Hanoi.  Rules are rules';

let currentDisk = null;
let incrementer = 0;
diskButtons.addEventListener('click', (event) => {
	//prevent action on the negative space
	if (event.target.id === 'noClick') {
		return true;
	}
	//prevent more than one disk from being selected
	//only allow selection from the [0]index????
	let buttonClasses = event.target.classList;
	if (incrementer % 2 === 0) {
		if (buttonClasses.value != 'selected') {
			currentDisk = event;
			playerMessage.innerText = `You've selected Disk ${currentDisk.target.value}, now select a tower to place it below.`;
			currentDisk.target.classList.toggle('selected');
			return currentDisk;
		}
	}
	if (incrementer % 2 != 0) {
		playerMessage.innerText = `You've already selected Disk ${currentDisk.target.value}, please select a tower to place it below.`;
		return currentDisk;
	}
	incrementer++;
});

const startingCondition = [{ value: 1 }, { value: 2 }, { value: 3 }];
towerA = startingCondition;
towerB = [];
towerC = [];

startingCondition.forEach((element) => {
	let i = element.value;
	let button = document.createElement('button');
	button.id = `disk${i}`;
	button.value = i;
	diskButtons.appendChild(button);
});

resetButton.addEventListener('click', (event) => {
	console.log(currentDisk.target.classList);
	playerMessage.innerText = 'Welcome to Tower of Hanoi.  Rules are rules';
});
