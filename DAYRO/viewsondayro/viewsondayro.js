import { Loginvalidation } from '../functions-flie/functions.js';
import { Imageupload } from '../account-html/accountjs/acc.js';

// user-views on dayro
try {
    function submittingviews() {
        const viewstextarea = document.querySelector('.usersviews textarea');
        const displayhtml = document.querySelector('.displayuserviews p');
        const submitviews = document.querySelector('#viewssubmit');

        submitviews.addEventListener('click', (e) => {
            e.preventDefault();
            const textareavalue = viewstextarea.value.trim();
            if (textareavalue) {
                displayhtml.innerHTML += `${textareavalue} <br>`;
                displayhtml.style.display = 'block';
                extractingemail();
                extractingimage();
                localStorage.setItem('deletedview', JSON.stringify(textareavalue));
                viewstextarea.value = null;
            } else {
                return 'failed to add value'
            }
        })
    };
    submittingviews();
    deleteviews();
    undoviews();
    viewedit();
} catch (e) { console.log('error while submitting views', e); };

// to delete the view
function deleteviews() {
    const displayhtml = document.querySelector('.displayuserviews p');
    const viewstextarea = document.querySelector('.usersviews textarea');
    const deletebtn = document.querySelector('#deleteviews');
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
    const undobtn = document.querySelector('#undoview');
    const displayhtml = document.querySelector('.displayuserviews p');

    undobtn.addEventListener('click', (e) => {
        e.preventDefault();
        const getdeletedview = localStorage.getItem('deletedview');
        if (getdeletedview) {
            displayhtml.innerHTML = getdeletedview;
        }
    })
};

function viewedit() {
    const editbtn = document.querySelector('#viewedit');
    const viewstextarea = document.querySelector('.usersviews textarea');

    editbtn.addEventListener('click', (e) => {
        e.preventDefault();
        const getdeletedview = localStorage.getItem('deletedview');
        viewstextarea.value = getdeletedview;
    });
    submittingviews();
}

// displaying email 
function extractingemail() {
    const atagforemail = document.querySelector('.displayuserviews a');
    const useremail = new Loginvalidation();
    useremail.getemail();
    const emailvalue = useremail.getvalue();
    // atagforemail.href = useremail;
    atagforemail.innerHTML = emailvalue;

    // if user haven't loggedin then show random names
    const royalNames = ["Aryavir", "Rajendra", "Vikrant", "Samrat", "Mahadevan", "Yuvraj", "Raghunandan", "Veerendra", , "Suryadev", "Indrajeet", "Harshvardhan", "Karanveer", "Rudransh", "Adityanandan", "Parthiv", "Rajas", "Pradyumna", "Janardan", "Rajdeep", "Bhavya", "Pratikraj", "Kirtan", "Smitraj", "Jaydev", "Tirth", "Ramendra", "Bhishma", "Arindam", "Shatrughna", "Dasharath", "Suryansh", "Raghavendra", "KrishnaKant", "Vibhishan", "Vasudev", "Dhananjay", "Nakulraj", "Yudhveer", "Bharata", "Balaram", "Shreeval", "Vasuman", "Viduraj", "Achyut", "Aniruddh", "Shaurya", "Tejaswin", "Veeraj", "Rudraansh", "Rajhans", "Dheeraj", "Tanmayraj", "Veerang", "Aayansh", "Virendra", "Aryanraj", "Devraj", "Riyan", "Arnavraj", "Kavyansh", "Yuvansh", "Aviraj", "Niranjay", "Divyaraj", "Hemraj", "Rishiraj", "Shubhransh", "Mitradev", "Omraj", "Shravanraj", "Amarjeet", "Harinarayan", "Someshwar", "Devarshi", "Sahastrajit", "Manvendra", "Vrajraj", "Hridayraj", "Shivtej", "Govindraj"]

    if (useremail.getlogoutinfo() && royalNames.length > 0) {
        const randomIndex = Math.floor(Math.random() * royalNames.length);
        const randomName = royalNames[randomIndex];
        atagforemail.innerHTML = randomName;
    } else {
        const ptagforlogout = document.createElement('p');
        ptagforlogout.className = 'nameerror';
        document.body.appendChild(ptagforlogout);
        ptagforlogout.innerHTML = "sorry i didn't find any names"
        ptagforlogout.innerHTML = atagforemail.innerHTML;
    }
};


// function for dispaly image in views
function extractingimage() {
    const imgtagforimage = document.querySelector('.displayuserviews img');
    let extractimg = new Imageupload();
    extractimg.displayimage();
    if (extractimg) {
        imgtagforimage.style.display = 'block';
        // parse: converting data in js object
        imgtagforimage.src = JSON.parse(localStorage.getItem('base64str'));
    }
};

// animation for header
const words = ['views', 'stories', 'thoughts'];
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

updateText();
setInterval(updateText, 2500);