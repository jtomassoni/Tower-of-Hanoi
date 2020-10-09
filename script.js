let towerA = document.querySelector('#towerA');
let towerB = document.querySelector('#towerB');
let towerC = document.querySelector('#towerC');
let towers = document.querySelector('.allTowers');
let smallDisk = document.querySelector('#smallDisk');
let mediumDisk = document.querySelector('#mediumDisk');
let largeDisk = document.querySelector('#largeDisk');
let playerMessage = document.querySelector('.playerMessage');
let resetButton = document.querySelector('.resetButton');
let moveToA = document.querySelector('#moveToA');
let moveToB = document.querySelector('#moveToB');
let moveToC = document.querySelector('#moveToC');
let diskButtons = document.querySelector('.diskButtons');
let moveCounter = document.querySelector('#moveCounter');
let currentDisk = null;
let counter = 1;

smallDisk.addEventListener('click', (event) => {
	const parent = event.target.parentElement;
	if (parent.childNodes[0].id === 'smallDisk') {
		currentDisk = event.target;
		playerMessage.innerText = `Valid Selection: Move it to another tower`;
		smallDisk.classList.toggle('selected');
	} else {
		playerMessage.innerHTML = `Invalid Selection:</br></br>You may only move the <strong>top</strong> disk.</br>  You may only move <strong>one</strong> disk at a time.</br>  <strong>Larger disks</strong> can not be stacked on top of <strong>smaller disks.</strong>`;
		currentDisk = null;
	}
});
mediumDisk.addEventListener('click', (event) => {
	const parent = event.target.parentElement;
	console.log(parent);
	if (parent.childNodes[0].id === 'mediumDisk') {
		currentDisk = event.target;
		playerMessage.innerText = `Valid Selection: Move it to another tower`;
		mediumDisk.classList.toggle('selected');
	} else {
		playerMessage.innerHTML = `Invalid Selection:</br></br>You may only move the <strong>top</strong> disk.</br>  You may only move <strong>one</strong> disk at a time.</br>  <strong>Larger disks</strong> can not be stacked on top of <strong>smaller disks.</strong>`;
		currentDisk = null;
	}
});
largeDisk.addEventListener('click', (event) => {
	const parent = event.target.parentElement;
	console.log(parent);
	if (parent.childNodes[0].id === 'largeDisk') {
		currentDisk = event.target;
		playerMessage.innerText = `Valid Selection: Move it to another tower`;
		largeDisk.classList.toggle('selected');
	} else {
		playerMessage.innerHTML = `Invalid Selection:</br></br>You may only move the <strong>top</strong> disk.</br>  You may only move <strong>one</strong> disk at a time.</br>  <strong>Larger disks</strong> can not be stacked on top of <strong>smaller disks.</strong>`;
		currentDisk = null;
	}
});

moveToA.addEventListener('click', (event) => {
	if (currentDisk != null) {
		towerA.prepend(currentDisk);
		playerMessage.innerHTML =
			'Select the next disk.  Make sure it is on <em>top</em> of the tower.';
		moveCounter.innerText = counter;

		currentDisk.classList.toggle('selected');
		counter++;
		currentDisk = null;
	}
});
moveToB.addEventListener('click', (event) => {
	if (currentDisk != null) {
		towerB.prepend(currentDisk);
		playerMessage.innerHTML =
			'Select the next disk.  Make sure it is on <em>top</em> of the tower.';
		moveCounter.innerText = counter;
		currentDisk.classList.toggle('selected');
		counter++;
		currentDisk = null;
	}
});
moveToC.addEventListener('click', (event) => {
	if (currentDisk != null) {
		towerC.prepend(currentDisk);
		playerMessage.innerHTML =
			'Select the next disk.  Make sure it is on <em>top</em> of the tower.';
		moveCounter.innerText = counter;
		currentDisk.classList.toggle('selected');
		counter++;
		currentDisk = null;
	}
});
resetButton.addEventListener('click', (event) => {
	playerMessage.innerHTML = `...maybe do better this time?`;
	towerA.prepend(largeDisk);
	towerA.prepend(mediumDisk);
	towerA.prepend(smallDisk);
	currentDisk.classList.toggle('selected');
	currentDisk = null;
});

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
