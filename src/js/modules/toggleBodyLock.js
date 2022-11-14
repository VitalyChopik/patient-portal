import { body, pageWrapper } from '../helpers/elementsNodeList'

const toggleBodyLock = (isLock) => {
  const lockPaddingValue = window.innerWidth - pageWrapper.offsetWidth

  body.style.paddingRight = isLock ? `${lockPaddingValue}px` : '0px'
  body.classList.toggle('_lock', isLock)
}

export { toggleBodyLock }