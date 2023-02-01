//POPOVERS
let submenuToggle = document.querySelector('.toggle-submenu');
let submenu = document.querySelector('.popover-submenu');
let searchToggle = document.querySelector('.search');
let searchPopover = document.querySelector('.popover-search');
let loginToggle = document.querySelector('.toggle-login');
let loginPopover = document.querySelector('.popover-login');
let cartToggle = document.querySelector('.toggle-cart');
let fullCart = document.querySelector('.popover-cart-full')
let modalToggle = document.querySelector('.toggle-modal');
let modalWindow = document.querySelector('.modal-container');
let crossButton = document.querySelector('.modal-cross-button');

//POPOVER CLOSE
function popoverClose(popover, popoverToggle) {
  popoverToggle.classList.remove('opened');
  popover.classList.remove('popover-open');
}

function allPopoversClose() {
  popoverClose(submenu, submenuToggle);
  popoverClose(searchPopover, searchToggle);
  popoverClose(loginPopover, loginToggle);
  popoverClose(fullCart, cartToggle);
}


//POPOVERS-OPENED
submenuToggle.addEventListener('click', function (){
  if (submenu.classList.contains('popover-open')) {
    popoverClose(submenu, submenuToggle);
  } else {
    allPopoversClose();
    submenuToggle.classList.add('opened');
    submenu.classList.add('popover-open');
  }
})

searchToggle.addEventListener('click', function (){
  if (searchPopover.classList.contains('popover-open')) {
    popoverClose(searchPopover, searchToggle);
  } else {
    allPopoversClose();
    searchToggle.classList.add('opened');
    searchPopover.classList.add('popover-open');
  }
})

loginToggle.addEventListener('click', function (){
  if (loginPopover.classList.contains('popover-open')) {
    popoverClose(loginPopover, loginToggle);
  } else {
    allPopoversClose();
    loginToggle.classList.add('opened');
    loginPopover.classList.add('popover-open');
  }
})

cartToggle.addEventListener('click', function (){
  if (fullCart.classList.contains('popover-open')) {
    popoverClose(fullCart, cartToggle);
  } else {
    allPopoversClose();
    cartToggle.classList.add('opened');
    fullCart.classList.add('popover-open');
  }
})

modalToggle.addEventListener('click', function (event){
  event.preventDefault();
  modalWindow.classList.remove('modal-container-close');
})

crossButton.addEventListener('click', function () {
  modalWindow.classList.add('modal-container-close');
})

//SLIDER
const theme = document.querySelector('.page-wrapper');
const classTheme = ['pink-theme', 'blue-theme', 'yellow-theme'];
const sliderItems = document.querySelectorAll('.slider-item');
const paginationItems = document.querySelectorAll('.button-pagination');
let buttonRight = document.querySelector('.slider-right');
let buttonLeft = document.querySelector('.slider-left');

function disableButtonRight() {
  if (sliderItems[2].classList.contains('slider-item-active')) {
    buttonRight.classList.add('disabled');
  } else
  {
    buttonRight.classList.remove('disabled');
  }
}

function disableButtonLeft() {
  if (sliderItems[0].classList.contains('slider-item-active')) {
    buttonLeft.classList.add('disabled');
  } else
  {
    buttonLeft.classList.remove('disabled');
  }
}

function sliderItemNull(a) {
    sliderItems[a].classList.remove('slider-item-active');
    sliderItems[a].classList.add('slider-item-next');
    paginationItems[a].classList.remove('current');
    theme.classList.remove(classTheme[a]);
}

function sliderItemActive(a) {
  sliderItems[a].classList.remove('slider-item-next');
  sliderItems[a].classList.add('slider-item-active');
  paginationItems[a].classList.add('current');
  theme.classList.add(classTheme[a]);
}


function sliderNull() {
  for (let i=0; i<3; i++) {
    sliderItemNull(i);
  }
}

buttonRight.addEventListener('click', function () {
  for (let i=0; i<2; i++) {
    if (sliderItems[i].classList.contains('slider-item-active')) {
      sliderItemNull(i);
      sliderItemActive(i + 1);
      break;
    }
  }
  disableButtonRight();
  disableButtonLeft();
})

buttonLeft.addEventListener('click', function () {
  for (let i=2; i>0; i--) {
    if (sliderItems[i].classList.contains('slider-item-active')) {
      sliderItemNull(i);
      sliderItemActive(i - 1);
      break;
    }
  }
  disableButtonRight();
  disableButtonLeft();
})

for (let i=0; i<3; i++) {
  paginationItems[i].addEventListener('click', function () {
    sliderNull();
    sliderItemActive(i);
  })
}
