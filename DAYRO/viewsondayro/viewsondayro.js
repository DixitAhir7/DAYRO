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

// function appendview() {
//     // const getdeletedview = ;
//     const viewstextarea = document.querySelector('.usersviews textarea');
//     const displayhtml = document.querySelector('.displayuserviews p');
//     const textareavalue = viewstextarea.value.trim();
//     let deletedviewCount = localStorage.getItem('deletedview');

//     deletedviewCount++;

//     if (deletedviewCount > 1) {
//         displayhtml.innerHTML += `${textareavalue} <br>`;
//     }
//     localStorage.setItem('deletedview', (deletedviewCount));
// }

// to delete the view
function deleteviews() {
    const displayhtml = document.querySelector('.displayuserviews p');
    const viewstextarea = document.querySelector('.usersviews textarea');
    const deletebtn = document.querySelector('#deleteviews');

    deletebtn.addEventListener('click', (e) => {
        e.preventDefault();
        viewstextarea.value = null;
        displayhtml.innerHTML = '';
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

// animation for header

const words = ['views', 'thoughts', 'stories'];
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