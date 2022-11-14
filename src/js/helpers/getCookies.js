const getCookies = () => document.cookie
  .split('; ')
  .map((cookieString) => cookieString.split('='))

export { getCookies }