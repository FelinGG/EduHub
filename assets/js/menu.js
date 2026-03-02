// Obsługa głównego menu bocznego
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Obsługa rozwijanej listy Top 5 Lektur
function toggleDropdown() {
    const content = document.getElementById('top5-menu');
    const arrow = document.getElementById('dropdown-arrow');
    content.classList.toggle('show');
    arrow.classList.toggle('rotate');
}