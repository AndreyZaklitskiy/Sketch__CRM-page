window.addEventListener('load', function() {
    menuToggle();
})
function menuToggle() {
    const meinField = document.querySelector('.main-field');
    const menu = document.querySelector('.navigation__main-menu');
    const mainHamburger = document.querySelector('.navigation__hamburger')
    const smallHamburger = document.querySelector('.main-menu__hamburger')
    const dropdownMenu = document.querySelector('.navigation__main-menu')
    const html = document.querySelector('html')

    document.addEventListener('click', function(e) {
        console.log(e.target)
        /*==========[ Обработка клика по оверлею ]==========*/
        if(e.target === meinField && mainHamburger.classList.contains('active')) {
            console.log('Клик по оверлею!')
            overlayFadeOutAnimation(meinField, 'main-field_menu-open', 'main-field_menu-out')
            menu.classList.remove('open')
            mainHamburger.classList.remove('active')
            html.classList.toggle('locked')
        }
        /*==========[ Обработка клика по гамбургеру ]==========*/
        else if (mainHamburger.contains(e.target)) {
            console.log('Клик по гамбургеру')
            if(mainHamburger.classList.contains('active'))
            {       
                mainHamburger.classList.remove('active')
            }else {
                mainHamburger.classList.add('active')
            }
            dropdownMenu.classList.toggle('open')
            html.classList.toggle('locked')
            overlayFadeOutAnimation(meinField, 'main-field_menu-open', 'main-field_menu-out')
        }
        /*==========[ Обработка клика по второму гамбургеру ]==========*/
        else if (smallHamburger.contains(e.target)) {
            console.log('Клик по второму гамбургеру')
            dropdownMenu.classList.remove('open')
            html.classList.remove('locked')
            overlayFadeOutAnimation(meinField, 'main-field_menu-open', 'main-field_menu-out')
            mainHamburger.classList.remove('active')
        }
    })
}
/*==========[ Анимация затемнения ]==========*/
function overlayFadeOutAnimation(element, fadeIn, fadeOut) {
    if(element.classList.contains(fadeIn)) {
        element.classList.add(fadeOut)
        element.classList.remove(fadeIn)
        setTimeout(()=>{
            element.classList.remove(fadeOut)
        }, 950)
    } else {
        element.classList.add(fadeIn)
    }
}