// Handle mobile dropdown toggle on click
document.querySelectorAll('.dropdown > a').forEach(item => {
    item.addEventListener('click', function(event) {
        // Prevent the link from navigating
        event.preventDefault();
        const dropdownContent = this.nextElementSibling;

        // Toggle the visibility of the dropdown
        const isDropdownOpen = dropdownContent.style.display === 'block';
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
        });

        if (!isDropdownOpen) {
            dropdownContent.style.display = 'block';
        }
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
        });
    }
});
