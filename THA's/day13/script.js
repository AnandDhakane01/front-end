let nextBtn = document.querySelector('.next-btn');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

// get quote
function getQuote() {
    fetch('https://api.quotable.io/random')
    .then(response => {
        if (!response.ok) {
            throw new Error(response.message);
        } else {
            return response.json();
        }
    })
    .then(data => display(data))
    .catch(() => {
        display({
            "content" : "failed to load quote",
            "author" : ": ("
        })
    })
}

// display quote
function display(data) {
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

nextBtn.addEventListener('click', getQuote);
window.onload(getQuote());


