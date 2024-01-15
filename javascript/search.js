const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', () => {
    const inputValue = searchInput.value
    var url = "playerstatistic.html?search=" + inputValue
    window.location.assign(url)
});