import { checkSidebarWidth } from './checkSidebarWidth'
import { toggleBodyLock } from './toggleBodyLock'

export function toggleBurgerMenu() {
  const sidebarBtn = document.querySelector('.sidebar__button')
  const burgerButton = document.querySelector('.header__burger-icon')
  let isLock = false

  if (sidebarBtn) {
    sidebarBtn.onclick = () => {
      document.body.classList.toggle('_sidebar-close')
      setTimeout(() => checkSidebarWidth(), 280)
    }

    burgerButton.onclick = () => {
      isLock = !isLock

      document.querySelector('.sidebar').classList.toggle('_sidebar-show')
      toggleBodyLock(isLock)
    }
  }
}
