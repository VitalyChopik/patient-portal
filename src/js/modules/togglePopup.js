import { miniPopupDataText, imagePopupDataSrc } from '../data'
import { createMiniPopupNode } from './createMiniPopup'
import { createImagePopup } from './createImagePopup'
import { toggleBodyLock } from './toggleBodyLock'

export function togglePopup() {
  const contentPage = document.querySelector('.content')

  if (contentPage) {
    document.onclick = (event) => {
      const target = event.target
      const createTarget = target.closest('[data-small-modal]')
      const openImagePopupTarget = target.closest('[data-image-popup]')
      const closeButton = target.closest('.mini-popup__button-close')
      
      if (target && createTarget) {
        const keySearchItem = createTarget && createTarget.getAttribute('data-small-modal')
        const { modalOverlayNode, textNode } = createMiniPopupNode()

        textNode.innerHTML = miniPopupDataText[keySearchItem]
        toggleBodyLock(true)

        setTimeout(() => {
          modalOverlayNode.classList.add('_show')
        }, 100)
      }

      if (target && (target.hasAttribute('data-close-popup') || target.closest('button[data-close-popup]'))) {
        target.closest('._overlay').classList.remove('_show')
        toggleBodyLock(false)

        setTimeout(() => {
          target.closest('._overlay').remove()
        }, 500)
      }

      if (target && openImagePopupTarget) {
        const keySearchItem = openImagePopupTarget && openImagePopupTarget.getAttribute('data-image-popup')

        console.log(keySearchItem);
        const { popupOverlayNode, imageNode } = createImagePopup()

        imageNode.setAttribute('src', imagePopupDataSrc[keySearchItem])
        toggleBodyLock(true)

        setTimeout(() => {
          popupOverlayNode.classList.add('_show')
        }, 100)
      }
    }
  }
}