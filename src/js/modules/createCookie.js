export function createCookie(name, value, days) {
  const { DoctorId, UserId, Pin } = value
  
  let expires

  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = '; expires=' + date.toGMTString()
  } else {
    expires = ''
  }
  
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(DoctorId)},${encodeURIComponent(UserId)},${encodeURIComponent(Pin)}${expires}; path=/`
}
