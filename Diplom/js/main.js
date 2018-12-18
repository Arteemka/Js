window.addEventListener('DOMContentLoaded', () => {
    //slider
    function mainSlider() {
        var sliderWrapper = document.querySelector('.main-slider'),
            slides = sliderWrapper.querySelectorAll('.main-slider-item'),
            slideIndex = 1,
            preventSlide = 1,
            height = slides[0].clientHeight;
      
        function showSlides(n) {
          if (n > slides.length) {
            slideIndex = 1;
          }
      
          if (n < 1) {
            slideIndex = slides.length;
          }
      
          var top = 0;
          slides[slideIndex - 1].style.top = '-100%';
          var sliderAnimation = setInterval(function () {
            top = top + 5;
      
            if (preventSlide == slides.length) {
              slides[slides.length - 1].style.top = top + 'px';
            } else {
              slides[slideIndex - 2].style.top = top + 'px';
            }
      
            slides[slideIndex - 1].style.top = -height + top + 'px';
      
            if (top >= height) {
              preventSlide = slideIndex;
              clearInterval(sliderAnimation);
            }
          }, 5);
        }
      
        function plusSlides() {
          showSlides(slideIndex += 1);
        }
      
        var mainSliderTimer = setInterval(function () {
          plusSlides();
        }, 3000);
      }

mainSlider();
    //button
    let buttonDesign = document.querySelectorAll('.button-design'),
        popupDesign = document.querySelector('.popup-design'),
        gift = document.getElementsByClassName('fixed-gift wow pulse infinite')[0],

        popupGift = document.querySelector('.popup-gift'),
        buttonConsultation = document.querySelectorAll('.button-consultation'),
        popupConsultation = document.querySelector('.popup-consultation'),
        close = document.querySelectorAll('.popup-close'),
        elements = document.getElementsByTagName('img')[0];


    buttonDesign.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            popupDesign.style.display = 'block';
            popupDesign.classList.add('.more-splash');
            document.body.style.overflow = 'hidden';

        });
    });
    gift.addEventListener('click', function (e) {
        e.preventDefault();
        popupGift.style.display = 'block';
        popupGift.classList.add('.more-splash');
        document.body.style.overflow = 'hidden';
        elements.parentNode.removeChild(elements);


    });

    buttonConsultation.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            popupConsultation.style.display = 'block';
            popupConsultation.classList.add('.more-splash');
            document.body.style.overflow = 'hidden';

        });
    });

    close.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            popupConsultation.style.display = 'none';
            popupDesign.style.display = 'none';
            popupGift.style.display = 'none';
            popupGift.classList.remove('.more-splash');
            popupGift.remove(popupGift);
            document.body.style.overflow = '';

        });

    });


    window.addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target == popupDesign) {
            popupDesign.style.display = 'none';
            document.body.style.overflow = '';
        } else if (e.target == popupConsultation) {
            popupConsultation.style.display = 'none';
            document.body.style.overflow = '';
        } else if (e.target == popupGift) {
            popupGift.remove(popupGift);
            popupGift.style.display = 'none';
            document.body.style.overflow = '';

        }
    });
    let size = document.querySelector('#size'),
    material = document.querySelector('#material'),
    options = document.querySelector('#options'),
    promocode = document.querySelector('.promocode'),
    priceInput = document.querySelector('.calc-price');
let sizeChange= {
  1: 500,
  2: 1000,
  3: 1500,
  4: 2000
},
    materialChange = {
  1: 500,
  2: 1000,
  3: 1500
},
    optionsChange = {
  1: 500,
  2: 1000,
  3: 2000
};

function change() {
  if (size.options.selectedIndex > 0 && material.options.selectedIndex > 0) {
    let price = sizeChange[size.options.selectedIndex] + materialChange[material.options.selectedIndex];

    if (options.options.selectedIndex > 0) {
      price = price + optionsChange[options.options.selectedIndex];
    }

    if (promocode.value == 'IWANTPOPART') {
      price = price * 0.7;
    }

    priceInput.textContent = price;
  } else {
    priceInput.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
  }
}

