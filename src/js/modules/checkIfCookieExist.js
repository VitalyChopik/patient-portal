export const checkIfCookieExist = async () => {
  const response = await fetch('https://script.google.com/macros/s/AKfycbySwaA8H_OpIpAxSdDNCxFv_FigjTvbYPE1nmecgiCqaZf8X0hsJIBgjEBnhU5YsVWtOg/exec')
  const { objectAuth } = await response.json()

  const cookieKey = '_SID'
  const validPins = objectAuth.map(({Pin}) => Pin)
  const cookies = document.cookie.split('; ').map((cookieString) => cookieString.split('='))
  const isCookieExist = cookies.some(([key, value]) => (key === cookieKey) && validPins.includes(value))

  if (isCookieExist && location.pathname === '/') location.pathname = '/main.html'
  if (location.pathname === '/') return
  if (!isCookieExist) location.pathname = '/'
}
