let theme = localStorage.getItem("theme");
let theme_icon = document.querySelector('.theme-icon');

window.addEventListener("load", () => {
  if( theme == "dark" ) {
    document.body.classList.add("dark");
    theme_icon.src = './icons/sunny.svg';
  }
})

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("click", () => {
  document.body.classList.toggle("dark")
  const body = document.querySelector('.dark');
  if(body) {
    theme_icon.src = './icons/sunny.svg';
    localStorage.setItem("theme", "dark");
  } else {
    theme_icon.src = './icons/moon.svg';
    localStorage.setItem("theme", "light");
  }
})
