// JavaScript for toggling the sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');
    
    if (sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden');
        content.style.marginLeft = '250px'; // Adjust margin when sidebar is visible
    } else {
        sidebar.classList.add('hidden');
        content.style.marginLeft = '0'; // Remove margin when sidebar is hidden
    }
}