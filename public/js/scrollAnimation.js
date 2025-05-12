function scrollFunction() {
    let header = document.getElementById('header');
    if (document.documentElement.scrollTop > 1) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }

    let sidebar = document.getElementById('sidebar');
    const skillsSection = document.querySelector('.skills-container-wrapper');

    // Check if user has scrolled to bottom
    const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (isBottom) {
        sidebar.classList.remove('start');
        return; // Exit early if at bottom
    }

    if (skillsSection) {
        let offset;

        if (window.innerWidth < 480) {
            offset = 190; // for mobile
        } else if (window.innerWidth < 688) {
            offset = 110; // for tablets
        } else if (window.innerWidth < 768) {
            offset = -60; // for tablets
        } else {
            offset = -85; // for desktops
        }
        const top = skillsSection.getBoundingClientRect().top + offset;
        if (window.scrollY >= top) {
            sidebar.classList.add('start');
        } else {
            sidebar.classList.remove('start');
        }
    }
}