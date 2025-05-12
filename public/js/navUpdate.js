document.addEventListener('DOMContentLoaded', function() {
    const navbarList = document.querySelector('.navbar-list');

    navbarList.addEventListener('click', function(e) {
        if (e.target.classList.contains('nav-link')) {
            let active = document.querySelector('.nav-link.active');
            if (active && active != e.target ) {
                active.classList.remove('active');
                e.target.classList.add('active');
            }
        }
    });
});