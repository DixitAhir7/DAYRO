// purpose modal script

try {
    function openPurposeModal() {
        const purposeModal = document.querySelector('.btnmodal');
        const openPurposeModal = document.querySelector('.my-purpose');

        purposeModal.addEventListener('click', (e) => {
            e.preventDefault();

            openPurposeModal.classList.toggle('active')
        })
    }
    openPurposeModal();
    closeModal();

    function closeModal() {
        document.querySelector('.my-purpose').classList.remove('active');
    }
} catch (e) {
    console.log('while opening modal:', e);
}