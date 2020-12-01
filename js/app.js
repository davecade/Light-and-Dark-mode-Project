const toggleTheme = document.querySelector('input')
const currentMode = document.querySelector('.mode')
const theDOM = document.querySelector('html')
const currentIcon = document.querySelector('.fas')

toggleTheme.addEventListener('change', event => {
    if(event.target.checked) {
        currentMode.innerHTML = "Dark Mode";
        theDOM.setAttribute("data-theme", "dark")
        currentIcon.classList.replace('fa-sun', 'fa-moon')
        
    } else {
        currentMode.innerHTML = "Light Mode";
        theDOM.removeAttribute("data-theme")
        currentIcon.classList.replace('fa-moon', 'fa-sun')
        
    }
    console.log("HELLO")
})