size.addEventListener('change', function () {
  change();
});
material.addEventListener('change', function () {
  change();
});
options.addEventListener('change', function () {
  change();
});
promocode.addEventListener('input', function () {
  change();
});

      calc();
   

    //picture
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
//slider 
    // let slider = document.querySelectorAll('.feedback-slider-item'),
    //     prevBtn = document.querySelector('.main-prev-btn'),
    //     nextBtn = document.querySelector('.main-next-btn'),
    //     slideIndexH = 1;


    // function showSlider(n) {
    //     if (n > slider.length) {
    //         slideIndexH = 1;
    //     }
    //     if (n < 1) {
    //         slideIndexH = slider.length;
    //     }
    //     slider.forEach((item) => item.style.display = 'none');
    //     slider[slideIndexH - 1].style.display = 'block';

    // }

    // function plusSlider(n) {
    //     showSlider(slideIndexH += n);
    // }

    // prevBtn.addEventListener('click', function () {
    //     plusSlider(-1);
    // });
    // nextBtn.addEventListener('click', function () {
    //     plusSlider(1);
    // });
    // let timerHoriz = setInterval(() => {
    //     nextBtn.click();
    // }, 5000);

    // showSlider(timerHoriz);

    //accordion
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

    // for (let i = 0; i < accordionHeading.length; i++) {
    //     let curTitle = accordionHeading[i];
    //     accordionHeading[i].addEventListener('click', function() {
    //         this.style.color = 'red';
    //         let classes = this.getAttribute('class'),
    //             newClasses = '',
    //             classesArr = classes.split(' '),
    //             newClassesArr = classes.split(' ');
    //         for (let j = 0; j < classesArr.length; j++) {
    //             if (classesArr[j] == 'active') {
    //                 classesArr.splice([j], 1);

    //             }
    //         }
    //         if (classesArr.length === newClassesArr.length) {
    //             classesArr.push('active');

    //             newClasses = classesArr.join(' ');
    //         } else {

    //             newClasses = classesArr.join(' ');
    //         }

    //         for (let l = 0; l < accordionHeading.length; l++) {
    //              let oldClasses = accordionHeading[l].getAttribute('class');
    //            let oldClassesArr = oldClasses.split(' ');

    //             for (let k = 0; k < oldClassesArr.length; k++) {
    //                 if (oldClassesArr[k] == 'active') {

    //                     oldClassesArr.splice([k], 1);
    //                 }
    //                 oldClasses = oldClassesArr.join(' ');
    //                 accordionHeading[l].setAttribute('class', oldClasses);

    //             }

    //         }
    //         this.setAttribute('class', newClasses);
    //     });
    // }

    //valid
    let textArea = document.getElementsByTagName('textarea')[0],
        input = document.getElementsByTagName('input');
    for (let i = 0; i < input.length; i++) {
        if (input[i].name == 'phone' && valid == true) {
            input[i].addEventListener('keyup', function () {
                input[i].value = input[i].value.replace(/[^\+0-9\(\) ]/ig, '');
            });
        } else if (input[i].name == 'name' && valid == true) {
            input[i].addEventListener('keyup', function () {
                input[i].value = input[i].value.replace(/[^а-яА-ЯёЁ\s]/ig, '');
            });
        } else if (input[i].name == 'email' && valid == true) {
            input[i].addEventListener('keyup', function () {
                input[i].value = input[i].value.replace(/[^a-zA-Z0-9/.@.\.]/ig, '');
            });
        } else if (input[i].name == 'message' && valid == true) {
            input[i].addEventListener('keyup', function () {
                input[i].value = input[i].value.replace(/[^а-яА-ЯёЁ\s]/ig, '');
            });
        }
    }
    textArea.addEventListener('keyup', function () {
        textArea.value = textArea.value.replace(/[^а-яА-ЯёЁ\s]/ig, '');
    });

    //
    let b = document.getElementsByTagName('button'),
        check;

    let but = function () {
        for (let i = 0; i < b.length; i++) {
            b[i].onclick = function () {
                console.log(this.innerHTML);
            };
        }
    };
    if (but()) {
        check = false;
    } else {
        check = true;
    }
    console.log(check);
    if (check) {
        window.onscroll = function () {
            let clientHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
            let documentHeight = document.documentElement.scrollHeight ? document.documentElement.scrollHeight : document.body.scrollHeight;
            let scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

            if ((documentHeight - clientHeight) <= scrollTop) {

                if (popupGift) {
                    popupGift.style.display = 'block';
                    popupGift.classList.add('.more-splash');
                    document.body.style.overflow = 'hidden';
                    elements.remove(elements);
                    document.body.style.overflow = '';

                }
            }

        }
    }

    //timer modal
    setTimeout(function () {
        popupConsultation.style.display = 'block';
        popupConsultation.classList.add('.more-splash');
        document.body.style.overflow = 'hidden';
    }, 60000);

    //burger
    let burger = document.getElementsByClassName('burger')[0],
        li = document.getElementsByClassName('burger-menu');
   
    if (window.innerWidth <= 768) {
        console.log(burger);
        burger.addEventListener('click', function () {
            if (li[0].style.display == 'none' || li[0].style.display == '') {
                li[0].style.display = 'block';
            } else {
                li[0].style.display = 'none';
            }
        });
    } else {
        li[0].style.display = 'none';
    }
