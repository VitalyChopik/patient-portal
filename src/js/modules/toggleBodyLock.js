export function toggleBodyLock(isLock) {
  const pageWrapper = document.querySelector('.wrapper')
  const lockPaddingValue = window.innerWidth - pageWrapper.offsetWidth

  document.body.style.paddingRight = isLock ? `${lockPaddingValue}px` : '0px'
  document.body.classList.toggle('_lock', isLock)
}
