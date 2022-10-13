export const checkIfCookieExist = async () => {
  const response = await fetch('http://localhost:3000/files/db.json')
  const { userList } = await response.json()

  const cookieKey = '_SID'
  const validPins = userList.map((user) => user.pin)
  const cookies = document.cookie.split('; ').map((cookieString) => cookieString.split('='))
  const isCookieExist = cookies.some(([key, value]) => (key === cookieKey) && validPins.includes(value))

  if (isCookieExist && location.pathname === '/') location.pathname = '/main.html'
  if (location.pathname === '/') return
  if (!isCookieExist) location.pathname = '/'
}
