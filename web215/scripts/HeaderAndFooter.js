function loadHeaderFooter() {
    fetch('navigation.json')
        .then(response => response.json())
        .then(data => {
            // Setup header
            const header = document.querySelector('header');
            const nav = document.createElement('nav');
            data.header.links.forEach(link => {
                let a = document.createElement('a');
                a.href = link.href;
                a.textContent = link.text;
                nav.appendChild(a);
            });
            header.appendChild(nav);

            // Setup footer
            const footer = document.querySelector('footer');
            footer.textContent = data.footer.text;
        })
        .catch(error => console.error('Error loading navigation data:', error));
}
