//Slider
let sorusels = document.querySelectorAll('.human-corusel-rol')!
sorusels.forEach(element => {
  setInterval(() => {
    if(element.classList.contains('l-1')){
      element.classList.replace('l-1' , 'l-2')
    }
    else if(element.classList.contains('l-2')){
      element.classList.replace('l-2' , 'l-3')
    }
    else if(element.classList.contains('l-3')){
      element.classList.replace('l-3' , 'l-4')
    }
    else if(element.classList.contains('l-4')){
      element.classList.replace('l-4' , 'l-5')
    }
    else if(element.classList.contains('l-5')){
      element.classList.replace('l-5' , 'l-6')
    }
    else if(element.classList.contains('l-6')){
      element.classList.replace('l-6' , 'l-7')
    }
    else{
      element.classList.replace('l-7' , 'l-1')
    }
  },3000)
});
//Navbar
let nav:HTMLElement = document.querySelector('.navbar-menu')!
let btn:HTMLElement = document.querySelector('.navbar-btn')!

btn.onclick = () => {
  if(nav.classList.contains('act')){
    nav.classList.replace('act' , 'navbar-active')
  }
  else{
    nav.classList.replace('navbar-active' , 'act')
  }
}
