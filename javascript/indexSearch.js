const eSearchInput = document.getElementById('example-search-input');

eSearchInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        var url = "playerstatistic.html?search=" + inputValue
        window.location.assign(url)
    }
})