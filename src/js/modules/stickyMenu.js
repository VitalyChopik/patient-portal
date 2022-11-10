export function stickyMenu() {
  const menu = document.querySelector('.menu')
  const menuElementObserv = document.querySelector('[data-menu-ovserv]')

  const callback = new IntersectionObserver(([entry]) => {
    if (entry.intersectionRatio === 0) {
      menu.classList.add('_sticky')
    } else {
      menu.classList.remove('_sticky')
    }
  })

  callback.observe(menuElementObserv)
}