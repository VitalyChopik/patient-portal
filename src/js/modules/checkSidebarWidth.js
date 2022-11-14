export function checkSidebarWidth() {
  const sidebar = document.querySelector('.sidebar')
  const mainContentContainer = document.querySelector('.content')

  if (window.innerWidth > 1024) {
    sidebar.addEventListener('transitionend', changeWidthContent)
  } else {
    mainContentContainer.style.paddingLeft = 0
  }

  const changeWidthContent = () => {
    const sidebarWidth = sidebar.offsetWidth
    if (document.body.classList.contains('_sidebar-close')) {
      mainContentContainer.style.paddingLeft = 0
    } else {
      mainContentContainer.style.paddingLeft = `${sidebarWidth}px`
    }
  }

  changeWidthContent()
}
