document.addEventListener('DOMContentLoaded', () => {
    fetch('blog_nav.html')
        .then(res => {
            if (!res.ok) throw new Error('Navigation fetch failed');
            return res.text();
        })
        .then(data => {
            document.querySelector('.blog_nav_placeholder').innerHTML = data;

            // Setup search functionality
            const searchButton = document.querySelector('.search-button');
            const searchInput = document.querySelector('.search-input');

            if (searchButton && searchInput) {
                searchButton.addEventListener('click', () => {
                    // Add your search logic here
                    console.log('Search:', searchInput.value);
                });
            }
            // Add active class to current page
            const currentPage = window.location.pathname.split('/').pop();
            const navLinks = document.querySelectorAll('.navigation ul li a');

            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (currentPage === href ||
                    (currentPage === '' && href === 'blog.html') ||
                    (currentPage === 'blog.html' && href === 'blog.html')) {
                    link.classList.add('active');
                }
            });
        })
        .catch(err => {
            console.error("Blog nav loading failed:", err);
            document.querySelector('.blog_nav_placeholder').innerHTML =
                '<p>Navigation loading failed</p>';
        });
});
