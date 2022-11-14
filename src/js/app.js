import * as flsFunctions from './modules'
import { checkIfCookieExist } from './modules/checkIfCookieExist'
import { toggleSubMenu } from './modules/toggleSubMenu'
import { toggleBurgerMenu } from './modules/toggleBurgerMenu'
import { setActiveMenuLink } from './modules/setActiveMenuLink'
import { showMoreText } from './modules/showMoreText'
import { accordion } from './modules/accordion'
// import { stickyMenu } from './modules/stickyMenu'
import { togglePopup } from './modules/togglePopup'
import { checkSidebarWidth } from './modules/checkSidebarWidth'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

flsFunctions.isWebp()
if (location.pathname === '/') flsFunctions.inputPin()
document.addEventListener('DOMContentLoaded', checkIfCookieExist)

flsFunctions.headerFixed()
if (window.innerWidth > 1024) {
  checkSidebarWidth()
}
toggleSubMenu()
toggleBurgerMenu()
setActiveMenuLink()
showMoreText()
accordion()
// stickyMenu()
togglePopup()

window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    checkSidebarWidth()
  } else {
    document.querySelector('.content').style.paddingLeft = 0
  }
})
