export const checkIfCookieExist = async () => {
  window.dataLayer = window.dataLayer || []

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

  const [doctorId, userId, pin] = isCookieExist
    ? cookies.find(([key]) => key === cookieKey)[1].split(',')
    : []

  const dataLayerObject = isCookieExist
    ? {
        event: 'login',
        user_id: userId,
        employee: doctorId,
        pin: pin,
        authorization: '1',
      }
    : {
        event: 'login_error',
        error: 'Пароль либо не ввели, либо не верно ввели',
        authorization: '0',
      }

  window.dataLayer.push(dataLayerObject)

  if (isCookieExist && location.pathname === '/')
    location.pathname = '/main.html'
  if (location.pathname === '/') return
  if (!isCookieExist) location.pathname = '/'
}
