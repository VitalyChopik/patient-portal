export function accordion() {
  //accordion

  const accordion = document.querySelector('.accordion')
  if (accordion) {
    const items = accordion.querySelectorAll('.accordion__item')
    const title = accordion.querySelectorAll('.accordion__title')

    function toggleAccordion() {
      const thisItem = this.parentNode

      items.forEach((item) => {
        if (thisItem == item) {
          // if this item is equal to the clicked item, open it.
          thisItem.classList.toggle('active')
          return
        }
        // otherwise, remove the open class
        item.classList.remove('active')
      })
    }

    title.forEach((question) =>
      question.addEventListener('click', toggleAccordion)
    )
    //end accordion
  }
}
