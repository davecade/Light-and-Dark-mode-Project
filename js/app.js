const toggleTheme = document.querySelector('input')
const theDOM = document.querySelector('html')

toggleTheme.addEventListener('change', event => {
    if(event.target.checked) {
        theDOM.setAttribute("data-theme", "dark")
    } else {
        theDOM.removeAttribute("data-theme")
    }
    console.log("HELLO")
})