//OqIbUlhi01c8bYkLFT_CrrENeXQEkjbfxWFAetKLHg4

    //creates a variable to store the access key
    const accessKey = 'OqIbUlhi01c8bYkLFT_CrrENeXQEkjbfxWFAetKLHg4';
    const form = document.querySelector('form');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.querySelector('.search-results');
    const showMore = document.getElementById('show-more'); // Corrected ID

    //creates a variable to store the search input
    let inputData = '';
    let page = 1;

    async function searchImages() {
        inputData = searchInput.value;

        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

        const response = await fetch(url);
        const data = await response.json();

        if (page === 1) {
            searchResults.innerHTML = '';
        }
        const results = data.results;
        results.map((result) => {
            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add('search-result'); // Corrected class name
            const image = document.createElement('img');
            image.src = result.urls.small;
            image.alt = result.alt_description;
            const imageLink = document.createElement('a');
            imageLink.href = result.links.html;
            imageLink.target = '_blank';
            imageLink.textContent = result.alt_description;
            imageWrapper.appendChild(image);
            imageWrapper.appendChild(imageLink);
            searchResults.appendChild(imageWrapper);
        });
        // Corrected page increment
        page++;

        if (page > 1) {
            showMore.style.display = 'block';
        }
    }
    // Corrected event listener
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        page = 1;
        searchImages();
    });

    showMore.addEventListener('click', () => {
        searchImages();
    });


