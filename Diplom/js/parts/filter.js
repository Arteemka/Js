
function filter() {
	"use strict";
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
}

module.exports = filter;