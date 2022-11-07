import * as flsFunctions from './modules'
import { checkIfCookieExist } from './modules/checkIfCookieExist'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

flsFunctions.isWebp()
if (location.pathname === '/') flsFunctions.inputPin()
document.addEventListener('DOMContentLoaded', checkIfCookieExist)

const sidebarBtn = document.querySelector('.sidebar__button')

if (sidebarBtn) {
  sidebarBtn.addEventListener('click', () => {
    document.body.classList.toggle('_sidebar-show')
  })
}