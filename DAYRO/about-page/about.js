// purpose modal script

try {
    function openPurposeModal() {
        const purposeModal = document.querySelector('.btnmodal');
        const openPurposeModal = document.querySelector('.my-purpose');

        purposeModal.addEventListener('click', (e) => {
            e.preventDefault();
            openPurposeModal.classList.toggle('active');

            if (openPurposeModal.classList.contains('active')) {
                document.body.classList.add('modal-open');
                localStorage.setItem('purposemodal', 'open');
            } else {
                document.body.classList.remove('modal-open');
                localStorage.setItem('purposemodal', 'closed');
            }
        });
    }

    function closeModal() {
        const openPurposeModal = document.querySelector('.my-purpose');
        openPurposeModal.classList.remove('active');
        document.body.classList.remove('modal-open');
        localStorage.setItem('purposemodal', 'closed');
    }

    window.addEventListener('DOMContentLoaded', () => {
        const openPurposeModalDiv = document.querySelector('.my-purpose');
        const savedModalState = localStorage.getItem('purposemodal');

        if (savedModalState === 'open') {
            openPurposeModalDiv.classList.add('active');
            document.body.classList.add('modal-open');
        } else {
            openPurposeModalDiv.classList.remove('active');
            document.body.classList.remove('modal-open');
        }
    });

    openPurposeModal();

} catch (e) {
    console.log('while opening modal:', e);
}


// summary tag clickable

// const faq = document.getElementById('faq');
// faq.addEventListener('toggle', (e) => {
//     e.preventDefault();
//     console.log(faq.open ? 'opened' : 'close');
// })