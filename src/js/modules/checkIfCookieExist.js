import { getCookies } from '../helpers/getCookies'
import { cookieExist } from '../helpers/cookieExist'

export const checkIfCookieExist = async () => {
  window.dataLayer = window.dataLayer || []

  const response = await fetch('https://script.google.com/macros/s/AKfycbySwaA8H_OpIpAxSdDNCxFv_FigjTvbYPE1nmecgiCqaZf8X0hsJIBgjEBnhU5YsVWtOg/exec')
  const { objectAuth } = await response.json()

  const cookieKey = '_SID'
  const validPins = objectAuth.map(({ Pin }) => Pin)
  const cookies = getCookies()
  const isCookieExist = cookieExist(cookies, cookieKey, validPins)

  const [doctorId, userId, pin] = isCookieExist
    ? cookies.find(([key]) => key === cookieKey)[1].split(',')
    : []

  const dataLayerObject = isCookieExist
    ? {
        user_id: userId,
        employee: doctorId,
        authorization: '1',
      }
    : {
        authorization: '0',
      }

  window.dataLayer.push(dataLayerObject)

  if (isCookieExist && location.pathname === '/') location.pathname = '/main.html'
  if (location.pathname === '/') return
  if (!isCookieExist) location.pathname = '/'
}
