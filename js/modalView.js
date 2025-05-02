// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

var modal_content = document.querySelector('.modal-content');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.classList.add("active");
    setTimeout(() => {
        modal_content.classList.add("active");
    }, 10); // Small timeout to allow the modal to be visible before starting the content transition
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_content.classList.remove("active");
    setTimeout(() => {
        modal.classList.remove("active");
    }, 300); // Wait for the content transition to complete
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal_content.classList.remove("active");
        setTimeout(() => {
            modal.classList.remove("active");
        }, 300);
    }
}