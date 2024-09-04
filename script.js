let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                // Remove 'active' class from all nav links
                link.classList.remove('active');
                
                // Correct selector for finding the specific link
                let targetLink = document.querySelector(`header nav a[href*="${id}"]`);
                
                // Add 'active' class to the target link if it exists
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            });
        }
    });
};
