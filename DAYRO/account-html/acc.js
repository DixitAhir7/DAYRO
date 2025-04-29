// script for image upload of user

const imgInput = document.querySelector('form input[type="file"]');
const defaultImg = document.querySelector('form img');
const updateImg = document.querySelector('#updateImg');
const updateBtn = document.querySelector('.uploadImg');
const deleteImg = document.querySelector('input[type="submit"]');


// when user click default-img it opens file

function validImage() {
    window.addEventListener('DOMContentLoaded', () => {
        let savedImage = localStorage.getItem('base64str');
        if (savedImage) {
            defaultImg.src = JSON.parse(savedImage);
        }
    });

    defaultImg.addEventListener('click', () => {
        imgInput.click();
    });

    imgInput.addEventListener('change', () => {
        let img = imgInput.files[0];
        validimg(img);

        if (img) {
            const reader = new FileReader();
            reader.onload = () => {
                let base64 = reader.result;
                defaultImg.src = base64;
                localStorage.setItem('base64str', JSON.stringify(base64));
            };
            reader.readAsDataURL(img);
        }
    });

    function validimg(img) {
        const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!validTypes.includes(img.type)) {
            alert('Please choose a valid image (JPEG, PNG, GIF)');
        }
    }
}

validImage();


function updateImage() {
    window.addEventListener('DOMContentLoaded', () => {
        let updatedImgsave = localStorage.getItem('updatedImg');
        if (updatedImgsave) {
            defaultImg.src = JSON.parse(updatedImgsave);
        }
    });

    updateBtn.addEventListener('click', (e) => {
        e.preventDefault();
        updateImg.click();
    });

    updateImg.addEventListener('change', () => {
        const updateimgfile = updateImg.files[0];

        if (updateimgfile) {
            const updateReader = new FileReader();

            updateReader.onload = () => {
                let savingImg = updateReader.result;
                defaultImg.src = savingImg;
                localStorage.setItem('updatedImg', JSON.stringify(savingImg));
            };

            updateReader.readAsDataURL(updateimgfile);
        }
    });
}
updateImage();

function deleteImage() {
    deleteImg.addEventListener('click', (e) => {
        e.preventDefault();

        localStorage.removeItem('base64str');
        localStorage.removeItem('updatedImg');

        const defaultImagePath = "account-html/img/user-default image.jpg";
        defaultImg.src = defaultImagePath;

        imgInput.value = '';
        updateImg.value = '';
    });
}

deleteImage();