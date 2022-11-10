import * as flsFunctions from './modules'
import { checkIfCookieExist } from './modules/checkIfCookieExist'
import { toggleSubMenu } from './modules/toggleSubMenu'
import { toggleBurgerMenu } from './modules/toggleBurgerMenu'
import { setActiveMenuLink } from './modules/setActiveMenuLink'
// import { showFullImage } from './modules/showFullImage'
import { accordion } from './modules/accordion'
// import { stickyMenu } from './modules/stickyMenu'
import { togglePopup } from './modules/togglePopup'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

flsFunctions.isWebp()
if (location.pathname === '/') flsFunctions.inputPin()
document.addEventListener('DOMContentLoaded', checkIfCookieExist)

flsFunctions.headerFixed()

toggleSubMenu()
toggleBurgerMenu()
setActiveMenuLink()
// showFullImage()
accordion()
// stickyMenu()
togglePopup()