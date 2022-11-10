export function createImagePopup() {
  const popupOverlayNode = document.createElement('div')
  const popupBodyNode = document.createElement('div')
  const popupButtonCloseNode = document.createElement('button')
  const imageContainerNode = document.createElement('div')
  const imageNode = document.createElement('img')

  imageContainerNode.append(imageNode)
  popupBodyNode.append(popupButtonCloseNode, imageContainerNode)
  popupOverlayNode.append(popupBodyNode)

  document.body.append(popupOverlayNode)

  popupOverlayNode.setAttribute('data-close-popup', '')
  popupButtonCloseNode.setAttribute('data-close-popup', '')
  popupButtonCloseNode.setAttribute('type', 'button')
  popupButtonCloseNode.innerHTML = `
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5061 0.292893C14.8966 0.683418 14.8966 1.31658 14.5061 1.70711L8.77818 7.435L14.435 13.0919C14.8256 13.4824 14.8256 14.1155 14.435 14.5061C14.0445 14.8966 13.4113 14.8966 13.0208 14.5061L7.36396 8.84921L1.77815 14.435C1.38762 14.8256 0.754457 14.8256 0.363932 14.435C-0.026592 14.0445 -0.026592 13.4113 0.363932 13.0208L5.94975 7.435L0.292893 1.77815C-0.0976311 1.38762 -0.0976311 0.754456 0.292893 0.363932C0.683417 -0.0265923 1.31658 -0.0265923 1.70711 0.363932L7.36396 6.02079L13.0919 0.292893C13.4824 -0.0976311 14.1155 -0.0976311 14.5061 0.292893Z" fill="white"/>
    </svg>
  `

  popupOverlayNode.classList.add('image-popup', '_overlay')
  popupBodyNode.classList.add('image-popup__body')
  popupButtonCloseNode.classList.add('image-popup__button-close')
  imageContainerNode.classList.add('image-popup__img')

  return { popupOverlayNode, imageNode }
}