// purpose modal script

try {
    function openPurposeModal() {
        const purposeModal = document.querySelector('.btnmodal');
        const openPurposeModal = document.querySelector('.my-purpose');

        purposeModal.addEventListener('click', (e) => {
            e.preventDefault();

            openPurposeModal.classList.toggle('active');
            document.body.classList.add('modal-open')
        })
    }
    openPurposeModal();
    closeModal();

    function closeModal() {
        document.querySelector('.my-purpose').classList.remove('active');
        document.body.classList.remove('modal-open')
    }
} catch (e) {
    console.log('while opening modal:', e);
}