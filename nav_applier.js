// Load navigation bar
fetch('nav.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;

        // menu toggle (after nav is loaded!)
        const menuToggle = document.querySelector(".menu-toggle");
        const navList = document.querySelector("nav ul");

        // Add active page highlighting
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('nav ul li a');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (currentPage === href || (currentPage === '' && href === 'index.html') || (currentPage === 'Index.html' && href === 'index.html')) {
                link.classList.add('active');
            }
        });

        if (menuToggle && navList) {
            menuToggle.addEventListener("click", () => {
                navList.classList.toggle("active");
            });
        }
    })
    .catch(err => console.error("Nav loading failed:", err));
window.scrollTo(0, 0);
