import { Loginvalidation } from '../functions-flie/functions.js';
import { Imageupload } from '../account/accountjs/acc.js';

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
                displayhtml.innerHTML = '';
                displayhtml.innerHTML += `${textareavalue} <br>`;
                displayhtml.style.display = 'block';
                reply()
                extractingemail();
                extractingimage();
                localStorage.setItem('deletedview', JSON.stringify(textareavalue));
                viewstextarea.value = null;
            } else if (!textareavalue) {
                displayhtml.innerHTML = 'please enter something';
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
    const royalNames = ["Aryavir", "Rajendra", "Vikrant", "Samrat", "Mahadevan", "Raghunandan", "Veerendra", "Suryadev", "Indrajeet", "Harshvardhan", "Karanveer", "Rudransh", "Adityanandan", "Parthiv", "Rajas", "Pradyumna", "Janardan", "Rajdeep", "Bhavya", "Pratikraj", "Kirtan", "Smitraj", "Tirth", "Ramendra", "Bhishma", "Arindam", "Shatrughna", "Dasharath", "Suryansh", "Raghavendra", "KrishnaKant", "Vibhishan", "Vasudev", "Nakulraj", "Yudhveer", "Bharata", "Balaram", "Shreeval", "Vasuman", "Viduraj", "Achyut", "Shaurya", "Rudraansh", "Dheeraj", "Tanmayraj", "Veerang", "Aryanraj", "Devraj", "Arnavraj", "Divyaraj", "Shubhransh", "Mitradev", "Shravanraj", "Amarjeet", "Harinarayan", "Someshwar", "Devarshi", "Sahastrajit", "Vrajraj", "Hridayraj", "Shivtej"]

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


// reply function
function reply() {
    const replybtn = document.querySelector('.btnsfordisplay #viewreply');
    const replytextarea = document.querySelector('.replydiv textarea');
    const deletereplybtn = document.querySelector('.replydivbtns #deletereply');
    const submitreply = document.querySelector('.replydivbtns #submitreply');

    replybtn.addEventListener('click', (e) => {
        e.preventDefault();
        submitreply.style.display = 'inline-block';
        replytextarea.style.display = 'block';
        deletereplybtn.style.display = 'inline-block';
    })
}

function addreply() {
    const submitreply = document.querySelector('.replydivbtns #submitreply');
    const displayreply = document.querySelector('.replydiv #viewreplytouser');
    const replytextarea = document.querySelector('.replydiv textarea');
    submitreply.addEventListener('click', (e) => {
        e.preventDefault();
        if (replytextarea.value) {
            displayreply.innerHTML = replytextarea.value;
        }
        deletereply();
    })
}

addreply();

// to delete reply
function deletereply() {
    const displayreply = document.querySelector('.replydiv #viewreplytouser');
    const replytextarea = document.querySelector('.replydiv textarea');
    const deletereplybtn = document.querySelector('.replydivbtns #deletereply');

    deletereplybtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (replytextarea) {
            replytextarea.value = '';
            displayreply.innerHTML = '';
        }
    })
}

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