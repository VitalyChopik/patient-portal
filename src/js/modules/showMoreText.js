export function showMoreText() {
  const moreBox = document.querySelector('.more')
  const showBtn = document.querySelector('.btn-show-more')
  const showBtn_text = document.querySelector('.btn-show-more .text-active')

  if (showBtn) {
    showBtn.addEventListener('click', () => {
      showBtn.classList.toggle('active')
      showBtn_text.classList.toggle('active')
      moreBox.classList.toggle('show')
    })
  }
}
