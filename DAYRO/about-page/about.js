// purpose modal script

try {
    function openPurposeModal() {
        const purposeModal = document.querySelector('.btnmodal');
        const openPurposeModal = document.querySelector('.my-purpose');
        const forAnimationdiv = document.querySelector('.purpose-modal');

        purposeModal.addEventListener('click', (e) => {
            e.preventDefault();
            openPurposeModal.classList.toggle('active');

            if (openPurposeModal.classList.contains('active')) {
                document.body.classList.add('modal-open');
                forAnimationdiv.classList.add('animate__backInDown')
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
            openPurposeModalDiv.classList.add('modal-open');
        } else {
            openPurposeModalDiv.classList.remove('active');
            document.body.classList.remove('modal-open');
        }
    });

    openPurposeModal();

} catch (e) {
    console.warn('while opening modal:', e);
}

// function for adding animation class
// *checks html elements
function addanimationclass() {
    document.querySelectorAll('*').forEach(el => {
        for (let cls of el.classList) {
            if (cls.startsWith('animate__')) {
                el.classList.add('animate__animated');
                break;
            }
        }
    });
}

addanimationclass();

function fetchsidebar(){
    fetch('')
}