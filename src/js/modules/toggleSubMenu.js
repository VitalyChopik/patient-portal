import { showSubMenuButton, closeSubMenuButton, subMenu } from '../helpers/elementsNodeList'

const toggleSubMenu = () => {
  if (subMenu) {
    showSubMenuButton.onclick = (e) => {
      e.preventDefault()

      subMenu.classList.toggle('_show-submenu')
      showSubMenuButton.classList.toggle('_active')
    }

    closeSubMenuButton.onclick = () => {
      subMenu.classList.remove('_show-submenu')
      showSubMenuButton.classList.remove('_active')
    }
  }
}

export { toggleSubMenu }
