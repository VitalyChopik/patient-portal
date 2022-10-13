import { createCookie } from './createCookie'

export function isWebp() {
  // Проверка поддержки webp
  function testWebp(callback) {
    let webP = new Image()
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2)
    }
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  }
  // Добавление класса _webp или _no-webp для HTML
  testWebp(function (support) {
    let className = support === true ? 'webp' : 'no-webp'
    document.documentElement.classList.add(className)
  })
}

export function inputPin() {
  const form = document.getElementById('login-form')
  const allInputs = form.querySelectorAll('.pin__input')
  const buttonSubmit = form.querySelector('.pin__button')

  form.addEventListener('submit', checkPin)
  allInputs.forEach((input, index) => {
    input.dataset.index = index

    input.addEventListener('paste', handlePinPaste)
    input.addEventListener('keyup', handlePin)
  })

  async function checkPin(event) {
    event.preventDefault()

    try {
      const pinUser = submit()
      const response = await fetch('http://localhost:3000/files/db.json')
      const { pinList } = await response.json()
      const res = pinList.find(({ code }) => code === pinUser)

      console.log(res);

      if (res) {
        console.log('Пароль введен верно!')

        location.pathname = 'main.html'
        createCookie('_SID', res.code, 30)
      } else {
        console.log('Вы ввели не верный пароль, попробуйте снова!')

        this.classList.add('_error')
      }
    } catch (error) {
      console.log(error)
    } finally {
      this.reset()
      buttonSubmit.disabled = true
      setTimeout(() => {
        this.classList.remove('_error')
        allInputs.forEach((input) => {
          input.disabled = false
          input.classList.remove('_disabled')
        })
      }, 2000)
    }
  }
  function handlePinPaste(event) {
    const data = event.clipboardData.getData('text')
    const value = data.split('')

    console.log(data)
    console.log(value)

    if (value.length === allInputs.length) {
      allInputs.forEach((input, index) => (input.value = value[index]))
      submit()
    }
  }
  function handlePin(event) {
    const input = event.target
    const fieldIndex = input.dataset.index
    const value = input.value

    input.value = ''
    input.value = value ? value[0] : ''

    console.log(fieldIndex)

    if (value.length > 0 && fieldIndex < allInputs.length - 1) {
      input.nextElementSibling.focus()
    }

    if (event.key === 'Backspace' && fieldIndex > 0) {
      input.previousElementSibling.focus()
    }

    if (fieldIndex == allInputs.length - 1) {
      submit()
    }
  }
  function submit() {
    let otp = ''

    allInputs.forEach((input) => {
      otp += input.value
      input.disabled = true
      input.classList.add('_disabled')
    })

    buttonSubmit.disabled = false
    return otp
  }
}
