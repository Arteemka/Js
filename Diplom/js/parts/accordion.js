
function accordion() {
	"use strict";
   let accordionHeading = document.querySelectorAll('.accordion-heading');


    for (let i = 0; i < accordionHeading.length; i++) {

        accordionHeading[i].addEventListener('click', function () {
            if (!(this.classList.contains('active'))) {

                for (let j = 0; j < accordionHeading.length; j++) {

                    accordionHeading[j].classList.remove('active');
                    accordionHeading[j].style.color = "black";
                }

                this.classList.add('active');
                accordionHeading[i].style.color = "red";
            }

        });

    }
}

module.exports = accordion;