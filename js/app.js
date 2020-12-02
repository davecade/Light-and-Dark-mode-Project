
const App = (() => {

    // -- Cache the DOM
    const toggleTheme = document.querySelector('input')
    const currentMode = document.querySelector('.mode')
    const theDOM = document.querySelector('html')
    const currentIcon = document.querySelector('.fas')
    const $images = document.querySelector('.images')

    // -- State
    const state = {
        darkMode: false
    }

    // -- Event Listeners
    const listeners = () => {
        toggleTheme.addEventListener('change', event => {
            if(event.target.checked) {
                currentMode.innerHTML = "Dark Mode";
                theDOM.setAttribute("data-theme", "dark")
                currentIcon.classList.replace('fa-sun', 'fa-moon')
                state.darkMode = true
                
            } else {
                currentMode.innerHTML = "Light Mode";
                theDOM.removeAttribute("data-theme")
                currentIcon.classList.replace('fa-moon', 'fa-sun')
                state.darkMode = false
                
            }
            render();
        })
    }

    // -- Render the DOM
    const render = () => {
        let markup = ''

        markup = `
            <div class="img-container">
                <h2>Fundamentals</h2>
                <img src="images/undraw_static_website_${state.darkMode ? "dark" : "light"}.svg" alt="">
            </div>
            <div class="img-container">
                <h2>Code Thinker</h2>
                <img src="images/undraw_code_thinking_${state.darkMode ? "dark" : "light"}.svg" alt="">
            </div>
            <div class="img-container">
                <h2>Create the Matrix</h2>
                <img src="images/undraw_hacker_mind_${state.darkMode ? "dark" : "light"}.svg" alt="">
            </div>
            <div class="img-container">
                <h2>Proud Works</h2>
                <img src="images/undraw_feeling_proud_${state.darkMode ? "dark" : "light"}.svg" alt="">
            </div>
        `
        
        $images.innerHTML = markup;
    }

    // -- Initialize
    const init = () => {
        listeners();
        render();
    }

    return {
        init
    }

})();

App.init();