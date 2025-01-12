const btnMoon = document.querySelector('[data-js="icon-moon"]')
const body = document.body
const headerLogo = document.querySelector('.header-logo')

btnMoon.addEventListener('click', (e) => {
    const element = e.target
    if (element.src.includes('Moon.png')) {
        element.src = 'http://127.0.0.1:5500/img/Sun.png';
        body.classList.add('active')
        headerLogo.classList.add('color-black')
    } else if (element.src.includes('Sun.png')) {
        element.src = 'http://127.0.0.1:5500/img/Moon.png';
        body.classList.remove('active')
    }
})
