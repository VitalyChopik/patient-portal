export function toggleSubMenu() {
  const showSubMenuButton = document.querySelector('.menu__link_button span')
  const closeSubMenuButton = document.querySelector('.sub-menu__item_back')
  const subMenu = document.querySelector('.sub-menu__list')

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