//style
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

    function clickfilter(){
        
    }


    let filter = document.querySelectorAll('.portfolio-menu li'),
        lovers = document.getElementsByClassName('portfolio-block lovers'),
        guy = document.getElementsByClassName('portfolio-block guy'),
        chef = document.getElementsByClassName('portfolio-block chef'),
        guyButton = document.getElementsByClassName('guy')[0],
        loversButton = document.getElementsByClassName('lovers')[0],
        girlButton = document.getElementsByClassName('girl')[0],
        chefButton = document.getElementsByClassName('chef')[0],
        allButton = document.getElementsByClassName('all')[0],
        grandFatherButton = document.getElementsByClassName('granddad')[0],
        grandMotherButton = document.getElementsByClassName('grandmother')[0],
        girl = document.getElementsByClassName('portfolio-block girl'),
        all = document.getElementsByClassName('portfolio-block all'),
        noPortfolio = document.getElementsByClassName('portfolio-no')[0];
        console.log(noPortfolio);
    girlButton.addEventListener('click', function(){
        for( var i = 0; i < filter.length; i++){
            if(this.classList) {
              for (var j = 0; j < filter.length; j++) {
                filter[j].classList.remove('active');
              }
              this.classList.add('active');
                  
  
            } else {
              this.active += '' + active;
            }
        }
        for(let i = 0; i < girl.length; i++) {
            girl[i].style.display = 'block';
        }

                for(let i = 0; i < lovers.length; i++) {
                    lovers[i].style.display = 'none';
                }
                for(let i = 0; i < guy.length; i++) {
                    guy[i].style.display = 'none';
                }
                for(let i = 0; i < chef.length; i++) {
                    chef[i].style.display = 'none';
                }
    });

    guyButton.addEventListener('click', function(){
        for( var i = 0; i < filter.length; i++){
            if(this.classList) {
              for (var j = 0; j < filter.length; j++) {
                filter[j].classList.remove('active');
              }
              this.classList.add('active');
                  
  
            } else {
              this.active += '' + active;
            }
        }
        for(let i = 0; i < guy.length; i++) {
            guy[i].style.display = 'block';
        }
                for(let i = 0; i < lovers.length; i++) {
                    lovers[i].style.display = 'none';
                }
                for(let i = 0; i < girl.length; i++) {
                    girl[i].style.display = 'none';
                }
                for(let i = 0; i < chef.length; i++) {
                    chef[i].style.display = 'none';
                }
    });
    
    loversButton.addEventListener('click', function(){
        for( var i = 0; i < filter.length; i++){
            if(this.classList) {
              for (var j = 0; j < filter.length; j++) {
                filter[j].classList.remove('active');
              }
              this.classList.add('active');
                  
  
            } else {
              this.active += '' + active;
            }
        }
        for(let i = 0; i < lovers.length; i++) {
            lovers[i].style.display = 'block';
        }
                for(let i = 0; i < guy.length; i++) {
                    guy[i].style.display = 'none';
                }
                for(let i = 0; i < girl.length; i++) {
                    girl[i].style.display = 'none';
                }
                for(let i = 0; i < chef.length; i++) {
                    chef[i].style.display = 'none';
                }
    });

    chefButton.addEventListener('click', function(){
        for( var i = 0; i < filter.length; i++){
            if(this.classList) {
              for (var j = 0; j < filter.length; j++) {
                filter[j].classList.remove('active');
              }
              this.classList.add('active');
                  
  
            } else {
              this.active += '' + active;
            }
        }
        for(let i = 0; i < chef.length; i++) {
            chef[i].style.display = 'block';
        }
                for(let i = 0; i < lovers.length; i++) {
                    lovers[i].style.display = 'none';
                }
                for(let i = 0; i < girl.length; i++) {
                    girl[i].style.display = 'none';
                }
                for(let i = 0; i < guy.length; i++) {
                    guy[i].style.display = 'none';
                }
    });

    allButton.addEventListener('click', function(){
        for( var i = 0; i < filter.length; i++){
            if(this.classList) {
              for (var j = 0; j < filter.length; j++) {
                filter[j].classList.remove('active');
              }
              this.classList.add('active');
                  
  
            } else {
              this.active += '' + active;
            }
        }
        for(let i = 0; i < all.length; i++) {
            all[i].style.display = 'block';
        }
    });
    grandFatherButton.addEventListener('click', function(){
        for( var i = 0; i < filter.length; i++){
            if(this.classList) {
              for (var j = 0; j < filter.length; j++) {
                filter[j].classList.remove('active');
              }
              this.classList.add('active');
                  
  
            } else {
              this.active += '' + active;
            }
        }
        for(let i = 0; i < chef.length; i++) {
            chef[i].style.display = 'none';
        }
                for(let i = 0; i < lovers.length; i++) {
                    lovers[i].style.display = 'none';
                }
                for(let i = 0; i < girl.length; i++) {
                    girl[i].style.display = 'none';
                }
                for(let i = 0; i < guy.length; i++) {
                    guy[i].style.display = 'none';
                }
        
            noPortfolio.style.display = 'block';               
    });
    grandMotherButton.addEventListener('click', function(){
        for( var i = 0; i < filter.length; i++){
            if(this.classList) {
              for (var j = 0; j < filter.length; j++) {
                filter[j].classList.remove('active');
              }
              this.classList.add('active');
                  
  
            } else {
              this.active += '' + active;
            }
        }
        
        for(let i = 0; i < chef.length; i++) {
            chef[i].style.display = 'none';
        }
                for(let i = 0; i < lovers.length; i++) {
                    lovers[i].style.display = 'none';
                }
                for(let i = 0; i < girl.length; i++) {
                    girl[i].style.display = 'none';
                }
                for(let i = 0; i < guy.length; i++) {
                    guy[i].style.display = 'none';
                }
            noPortfolio.style.display = 'block';               
    });
    // 
    //     filter[i].onclick = function(){
    //       if(this.classList) {
    //         for (var j = 0; j < filter.length; j++) {
    //           filter[j].classList.remove('active');
    //         }
    //         this.classList.add('active');
                

    //       } else {
    //         this.active += '' + active;
    //       }
    //     }
    //   }



