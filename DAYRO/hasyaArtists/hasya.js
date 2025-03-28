const searchBox = document.querySelector('.search-input');
const inputSearch = searchBox.querySelector('input[type="text"]');
const selectOption = searchBox.querySelectorAll('option');
const searchBtn = searchBox.querySelector('#search');
const show = document.querySelector('.show');


searchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let resultSearch = inputSearch.value;

})