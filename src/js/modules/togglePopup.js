import { miniPopupDataText, imagePopupDataSrc } from '../data'
import { mainContentContainer } from '../helpers/elementsNodeList'
import { createMiniPopupNode } from './createMiniPopup'
import { createImagePopup } from './createImagePopup'
import { toggleBodyLock } from './toggleBodyLock'
import { checkSidebarWidth } from './checkSidebarWidth'

export function togglePopup() {
  if (mainContentContainer) {
    document.onclick = (event) => {
      const target = event.target
      const createTarget = target.closest('[data-small-modal]')
      const openImagePopupTarget = target.closest('[data-image-popup]')
      
      if (target && createTarget) {
        const keySearchItem = createTarget && createTarget.getAttribute('data-small-modal')
        const { modalOverlayNode, textNode } = createMiniPopupNode()

        textNode.innerHTML = miniPopupDataText[keySearchItem]
        toggleBodyLock(true)

        if (window.innerWidth > 1024) {
          document.body.classList.add('_sidebar-close')
          checkSidebarWidth()
        }

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