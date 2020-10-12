//Declarations
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
let isHidden = document.querySelector('.isHidden');
let timer = document.querySelector('#timer');
let currentDisk = null;
let counter = 1;
let towerHeight = 0;

//Functions
//Function for displaying invalid due to improper order
function invalidBadOrder() {
	playerMessage.innerHTML = `Invalid Selection:</br></br>You may only move the <strong>top</strong> disk.</br>  You may only move <strong>one</strong> disk at a time.</br>  <strong>Larger disks</strong> can not be stacked on top of <strong>smaller disks.</strong>`;
	currentDisk = null;
}
//Function for displaying ivalid due to placing stack on stack that its on
function invalidSameStack() {
	playerMessage.innerHTML = `Invalid Selection:</br></br>You may only move the <strong>top</strong> disk.</br>  You may only move <strong>one</strong> disk at a time.</br>  <strong>Larger disks</strong> can not be stacked on top of <strong>smaller disks.</strong>`;
	currentDisk = null;
}
//Function for displaying the 'click next disk message'
function validClick() {
	playerMessage.innerText = `Valid Selection: Move it to another tower`;
}
//Function to set currentDisk
function setCurrentDisk() {
	currentDisk = event.target;
}
//Better function for toggling display
function toggleClass() {
	isHidden.style.display = 'block';
}
//Function for toggling display of class list.
function toggleSmall() {
	smallDisk.classList.toggle('selected');
}
//Function for increasing the counter.
function increaseCounter() {
	moveCounter.innerText = counter;
	currentDisk.classList.toggle('selected');
	counter++;
}
//Function for starting the timer
function startTimer() {
	timer.innerHTML = 'hello';
}

//Function for resetting game.
function resetGame() {
	playerMessage.innerHTML = `...maybe do better this time?`;
	towerA.prepend(largeDisk);
	towerA.prepend(mediumDisk);
	towerA.prepend(smallDisk);
	smallDisk.classList.remove('selected');
	mediumDisk.classList.remove('selected');
	largeDisk.classList.remove('selected');
	moveCounter.innerText = '';
	currentDisk = null;
}
//Function for setCurrentDiskNull
function setCurrentDiskNull() {
	currentDisk = null;
}
//Function for evaluating a win AND stopping the timer
function checkWin() {
	if (towerC.childElementCount === 3) {
		playerMessage.innerHTML = 'YOU WON!!!! LFG';
	}
}

smallDisk.addEventListener('click', (event) => {
	const parent = event.target.parentElement;
	if (parent.childNodes[0].id === 'smallDisk') {
		setCurrentDisk();
		toggleSmall();
		validClick();
		toggleClass();
		//start timer
		setInterval(function () {
			timer.innerText = 'hello';
		}, 3000);
	} else {
		invalidBadOrder();
		setCurrentDiskNull();
	}
});
mediumDisk.addEventListener('click', (event) => {
	const parent = event.target.parentElement;
	if (parent.childNodes[0].id === 'mediumDisk') {
		currentDisk = event.target;
		playerMessage.innerText = `Valid Selection: Move it to another tower`;
		mediumDisk.classList.toggle('selected');
		isHidden.style.display = 'block';
	} else {
		playerMessage.innerHTML = `Invalid Selection:</br></br>You may only move the <strong>top</strong> disk.</br>  You may only move <strong>one</strong> disk at a time.</br>  <strong>Larger disks</strong> can not be stacked on top of <strong>smaller disks.</strong>`;
		setCurrentDiskNull();
	}
});
largeDisk.addEventListener('click', (event) => {
	const parent = event.target.parentElement;
	console.log(parent);
	if (parent.childNodes[0].id === 'largeDisk') {
		currentDisk = event.target;
		playerMessage.innerText = `Valid Selection: Move it to another tower`;
		largeDisk.classList.toggle('selected');
		isHidden.style.display = 'block';
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
		counter++;
		currentDisk.classList.toggle('selected');
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
	resetGame();
});
