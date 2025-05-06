import { addanimationclass } from '../functions-flie/functions.js';
import { themechange } from '../theme-js/theme.js';
addanimationclass();
themechange();
// purpose modal script

try {
    const openPurposeModalDiv = document.querySelector('.my-purpose');
    const savedModalState = localStorage.getItem('purposemodal');

    function openPurposeModal() {
        const purposeModal = document.querySelector('.btnmodal');
        const openPurposeModal = document.querySelector('.my-purpose');

        purposeModal.addEventListener('click', (e) => {
            e.preventDefault();
            openPurposeModal.classList.toggle('active');

            if (openPurposeModal.classList.contains('active')) {
                localStorage.setItem('purposemodal', 'open');
            } else { localStorage.setItem('purposemodal', 'closed'); }
        });
    }

    function closeModal() {
        const closebtn = document.querySelector('.close-btn');
        closebtn.addEventListener('click', (e) => {
            const openPurposeModal = document.querySelector('.my-purpose');
            openPurposeModal.classList.remove('active');
            localStorage.setItem('purposemodal', 'closed');
        })
    }
    window.addEventListener('DOMContentLoaded', () => {
        if (savedModalState === 'open') { openPurposeModalDiv.classList.add('active'); }
    });

    openPurposeModal();
    closeModal()

} catch (e) { console.warn('while opening modal:', e); }