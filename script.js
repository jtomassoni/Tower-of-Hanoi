let towers = document.querySelectorAll('.towers');
let towerA = document.querySelector('#towerA');
let towerB = document.querySelector('#towerB');
let towerC = document.querySelector('#towerC');
let smallDisk = document.querySelector('#smallDisk');
let mediumDisk = document.querySelector('#mediumDisk');
let largeDisk = document.querySelector('#largeDisk');
let playerMessage = document.querySelector('.playerMessage');
let resetButton = document.querySelector('.resetButton');


playerMessage.innerText = 'Welcome to Tower of Hanoi.  Rules are rules';
let winningSolution = [smallDisk, mediumDisk, largeDisk];

towerA = [];
towerB = [];
towerC = [];