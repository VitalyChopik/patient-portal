import * as flsFunctions from './modules'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

flsFunctions.isWebp()

async function checkLogin() {
  const response = await fetch('http://localhost:3000/files/db.json')
  const { pinList } = await response.json()

  const cookie = document.cookie.split('=')
  const res = pinList.find(({ code }) => code === cookie[1])

  console.log(location)
  

  if (cookie[0] !== '_SID') {
    // location.pathname = '/'
  }

  console.log(cookie);
}

document.addEventListener('DOMContentLoaded', checkLogin)
// checkLogin()


flsFunctions.inputPin()