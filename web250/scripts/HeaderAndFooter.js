function loadHeaderFooter() {
    fetch('navigation.json')
        .then(response => response.json())
        .then(data => {
            const header = document.querySelector('header');
            const footer = document.querySelector('footer');

            // Create navigation links for header
            const nav = document.createElement('nav');
            data.links.forEach(link => {
                let a = document.createElement('a');
                a.href = link.href;
                a.textContent = link.text;
                nav.appendChild(a);
            });
            header.appendChild(nav);

            // Footer content
            footer.innerHTML = '<p>© 2024 LACED UP - All rights reserved.</p>';
        })
        .catch(error => console.error('Error loading navigation data:', error));
}
