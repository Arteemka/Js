

function picture() {
	"use strict";
   let sizeOne = document.getElementsByClassName('size-1')[0],
        sizeTwo = document.getElementsByClassName('size-2')[0],
        sizeThree = document.getElementsByClassName('size-3')[0],
        sizeFour = document.getElementsByClassName('size-4')[0];


    sizeOne.onmouseover = function () {
        this.src = './img/sizes-1-1.png';
    };
    sizeTwo.onmouseover = function () {
        this.src = './img/sizes-2-1.png';
    };
    sizeThree.onmouseover = function () {
        this.src = './img/sizes-3-1.png';
    };
    sizeFour.onmouseover = function () {
        this.src = './img/sizes-4-1.png';
    };

    sizeOne.onmouseout = function () {
        this.src = './img/sizes-1.png';
    };
    sizeTwo.onmouseout = function () {
        this.src = './img/sizes-2.png';
    };
    sizeThree.onmouseout = function () {
        this.src = './img/sizes-3.png';
    };
    sizeFour.onmouseout = function () {
        this.src = './img/sizes-4.png';
    };
}

module.exports = picture;