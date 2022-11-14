const cookieExist = (cookies, cookieKey, validPins) => {
  return cookies.some(([key, value]) => {
    return key === cookieKey && validPins.includes(value.split(',')[2])
  })
}

export { cookieExist }
