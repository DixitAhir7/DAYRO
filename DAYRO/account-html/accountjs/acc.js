// script for image upload of user

const imgInput = document.querySelector('form input[type="file"]');
const defaultImg = document.querySelector('form img') || document.querySelector('.displayuserviews img');
const updateImg = document.querySelector('#updateImg');
const updateBtn = document.querySelector('.uploadImg');
const deleteImg = document.querySelector('input[type="submit"]');


// when user click default-img it opens file
export class Imageupload {
    validImage() {
        try {
            window.addEventListener('DOMContentLoaded', () => {
                // Load saved image from localStorage
                let savedImage = localStorage.getItem('base64str');
                if (savedImage) {
                    defaultImg.src = JSON.parse(savedImage);
                }
                // Click image to trigger file input
                defaultImg.addEventListener('click', () => imgInput.click());

                // On image selection
                imgInput.addEventListener('change', () => {
                    let img = imgInput.files[0];
                    const validTypes = ['image/jpeg', 'image/png', 'image/gif'];

                    if (!img || !validTypes.includes(img.type)) {
                        console.warn('Please choose a valid image (JPEG, PNG, GIF)');
                        return;
                    }

                    const reader = new FileReader();
                    reader.onload = () => {
                        let base64 = reader.result;
                        defaultImg.src = base64;
                        localStorage.setItem('base64str', JSON.stringify(base64));
                    };
                    reader.readAsDataURL(img);
                });
            });
        } catch (e) { console.log('while uploading image', e); }
    }
    displayimage() {
        return this.validImage()
    }

    getimage() {
        return this.displayimage()
    }
}

export function updateImage() {
    try {
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
    } catch (e) { console.log('error for updating image:', e); }
}

export function deleteImage() {
    try {
        deleteImg.addEventListener('click', (e) => {
            e.preventDefault();

            localStorage.removeItem('base64str');
            localStorage.removeItem('updatedImg');

            const defaultImagePath = "account-html/img/user-default image.jpg";
            defaultImg.src = defaultImagePath;

            imgInput.value = '';
            updateImg.value = '';
        });
    } catch (e) { console.log('error while deleting image', e); }
};