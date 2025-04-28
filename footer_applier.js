// Load navigation bar
fetch('footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    })
