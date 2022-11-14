export const checkIfCookieExist = async () => {
  const response = await fetch(
    'https://script.google.com/macros/s/AKfycbySwaA8H_OpIpAxSdDNCxFv_FigjTvbYPE1nmecgiCqaZf8X0hsJIBgjEBnhU5YsVWtOg/exec'
  )
  const { objectAuth } = await response.json()

  const cookieKey = '_SID'
  const validPins = objectAuth.map(({ Pin }) => Pin)

  const cookies = document.cookie
    .split('; ')
    .map((cookieString) => cookieString.split('='))

  const isCookieExist = cookies.some(
    ([key, value]) =>
      key === cookieKey && validPins.includes(value.split(',')[2])
  )

  const obj = isCookieExist && cookies
  .find(([key, _]) => key === cookieKey)[1]
  .split(',')
  .map((value) => value)

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'login',
    user_id: obj[1],
    employee: obj[0],
    pin: obj[2],
    authorization: '1',
  })

  if (isCookieExist && location.pathname === '/')
    location.pathname = '/main.html'
  if (location.pathname === '/') return
  if (!isCookieExist) location.pathname = '/'
}
