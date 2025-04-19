// Load navigation bar
fetch('nav.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;

        // menu toggle (after nav is loaded!)
        const menuToggle = document.querySelector(".menu-toggle");
        const navList = document.querySelector("nav ul");

        if (menuToggle && navList) {
            menuToggle.addEventListener("click", () => {
                navList.classList.toggle("active");
            });
        }
    })
    .catch(err => console.error("Nav loading failed:", err));
window.scrollTo(0, 0);
