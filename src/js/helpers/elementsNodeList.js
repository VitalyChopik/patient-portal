const body = document.body
const pageWrapper = document.querySelector('.wrapper')
const form = document.getElementById('login-form')
const allInputs = document.querySelectorAll('.pin__input')
const buttonSubmit = document.querySelector('.pin__button')
const sidebar = document.querySelector('.sidebar')
const sidebarToggleButton = document.querySelector('.sidebar__button')
const burgerButton = document.querySelector('.header__burger-icon')
const mainContentContainer = document.querySelector('.content')
const accordionItems = document.querySelectorAll('.accordion__item')
const accordionContainer = document.querySelector('.accordion')
const moreBoxContainer = document.querySelector('.more')
const showMoreButton = document.querySelector('.btn-show-more')
const showMoreButtonText = document.querySelector('.btn-show-more .text-active')
const showSubMenuButton = document.querySelector('.menu__link_button span')
const closeSubMenuButton = document.querySelector('.sub-menu__item_back')
const subMenu = document.querySelector('.sub-menu__list')

export {
  body,
  pageWrapper,
  form,
  allInputs,
  buttonSubmit,
  sidebar,
  sidebarToggleButton,
  burgerButton,
  mainContentContainer,
  accordionItems,
  accordionContainer,
  moreBoxContainer,
  showMoreButton,
  showMoreButtonText,
  showSubMenuButton,
  closeSubMenuButton,
  subMenu,
}
