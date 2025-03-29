const form = document.querySelector('form');
const displayHtml = document.querySelector('.show');
const content = document.querySelectorAll('.content .artist-img');
const inputSearch = form.querySelector('input[type="text"]');

form.addEventListener('input', (e) => {
    e.preventDefault();
    displayHtml.innerHTML = ''; // Clear previous search results

    const search = inputSearch.value.trim().toLowerCase();

    // If input is empty, restore original content and return
    if (!search) {
        content.forEach(item => item.style.display = 'block'); // Show all images
        displayHtml.innerHTML = `<p>Please enter something to search.</p>`;
        return;
    }

    let found = false;

    content.forEach(item => {
        const textElement = item.nextElementSibling;
        const text = textElement ? textElement.textContent.trim().toLowerCase() : '';

        if (text.includes(search)) {
            displayHtml.innerHTML += `
                <p>${textElement.textContent}</p>
                <img src="${item.src}" alt="${textElement.textContent}" 
                     style="width:150px; height:150px; border-radius:50%; margin: 10px;">
            `;
            item.style.display = 'none'; 
            found = true;
        } else {
            item.style.display = 'block'; 
        }
    });

    if (!found) {
        displayHtml.innerHTML = `<p>No matching artist found.</p>`;
    }
});
