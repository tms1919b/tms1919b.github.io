function loadHeaderFooter() {
    fetch('navigation.json')
        .then(response => response.json())
        .then(data => {
            const header = document.querySelector('header');
            const nav = document.createElement('nav');
            data.header.links.forEach(link => {
                let a = document.createElement('a');
                a.href = link.href;
                a.textContent = link.text;
                nav.appendChild(a);
            });
            header.appendChild(nav);

            const footer = document.querySelector('footer');
            const profilesNav = document.createElement('nav');
            data.footer.profileLinks.forEach(link => {
                let a = document.createElement('a');
                a.href = link.href;
                a.textContent = link.text;
                profilesNav.appendChild(a);
            });
            footer.appendChild(profilesNav);

            data.footer.validatorLinks.forEach(link => {
                let a = document.createElement('a');
                a.href = link.href;
                let img = document.createElement('img');
                img.src = link.imgSrc;
                img.alt = link.alt;
                a.appendChild(img);
                footer.appendChild(a);
            });

            const footerText = document.createElement('span');
            footerText.textContent = data.footer.text;
            footer.appendChild(footerText);
        })
        .catch(error => console.error('Error loading navigation data:', error));
}
