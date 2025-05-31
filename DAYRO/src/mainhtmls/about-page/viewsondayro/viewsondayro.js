"use strict"

import { Loginvalidation, refresh } from '../../../../modules/functions-flie/functions.js';
import { updateImage } from '../../../../modules/accountjs/acc.js';

// mainfunction for addingviews
try {
    function submittingviews() {
        const viewstextarea = document.querySelector('.usersviews textarea');
        const displayhtml = document.querySelector('.displayuserviews p');
        const submitviews = document.querySelector('#viewssubmit');
        submitviews.addEventListener('click', (e) => {
            e.preventDefault();
            const textareavalue = viewstextarea.value.trim();
            if (textareavalue && textareavalue.length > 30) {
                displayhtml.innerHTML = '';
                displayhtml.innerHTML += `${textareavalue} <br>`;
                displayhtml.style.display = 'block';
                reply();
                extractingemail();
                extractingimage();
                refresh('deletedview', JSON.stringify(textareavalue)); viewstextarea.value = null;
            }
            else { console.log('failed to add value'); }
        })
    };
    submittingviews();
    deleteviews();
    undoviews();
    viewedit();
} catch (e) { console.log('error while submitting views', e); };

// delete view 
function deleteviews() {
    const displayhtml = document.querySelector('.displayuserviews p');
    const viewstextarea = document.querySelector('.usersviews textarea');
    const deletebtn = document.querySelector('.btnsfordisplay #deleteviews');
    const atagforemail = document.querySelector('.displayuserviews a');
    const imgtagforimage = document.querySelector('.displayuserviews img');
    deletebtn.addEventListener('click', (e) => {
        e.preventDefault();
        viewstextarea.value = null;
        displayhtml.innerHTML = '';
        atagforemail.innerHTML = '';
        imgtagforimage.style.display = 'none';
        localStorage.getItem('deletedview');
    })
};

// user can bring back the deleted text
function undoviews() {
    const undobtn = document.querySelector('.btnsfordisplay #undoview');
    const displayhtml = document.querySelector('.displayuserviews p');
    undobtn.addEventListener('click', (e) => {
        e.preventDefault();
        const getdeletedview = JSON.parse(localStorage.getItem('deletedview'));
        getdeletedview ? displayhtml.innerHTML = getdeletedview : '';
        extractingemail();
        extractingimage();
    })
};
// for edit text
function viewedit() {
    const editbtn = document.querySelector('.btnsfordisplay #viewedit');
    const viewstextarea = document.querySelector('.usersviews textarea');
    editbtn.addEventListener('click', (e) => {
        e.preventDefault();
        const getdeletedview = JSON.parse(localStorage.getItem('deletedview'));
        viewstextarea.value = getdeletedview;
    });
};

// displaying email 
function extractingemail() {
    const atagforemail = document.querySelector('.displayuserviews a');
    const useremail = new Loginvalidation();
    useremail.getemail();
    const emailvalue = useremail.getvalue();
    atagforemail.innerHTML = emailvalue;
    const userlogout = useremail.getlogoutinfo();

    // if user haven't loggedin then show random names
    const royalNames = ["Aryavir", "Rajendra", "Vikrant", "Samrat", "Mahadevan", "Raghunandan", "Suryadev", "Indrajeet", "Harshvardhan", "Karanveer", "Rudransh", "Adityanandan", "Parthiv", "Rajas", "Pradyumna", "Janardan", "Rajdeep", "Bhavya", "Pratikraj", "Kirtan", "Tirth", "Ramendra", "Bhishma", "Shatrughna", "Dasharath", "Suryansh", "Raghavendra", "KrishnaKant", "Vibhishan", "Vasudev", "Nakulraj", "Yudhveer", "ganesh", "Bharata", "Balaram", "Shreeval", "Vasuman", "Viduraj", "Achyut", "Shaurya", "Rudraansh", "Dheeraj", "Tanmayraj", "Veerang", "Aryanraj", "Devraj", "Arnavraj", "Divyaraj", "Shubhransh", "Mitradev", "Shravanraj", "Harinarayan", "Someshwar", "Devarshi", "Sahastrajit", "Vrajraj", "Hridayraj", "Shivtej"];

    if (userlogout && royalNames.length > 0) {
        const randomIndex = Math.floor(Math.random() * royalNames.length);
        const randomName = royalNames[randomIndex];
        atagforemail.innerHTML = randomName;
    } else {
        const ptagforlogout = document.createElement('p');
        ptagforlogout.className = 'nameerror';
        document.body.appendChild(ptagforlogout);
    }
};

// function for dispaly image in view
function extractingimage() {
    const imgtagforimage = document.querySelector('.displayuserviews img');
    // let extractimg = new Imageupload();
    // extractimg.displayimage();
    updateImage();
    imgtagforimage.style.display = 'block';
    // parse: converting data in js object
    imgtagforimage.src = JSON.parse(localStorage.getItem('updatedImg'));
};
const replybtn = document.querySelector('.btnsfordisplay #viewreply');

// reply function
function reply() {
    const replytextarea = document.querySelector('.replydiv textarea');
    const deletereplybtn = document.querySelector('.replydivbtns #deletereply');
    const submitreply = document.querySelector('.replydivbtns #submitreply');
    replybtn.addEventListener('click', (e) => {
        e.preventDefault();
        submitreply.style.display = 'inline-block';
        replytextarea.style.display = 'block';
        deletereplybtn.style.display = 'inline-block';
    })
};

// displayreply
function addreply() {
    const submitreply = document.querySelector('.replydivbtns #submitreply');
    const displayreply = document.querySelector('.replydiv #viewreplytouser');
    const replytextarea = document.querySelector('.replydiv textarea');
    submitreply.addEventListener('click', (e) => {
        e.preventDefault();
        replytextarea.value ? displayreply.innerHTML = replytextarea.value : '';
        deletereply();
    })
} addreply();

// to delete reply
function deletereply() {
    const displayreply = document.querySelector('.replydiv #viewreplytouser');
    const replytextarea = document.querySelector('.replydiv textarea');
    const deletereplybtn = document.querySelector('.replydivbtns #deletereply');
    deletereplybtn.addEventListener('click', (e) => {
        e.preventDefault();
        replytextarea ? replytextarea.value = '' : displayreply.innerHTML = '';
    })
};

// animation for header
const words = ['views', 'stories', 'thoughts', 'discuss'];
const highlight = document.getElementById('dynamic-text');
let index = 0;
function updateText() {
    highlight.classList.remove('active');
    setTimeout(() => {
        highlight.textContent = words[index];
        highlight.classList.add('active');
        index = (index + 1) % words.length;
    }, 300);
}
setInterval(updateText, 2500);