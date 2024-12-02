document.addEventListener('DOMContentLoaded', function() {
    const noticeTitles = document.querySelectorAll('.notice-title');
    
    noticeTitles.forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
