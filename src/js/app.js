import * as flsFunctions from './modules'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

flsFunctions.isWebp()
if (location.pathname === '/') flsFunctions.inputPin()

const checkIfCookieExist = async () => {
  if (location.pathname === '/') return

  const response = await fetch('http://localhost:3000/files/db.json')
  const { userList } = await response.json()

  const cookieKey = '_SID'
  const validPins = userList.map((user) => user.pin)
  const cookies = document.cookie.split('; ').map((cookieString) => cookieString.split('='))
  const isCookieExist = cookies.some(([key, value]) => (key === cookieKey) && validPins.includes(value))

  if (!isCookieExist) location.pathname = '/'
};

document.addEventListener('DOMContentLoaded', checkIfCookieExist)
