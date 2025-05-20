"use strict"

// script for image upload of user

const imgInput = document.querySelector('form input[type="file"]'); const defaultImg = document.querySelector('form img') || document.querySelector('.displayuserviews img'); const updateImg = document.querySelector('#updateImg'); const updateBtn = document.querySelector('.uploadImg'); const deleteImg = document.querySelector('#deleteimage');

// when user click default-img it opens file
export class Imageupload {
    validImage() {
        try {
            window.addEventListener('DOMContentLoaded', () => {
                // Load saved image from localStorage
                let savedImage = localStorage.getItem('base64str'); savedImage ? defaultImg.src = JSON.parse(savedImage) : 'faild to add image'
                // Click image to trigger file input
                defaultImg.addEventListener('click', () => imgInput.click());
                // On image selection
                imgInput.addEventListener('change', () => {
                    let img = imgInput.files[0]; const validTypes = ['image/jpeg', 'image/png', 'image/gif']; if (!img | !validTypes.includes(img.type)) { console.info('Please choose a valid image (JPEG, PNG, GIF)'); return; }
                    const reader = new FileReader();
                    reader.onload = () => {
                        let base64 = reader.result; defaultImg.src = base64; localStorage.setItem('base64str', JSON.stringify(base64));
                    }; reader.readAsDataURL(img);
                });
            });
        } catch (e) { console.log('while uploading image', e); }
    }
    displayimage() { return this.validImage() }
    getimage() { return this.displayimage() }
};

export function updateImage() {
    try {
        window.addEventListener('DOMContentLoaded', () => { let updatedImgsave = localStorage.getItem('updatedImg'); updatedImgsave ? defaultImg.src = JSON.parse(updatedImgsave) : 'failed to update image' });
        updateBtn.addEventListener('click', (e) => {
            e.preventDefault(); updateImg.click();
        }); updateImg.addEventListener('change', () => {
            const updateimgfile = updateImg.files[0]; if (updateimgfile) {
                const updateReader = new FileReader(); updateReader.onload = () => { let savingImg = updateReader.result; defaultImg.src = savingImg; localStorage.setItem('updatedImg', JSON.stringify(savingImg)); }; updateReader.readAsDataURL(updateimgfile);
            }
        });
    } catch (e) { console.log('error for updating image:', e); }
}

export function deleteImage() {
    try {
        deleteImg.addEventListener('click', (e) => {
            e.preventDefault(); localStorage.removeItem('base64str'); localStorage.removeItem('updatedImg'); const defaultImagePath = "account-html/img/user-default image.jpg"; defaultImg.src = defaultImagePath; imgInput.value = ''; updateImg.value = '';
        });
    } catch (e) { console.log('error while deleting image', e); }
};

// show user's data modal

try {
    function showData() {
        const modal = document.getElementById("modal");
        const openBtn = document.querySelector(".open-modal");
        const closeBtn = document.getElementById("closeBtn");
        const modalData = document.querySelector('.modal_data');
        const email = document.querySelector('.modal_data a:first-child');
        const password = document.querySelector('.modal_data a:nth-child(2)');
        const username = document.querySelector('.modal_data a:last-child');

        openBtn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = "block";
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        document.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });

        //modal_chaining method to see email
        email.onclick = (e) => {
            e.preventDefault();
            const get_email = JSON.parse(localStorage.getItem('email'));

            modalData.innerHTML = `
            <i id="back" class="fa-solid fa-left-long"></i>
                <a href="">${get_email}</a>
            `

            const BACK = document.getElementById('back').onclick = (e) => {
                e.preventDefault();
                modalData.innerHTML = `
                     <div class="modal_data" id="modalBody">
                    <a href="#" id="emailLink">Email</a>
                    <a href="#" id="passwordLink">Password</a>
                    <a href="#" id="usernameLink">Username</a>
                </div>
                `
                document.querySelector('.modal_data a:first-child').onclick = email.onclick;
            }
        };

        password.onclick = (e) => {
            e.preventDefault();
            // show password 
        }
        username.onclick = (e) => {
            e.preventDefault();
            // show username 
        }
    };
    showData();
} catch (e) { console.log('modal_data error:', e); }