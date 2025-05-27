"use strict"

import { refresh } from "../../modules/functions-flie/functions.js";

// script for image upload of user

const imgInput = document.querySelector('.login_data .modal-content .useraccount form input[type="file"]');
const defaultImg = document.querySelector('.login_data .modal-content .useraccount form img') || document.querySelector('.displayuserviews img');
const updateImg = document.querySelector('#updateImg');
const updateBtn = document.querySelector('.uploadImg');
const deleteImg = document.querySelector('#deleteimage');
const UPDATE_PROFILEBTN = document.querySelector('.modal_data #uploadUpdated_profile');

//account image upload
export class Imageupload {
    validImage() {
        try {
            window.addEventListener('DOMContentLoaded', () => {
                let savedImage = localStorage.getItem('base64str');
                savedImage ? defaultImg.src = JSON.parse(savedImage) : 'faild to add image';

                defaultImg.addEventListener('click', () => imgInput.click());

                imgInput.addEventListener('change', () => {
                    let img = imgInput.files[0];
                    const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
                    if (!img | !validTypes.includes(img.type)) console.info('Please choose a valid image (JPEG, PNG, GIF)');
                    const reader = new FileReader();
                    reader.onload = () => {
                        let base64 = reader.result;
                        defaultImg.src = base64;
                        refresh('base64str', JSON.stringify(base64));
                    };
                    reader.readAsDataURL(img);
                });
            });
        } catch (e) { console.log('while uploading image', e); }
    }

    displayimage() {
        return this.validImage();
    }

    getimage() { return this.displayimage() }
};

export function updateImage() {
    try {
        window.addEventListener('DOMContentLoaded', () => {
            let updatedImgsave = localStorage.getItem('updatedImg');
            updatedImgsave ? defaultImg.src = JSON.parse(updatedImgsave) : 'failed to update image'
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
                    refresh('updatedImg', JSON.stringify(savingImg));
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
        });
    } catch (e) { console.log('error while deleting image', e); }
};

// show user's data modal
export function showData() {
    try {
        const dataModal = document.getElementById("modal");
        const openBtn = document.querySelector(".user-Data .open-modal");
        const closeBtn = document.getElementById("closeBtn");
        const modalData = document.querySelector('.modal_data');
        const email = document.querySelector('.modal_data a:first-child');
        const password = document.querySelector('.modal_data a:nth-child(2)');
        const username = document.querySelector('.modal_data a:last-child');
        const image_change = document.querySelector('#editAccout form img');
        const edit_image = document.getElementById('editImage');

        openBtn.addEventListener("click", (e) => {
            e.preventDefault();
            dataModal.style.display = "block";
        });

        closeBtn.addEventListener("click", () => {
            dataModal.style.display = "none";
        });

        document.addEventListener("click", (e) => {
            if (e.target === dataModal) {
                dataModal.style.display = "none";
            }
        });

        //modal_chaining method to see email
        email.onclick = (e) => {
            e.preventDefault();
            const get_email = JSON.parse(localStorage.getItem('email'));

            modalData.innerHTML = `
            <i id="back" class="fa-solid fa-left-long" style="cursor:pointer;"></i>
            <div class="email_change">
                <a id="emailmodify" href="">${get_email}</a>
            </div>
            `
            const change_email = document.getElementById('emailmodify');
            change_email.addEventListener('click', (e) => {
                e.preventDefault();
                modalData.innerHTML = `
                <div id="replace" class="emaildiv">
                        <i id="back" class="fa-solid fa-left-long" style="cursor:pointer;"></i>
                        <div id="show_email">
                            <input type="email" id="emailInput" value="${get_email}">
                        </div>
                </div>
                `
                goBack();
            });

            function goBack() {
                const BACK = document.getElementById('back').onclick = (e) => {
                    e.preventDefault();
                    modalData.innerHTML = `
                     <div class="modal_data" id="modalBody">
                    <a href="#" id="emailLink">Email</a>
                    <a href="#" id="passwordLink">Password</a>
                    <a href="#" id="usernameLink">Username</a>
                    <button id="doneupdate">Done</button>
                </div>`
                    document.querySelector('.modal_data a:first-child').onclick = email.onclick;
                }
            }
            goBack();

        };

        /*
        password.onclick = (e) => {
            e.preventDefault();
            // show password 
        }
        username.onclick = (e) => {
            e.preventDefault();
            // show username 
        }
            
        */

    } catch (e) { console.log('error while', e); }
};

// show when done 
const comepleteImage = document.querySelector('.useraccount_display img');
function doneUpdatingProfile() {
    UPDATE_PROFILEBTN.addEventListener('click', (e) => {
        e.preventDefault();
        comepleteImage.src = JSON.parse(localStorage.getItem('base64str'));
    })
};

doneUpdatingProfile();