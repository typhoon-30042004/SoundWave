document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    const sidebarToggle = document.getElementById("sidebarToggle");

    sidebarToggle.addEventListener("click", function() {
        sidebar.classList.toggle("closed");
        content.classList.toggle("shifted");
    });
})