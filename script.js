/*
  HTML Elements
*/
const btnThemeToggle = document.getElementById('theme-toggle');

/*
  Functions
  */
const setTheme = () => {
    const root = document.documentElement;
    const newTheme = root.className === 'light' ? 'dark' : 'light';
    root.className = newTheme;
}

/*
  Event listeners
*/
btnThemeToggle.addEventListener('click', setTheme);

/*
  Initialize page
*/
window.onload = () => {
    setTheme()
}