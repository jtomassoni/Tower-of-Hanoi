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
let towerHeight = 0;

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
	const parent = event.target;
	if (towerA.childNodes.length === 0) {
		if (currentDisk != null) {
			moveCounter.innerText = counter;
			currentDisk.classList.toggle('selected');
			counter++;
			playerMessage.innerHTML =
				'Select the next disk.  Make sure it is on <em>top</em> of the 	tower.';
			towerA.prepend(currentDisk);
			checkWin();
		}
	} else if (Number(currentDisk.value) < Number(towerA.childNodes[0].value)) {
		towerA.prepend(currentDisk);
		moveCounter.innerText = counter;
		currentDisk.classList.toggle('selected');
		counter++;
		currentDisk = null;
		checkWin();
	} else {
		playerMessage.innerHTML =
			'Invalid Selection:</br></br> <strong></strong>Larger disks</strong> can not be stacked on top of <strong>smaller disks.</strong>';
		currentDisk.classList.toggle('selected');
	}
});
moveToB.addEventListener('click', (event) => {
	const parent = event.target;
	if (towerB.childNodes.length === 0) {
		if (currentDisk != null) {
			moveCounter.innerText = counter;
			currentDisk.classList.toggle('selected');
			counter++;
			playerMessage.innerHTML =
				'Select the next disk.  Make sure it is on <em>top</em> of the 	tower.';
			towerB.prepend(currentDisk);
			checkWin();
		}
	} else if (Number(currentDisk.value) < Number(towerB.childNodes[0].value)) {
		towerB.prepend(currentDisk);
		moveCounter.innerText = counter;
		currentDisk.classList.toggle('selected');
		counter++;
		currentDisk = null;
		checkWin();
	} else {
		playerMessage.innerHTML =
			'Invalid Selection:</br></br> <strong></strong>Larger disks</strong> can not be stacked on top of <strong>smaller disks.</strong>';
		currentDisk.classList.toggle('selected');
	}
});
moveToC.addEventListener('click', (event) => {
	const parent = event.target;
	if (towerC.childNodes.length === 0) {
		if (currentDisk != null) {
			moveCounter.innerText = counter;
			currentDisk.classList.toggle('selected');
			counter++;
			playerMessage.innerHTML =
				'Select the next disk.  Make sure it is on <em>top</em> of the 	tower.';
			towerC.prepend(currentDisk);
			checkWin();
		}
	} else if (Number(currentDisk.value) < Number(towerC.childNodes[0].value)) {
		towerC.prepend(currentDisk);
		moveCounter.innerText = counter;
		currentDisk.classList.toggle('selected');
		counter++;
		currentDisk = null;
		checkWin();
	} else {
		playerMessage.innerHTML =
			'Invalid Selection:</br></br> <strong></strong>Larger disks</strong> can not be stacked on top of <strong>smaller disks.</strong>';
		currentDisk.classList.toggle('selected');
	}
});

resetButton.addEventListener('click', (event) => {
	playerMessage.innerHTML = `...maybe do better this time?`;
	towerA.prepend(largeDisk);
	towerA.prepend(mediumDisk);
	towerA.prepend(smallDisk);
	smallDisk.classList.remove('selected');
	mediumDisk.classList.remove('selected');
	largeDisk.classList.remove('selected');
	moveCounter.innerText = '';
	currentDisk = null;
});
function checkWin() {
	if (towerC.childElementCount === 3) {
		playerMessage.innerHTML = 'YOU WON!!!!';
	}
}
