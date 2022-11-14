import { sidebar } from '../helpers/elementsNodeList'

export function setActiveMenuLink() {
  if (sidebar) {
    const links = sidebar.querySelectorAll('._link')

    document.addEventListener('DOMContentLoaded', () => {
      const path = location.pathname.split('/')[1]

      links.forEach((link) => link.classList.remove('_active'))
      document.querySelector(`[href="${path}"]`).classList.add('_active')
    })
  }
}
