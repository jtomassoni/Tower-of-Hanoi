let towerA = document.querySelector('#towerA');
let towerB = document.querySelector('#towerB');
let towerC = document.querySelector('#towerC');
let smallDisk = document.querySelector('#smallDisk');
let mediumDisk = document.querySelector('#mediumDisk');
let largeDisk = document.querySelector('#largeDisk');
let playerMessage = document.querySelector('.playerMessage');
let resetButton = document.querySelector('.resetButton');
let movementButtons = document.querySelectorAll('.movementButtons');
let moveToA = document.querySelector('#moveToA');
let moveToB = document.querySelector('#moveToB');
let moveToC = document.querySelector('#moveToC');
let diskButtons = document.querySelector('.diskButtons');
let moveCounter = document.querySelector('#moveCounter');

let currentDisk = null;
const startingCondition = [{ value: 1 }, { value: 2 }, { value: 3 }];
// console.log(towerA);
//make sure the disk is at the 0 of the nodeList
console.log(towerB.childNodes)

smallDisk.addEventListener('click', (event) => {
	currentDisk = event.target;
	console.log(currentDisk.parentElement)
	// console.log(currentDisk);
});
mediumDisk.addEventListener('click', (event) => {
	currentDisk = event.target;
	console.log(currentDisk);
	
});
largeDisk.addEventListener('click', (event) => {
	currentDisk = event.target;
	console.log(currentDisk);
});
moveToA.addEventListener('click', (event) => {
	const parent = currentDisk.parentElement;
	towerA.prepend(currentDisk);
	let var1 = towerA.childNodes[0].id;
	console.log(var1); //returns "smallDisk"
	console.log(currentDisk.id); //returns "smallDisk"
	if (var1 === currentDisk.id) {
		playerMessage.innerText = `You've selected ${currentDisk.id}, that is currently in Tower A.  Please place this disk elsewhere.`;
	}
	// else if(){

	// }
});
moveToB.addEventListener('click', (event) => {
	const parent = currentDisk.parentElement;
	towerB.prepend(currentDisk);
	let var1 = towerB.childNodes[0].id;
	console.log(var1);
});
moveToC.addEventListener('click', (event) => {
	const parent = currentDisk.parentElement;
	towerC.prepend(currentDisk);
});

console.log();

// console.log(towerA);

//resets the game to start over. NEEDS to do better
// resetButton.addEventListener('click', (event) => {
// 	//message
// 	playerMessage.innerText = 'Welcome to Tower of Hanoi.  Rules are rules';
// 	//moves disks back to towerA
// 	towerA = startingCondition;
// 	//removes the class that indicates the selected disk graphically
// 	currentDisk.target.classList.remove('selected');
// 	//sets the current disk selection to null
// 	currentDisk = null;
// 	incrementer = 0;
// });

// diskButtons.addEventListener('click', (event) => {
// 	//prevent action on the negative space
// 	if (event.target.id === 'noClick') {
// 		return true;
// 	}
// 	//prevent more than one disk from being selected
// 	//listens on the target, gets the value
// 	//swaps it to a number
// 	//and compares it to the value of the current value of
// 	//only listen on 0index.
// 	let buttonClasses = event.target.classList;
// 	if (Number(event.target.value) === towerA[0].value) {
// 		if (buttonClasses.value != 'selected') {
// 			currentDisk = event;
// 			playerMessage.innerText = `You've selected Disk ${currentDisk.target.value}, now select a tower to place it below.`;
// 			currentDisk.target.classList.toggle('selected');
// 			// console.log(currentDisk.target.value);
// 			return currentDisk;
// 		} else {
// 			playerMessage.innerText = `You've already selected Disk ${currentDisk.target.value}, please select a tower to place it below.`;
// 			return currentDisk;
// 		}
// 	}
// 	return currentDisk;
// });

// //get move buttons to work the same as reset unless the disk is already in that array
// moveToA.addEventListener('click', (event) => {
// 	//if currentDisk hasn't been selected yet, tell the user to select a disk.
// 	if (currentDisk === null) {
// 		playerMessage.innerText =
// 			"You haven't selected a disk to move yet.  Please select a disk before trying to move nothing into a tower.";
// 	}
// 	//now that we have a disk selected, we need to find out what tower array it's in.
// 	console.log(Number(currentDisk.target.value));
// 	console.log(towerA[0].value);
// 	if (Number(currentDisk.target.value) === towerA[0].value) {
// 		playerMessage.innerText =
// 			"You can't move a disk to the tower it is already in.";
// 	} else {
// 		console.log('he');
// 	}
// 	currentDisk.target.classList.remove('selected');
// });

// moveToB.addEventListener('click', (event) => {
// 	//if currentDisk hasn't been selected yet, tell the user to select a disk.
// 	if (currentDisk === null) {
// 		playerMessage.innerText =
// 			"You haven't selected a disk to move yet.  Please select a disk before trying to move nothing into a tower.";
// 	}
// 	//now that we have a disk selected, we need to find out what tower array it's in.
// 	console.log(Number(currentDisk.target.value));
// 	// console.log(towerB[0].value);
// 	if (towerB.length > Number(currentDisk.target.value)) {
// 		playerMessage.innerText =
// 			"You can't move a disk to the tower it is already in.";
// 	} else {
// 		console.log('he');
// 		towerB.push(currentDisk.target.value);
// 		towerB.currentDisk.target.classList.remove('selected');
// 		return towerB;
// 	}
// });

// //render the second tower if it's array is populated?

// if (towerB.length > 0) {
// 	console.log('were doing it');
// }

// //renders the first tower, NEEDS TO RENDER IT AS AN ARRAY
// // startingCondition.forEach((element) => {
// // 	console.log(element);
// // 	let i = element.value;
// // 	let button = document.createElement('button');
// // 	button.id = `disk${i}`;
// // 	button.value = i;
// // 	diskButtons.appendChild(button);
// // });
