import { sidebarToggleButton, burgerButton } from '../helpers/elementsNodeList'
import { checkSidebarWidth } from './checkSidebarWidth'
import { toggleBodyLock } from './toggleBodyLock'

const toggleBurgerMenu = () => {
  let isLock = false

  if (sidebarToggleButton) {
    sidebarToggleButton.onclick = () => {
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

export { toggleBurgerMenu }