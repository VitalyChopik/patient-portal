import miniPopup from '../data/miniPopup'
import { createMiniPopupNode } from './createMiniPopup'
import { toggleBodyLock } from './toggleBodyLock'

export function toggleMiniPopup() {
  const contentPage = document.querySelector('.content')

  if (contentPage) {
    document.onclick = (event) => {
      const target = event.target
      const createTarget = target.closest('[data-small-modal]')
      const closeButton = target.closest('.mini-popup__button-close')
      
      if (target && createTarget) {
        const keySearchItem = createTarget && createTarget.getAttribute('data-small-modal')
        const { modalOverlayNode, textNode } = createMiniPopupNode()

        textNode.innerHTML = miniPopup[keySearchItem]
        toggleBodyLock(true)

        setTimeout(() => {
          modalOverlayNode.classList.add('_show')
        }, 100)
      }

      if (target && (closeButton || target.classList.contains('mini-popup'))) {
        target.closest('.mini-popup').classList.remove('_show')
        toggleBodyLock(false)

        setTimeout(() => {
          target.closest('.mini-popup').remove()
        }, 500)
      }
    }
  }
}