const popupBtn = document.querySelector('#popup__btn')
const footerBtn = document.querySelector('.footer__mobile-popup')
const popup = document.querySelector('.popup')


footerBtn.addEventListener('click', () => {
    popup.classList.add('active')
    document.body.classList.add('noscroll')
})

popupBtn.addEventListener('click', () => {
    popup.classList.remove('active')
    document.body.classList.remove('noscroll')
})