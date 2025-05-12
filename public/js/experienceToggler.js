var projects = document.querySelector(".projects");
var education = document.querySelector(".education");

var project_content = document.querySelector(".project-border");
var education_content = document.querySelector(".education-border");

var experience = localStorage.getItem("experience");

window.addEventListener("load", () => {
    if( experience == "education" ) {
        projects.classList.add("inactive");
        education.classList.remove("inactive");
        education_content.classList.remove("hide");
        project_content.classList.add("hide")
    }
  })

function projectsToggle(){
    education.classList.add("inactive");
    projects.classList.remove("inactive");
    project_content.classList.remove("hide");
    education_content.classList.add("hide");

    localStorage.setItem("experience", "projects");
}

function educationToggle() {
    projects.classList.add("inactive");
    education.classList.remove("inactive");
    education_content.classList.remove("hide");
    project_content.classList.add("hide")

    localStorage.setItem("experience", "education");
}