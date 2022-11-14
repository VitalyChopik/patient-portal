import { createCookie } from '../helpers/createCookie'
import { form, allInputs, buttonSubmit } from '../helpers/elementsNodeList'

export function inputPin() {
  const DATA_URL = 'https://script.google.com/macros/s/AKfycbySwaA8H_OpIpAxSdDNCxFv_FigjTvbYPE1nmecgiCqaZf8X0hsJIBgjEBnhU5YsVWtOg/exec'

  form.addEventListener('submit', checkPin)
  allInputs.forEach((input, index) => {
    input.dataset.index = index

    input.addEventListener('paste', handlePinPaste)
    input.addEventListener('keyup', handlePin)
  })

  async function checkPin(event) {
    event.preventDefault()

    try {
      buttonSubmit.disabled = true

      const response = await fetch(DATA_URL)
      const { objectAuth } = await response.json()

      const enteredPin = submit()
      const isValidPin = objectAuth.some(({ Pin }) => Pin === enteredPin)

      if (isValidPin) {
        console.log('Пароль введен верно!')
        const loginInfo = objectAuth.find(({ Pin }) => Pin === 'AfLfJp')

        location.pathname = 'main.html'
        createCookie('_SID', loginInfo, 30)
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