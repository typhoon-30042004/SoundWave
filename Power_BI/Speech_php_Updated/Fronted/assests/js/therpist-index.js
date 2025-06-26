document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('sidebarToggle');
    const mainContent = document.getElementById('mainContent');

    // Toggle Sidebar visibility
    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('closed');
        mainContent.classList.toggle('shifted');
    });

    // Display today's date in Recent Activities
    const recentActivities = document.querySelector('.recent-activities ul');
    const today = new Date().toLocaleDateString();
    recentActivities.innerHTML += `<li><strong>System</strong> displayed today's date (${today}).</li>`;
});
