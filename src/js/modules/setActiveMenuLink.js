export function setActiveMenuLink() {
  const menu = document.querySelector('.sidebar')

  if (menu) {
    const links = menu.querySelectorAll('._link')

    document.addEventListener('DOMContentLoaded', () => {
      const path = location.pathname.split('/')[1]

      links.forEach((link) => link.classList.remove('_active'))
      document.querySelector(`[href="${path}"]`).classList.add('_active')
    })
  }
}
