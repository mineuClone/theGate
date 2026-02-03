const searchbar = document.getElementById("search-input");

document.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        window.location.href = `https://search.brave.com/search?q=${searchbar.value}`
    }
})