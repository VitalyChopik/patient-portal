export function newAccordion() {
  const accordionItems = document.querySelectorAll('.accordion__item')
  const accordionContainer = document.querySelector('.accordion')

  accordionItems.forEach((item, index) => {
    const header = item.querySelector('.accordion__header')
    const content = item.querySelector('.accordion__content')

    if (item.hasAttribute('data-open')) {
      item.classList.add('active')
      content.style.height = `${content.scrollHeight}px`
    }
    const colorBackground = item.dataset.colorBack
    const colorBorder = item.dataset.colorBorder

    if (colorBackground || colorBorder) {
      item.style.background = colorBackground
      item.style.borderColor = colorBorder
    }

    header.addEventListener('click', () => {
      item.classList.toggle('active')

      if (item.classList.contains('active')) {
        content.style.height = `${content.scrollHeight}px`
      } else {
        content.style.height = 0
      }

      if (accordionContainer.dataset.autoClosing === 'true') {
        removeOpen(index)
      }
    })
  })
  
  function removeOpen(i) {
    accordionItems.forEach((item, index) => {
      if (i != index) {
        const content = item.querySelector('.accordion__content')

        item.classList.remove('active')
        content.style.height = 0
      }
    })
  }
}