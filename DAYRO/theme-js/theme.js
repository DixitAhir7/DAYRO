const theme = document.querySelector('.theme-mode');
const body = document.body;

if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

theme.addEventListener('click', (e) => {
    e.preventDefault();

    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');   
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});