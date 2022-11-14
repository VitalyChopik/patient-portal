import * as flsFunctions from './modules'
import { mainContentContainer } from './helpers/elementsNodeList'
import { checkIfCookieExist } from './modules/checkIfCookieExist'
import { toggleSubMenu } from './modules/toggleSubMenu'
import { toggleBurgerMenu } from './modules/toggleBurgerMenu'
import { setActiveMenuLink } from './modules/setActiveMenuLink'
import { showMoreText } from './modules/showMoreText'
import { togglePopup } from './modules/togglePopup'
import { checkSidebarWidth } from './modules/checkSidebarWidth'
import { newAccordion } from './modules/newAccordion'
import { inputPin } from './modules/auth'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

flsFunctions.isWebp()
flsFunctions.headerFixed()

if (location.pathname === '/') inputPin()
document.addEventListener('DOMContentLoaded', checkIfCookieExist)

if (window.innerWidth > 1024 && location.pathname !== '/') {
  checkSidebarWidth()
}

toggleSubMenu()
toggleBurgerMenu()
setActiveMenuLink()
showMoreText()
newAccordion()
togglePopup()

window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    checkSidebarWidth()
  } else {
    mainContentContainer.style.paddingLeft = 0
  }
})