//form
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };



    let form = document.querySelector('.form'),
        inputForm = form.getElementsByTagName('input'),
        formone = document.querySelector('.form-one'),
        formtwo = document.querySelector('.form-two'),
        inputForm1 = formone.getElementsByTagName('input'),
        inputForm2 = formtwo.getElementsByTagName('input'),

        statusMessage = document.createElement('div');



    statusMessage.classList.add('status');


    let inputFormm = function (e) {
        e.addEventListener('submit', function (event) {
            event.preventDefault();

            e.appendChild(statusMessage);


            let request = new XMLHttpRequest();
            request.open('POST', 'mailer/smart.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            let formData = new FormData(e);
            let obj = {}; // создаем объект для формата JSON
            formData.forEach(function (value, key) {
                obj[key] = value;
            });

            let json = JSON.stringify(obj);
            request.send(json);


            request.addEventListener('readystatechange', function () {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });

            for (let i = 0; i < inputForm.length; i++) {
                inputForm[i].value = '';
            }
            for (let i = 0; i < inputForm1.length; i++) {
                inputForm1[i].value = '';
            }
            for (let i = 0; i < inputForm2.length; i++) {
                inputForm2[i].value = '';
            }
        });
    };
    inputFormm(form);
    inputFormm(formone);
    inputFormm(formtwo);




});