export function showFullImage() {
  const moreBox = document.querySelector('.more')
  const showBtn = document.querySelector('.btn-show-more')
  const showBtn_text = document.querySelector('.btn-show-more .text-active')
  const BtnFull = document.querySelector('.btn-full')
  const ImageFull = document.querySelector('.image-full')
  const BtnFullClose = document.querySelector('.btn-close')
  const modalWrapper = document.querySelector('.modal-wrapper')

  if (showBtn) {
    showBtn.addEventListener('click', () => {
      showBtn.classList.toggle('active')
      showBtn_text.classList.toggle('active')
      moreBox.classList.toggle('show')
    })
  }
  if (BtnFull) {
    BtnFull.addEventListener('click', () => {
      ImageFull.classList.toggle('active')
    })
    BtnFullClose.addEventListener('click', () => {
      ImageFull.classList.toggle('active')
    })
    modalWrapper.addEventListener('click', () => {
      ImageFull.classList.toggle('active')
    })
  }
}
