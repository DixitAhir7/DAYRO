const themeAbout = document.querySelector('.theme-mode-about');


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('dark-mode-about') === 'enabled') {
        document.body.classList.add('dark-mode-about')
    }

    themeAbout.addEventListener('click', (e) => {
        e.preventDefault();

        document.body.classList.toggle('dark-mode-about')
        if (document.body.classList.contains('dark-mode-about')) {
            localStorage.setItem('dark-mode-about', 'enabled')
        } else {
            localStorage.setItem('dark-mode-about', 'disabled')
        }
    })
})