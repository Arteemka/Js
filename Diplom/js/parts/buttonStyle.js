
function buttonStyle() {
	"use strict";
let headerLg = document.querySelectorAll('.hidden-lg'),
        buttonTransparent = document.getElementsByClassName('button-transparent')[0];
        console.log(buttonTransparent);
    console.log(headerLg);
    buttonTransparent.addEventListener('click', function() {
        for(let i = 0; i < headerLg.length; i++){
        headerLg[i].style.setProperty('display','block','important');
        headerLg[i].style.float='left';
        headerLg[i].style.marginLeft = '0';
        headerLg[i].style.width = '25%';
        headerLg[i].style.paddingRight = '15px';
        headerLg[i].style.paddingLeft = '15px';
        
        }
        buttonTransparent.style.display = "none";
    });
}

module.exports = buttonStyle;