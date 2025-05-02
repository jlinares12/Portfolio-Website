const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("click", () => {
  document.body.classList.toggle("dark")
  const body = document.querySelector('.dark');
  let theme_icon = document.querySelector('.theme-icon');

  if(body) {
    theme_icon.src = '/icons/sunny.svg';
  } else {
    theme_icon.src = '/icons/moon.svg';
  }
})
