import { body } from '../helpers/elementsNodeList'

export function createMiniPopupNode() {
  const modalOverlayNode = document.createElement('div')
  const modalBodyNode = document.createElement('div')
  const buttonCloseNode = document.createElement('button')
  const textNode = document.createElement('p')

  modalBodyNode.append(buttonCloseNode, textNode)
  modalOverlayNode.append(modalBodyNode)
  body.append(modalOverlayNode)
  
  modalOverlayNode.setAttribute('data-close-popup', '')
  buttonCloseNode.setAttribute('type', 'button')
  buttonCloseNode.setAttribute('data-close-popup', '')
  buttonCloseNode.innerHTML = `
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M0.822313 1.56411C0.617445 1.35924 0.617444 1.02709 0.822313 0.822218C1.02718 0.61735 1.35934 0.61735 1.56421 0.822219L10.4669 9.72495C10.6718 9.92982 10.6718 10.262 10.4669 10.4668C10.2621 10.6717 9.92991 10.6717 9.72504 10.4668L0.822313 1.56411Z" fill="#E69D4A"/>
      <path d="M1.56421 10.4668C1.35934 10.6717 1.02718 10.6717 0.822313 10.4668C0.617444 10.262 0.617444 9.92982 0.822313 9.72495L9.72504 0.822218C9.92991 0.61735 10.2621 0.61735 10.4669 0.822218C10.6718 1.02709 10.6718 1.35924 10.4669 1.56411L1.56421 10.4668Z" fill="#E69D4A"/>
    </svg>
  `

  modalOverlayNode.classList.add('mini-popup', '_overlay')
  modalBodyNode.classList.add('mini-popup__body')
  textNode.classList.add('mini-popup__text')
  buttonCloseNode.classList.add('mini-popup__button-close')

  return { modalOverlayNode, textNode }
}
