function scrollFunction() {
    let header = document.getElementById('header');
    if (document.documentElement.scrollTop > 1) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }

    let sidebar = document.getElementById('sidebar');
    var skillsSection = document.querySelector('.skills.title');

    if (skillsSection) {
        var top = skillsSection.getBoundingClientRect().top + 90;
        if (window.scrollY >= top) {
            sidebar.classList.add('start');
        } else {
            sidebar.classList.remove('start');
        }
    }
}