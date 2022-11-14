import { moreBoxContainer, showMoreButton, showMoreButtonText } from '../helpers/elementsNodeList'

export function showMoreText() {
  if (showMoreButton) {
    showMoreButton.addEventListener('click', () => {
      showMoreButton.classList.toggle('active')
      showMoreButtonText.classList.toggle('active')
      moreBoxContainer.classList.toggle('show')
    })
  }
}
