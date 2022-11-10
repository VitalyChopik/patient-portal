import * as flsFunctions from './modules'
import { checkIfCookieExist } from './modules/checkIfCookieExist'
import { toggleSubMenu } from './modules/toggleSubMenu'
import { toggleBurgerMenu } from './modules/toggleBurgerMenu'
import { setActiveMenuLink } from './modules/setActiveMenuLink'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

flsFunctions.isWebp()
if (location.pathname === '/') flsFunctions.inputPin()
document.addEventListener('DOMContentLoaded', checkIfCookieExist)

flsFunctions.headerFixed()
toggleSubMenu()
toggleBurgerMenu()
setActiveMenuLink()

const moreBox = document.querySelector('.more')
const showBtn = document.querySelector('.btn-show-more')
const showBtn_text = document.querySelector('.btn-show-more .text-active')
const BtnFull = document.querySelector('.btn-full')
const ImageFull = document.querySelector('.image-full')
const BtnFullClose = document.querySelector('.btn-close')
const modalWrapper = document.querySelector('.modal-wrapper')

if (showBtn) {
  showBtn.addEventListener('click', () => {
    showBtn.classList.toggle('active')
    showBtn_text.classList.toggle('active')
    moreBox.classList.toggle('show')
  })
}
if (BtnFull) {
  BtnFull.addEventListener('click', () => {
    ImageFull.classList.toggle('active')
  })
  BtnFullClose.addEventListener('click', () => {
    ImageFull.classList.toggle('active')
  })
  modalWrapper.addEventListener('click', () => {
    ImageFull.classList.toggle('active')
  })
}


//accordion 

const accordion = document.querySelector('.accordion');

if (accordion) {
  const items = accordion.querySelectorAll('.accordion__item');
  const title = accordion.querySelectorAll('.accordion__title');

  function toggleAccordion() {
    let thisItem = this.parentNode;
    
    items.forEach(item => {
      if (thisItem == item ) {
        // if this item is equal to the clicked item, open it.
        thisItem.classList.toggle('active');
        return;
      } 
      // otherwise, remove the open class
      item.classList.remove('active');
    });
  }
  
  title.forEach(question => question.addEventListener('click', toggleAccordion));
  
}
//end accordion