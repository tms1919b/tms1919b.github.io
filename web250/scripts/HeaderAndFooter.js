function loadHeaderFooter(headerOption) {
    fetch('../scripts/navLinks.json')
        .then(response => response.json())
        .then(data => {
            let headerContent = data[headerOption];
            if (headerContent) {
                document.querySelector('header').innerHTML = headerContent;
            } else {
                console.error('Header option not found:', headerOption);
            }
        })
        .catch(error => console.error('Error loading header and footer:', error));
}
