/*const body = document.querySelector("body");

function changeBackgroundColor() {
    const color = "#0f0f0f";
    body.style.backgroundColor = color;
}

const btn = document.querySelector("#btn");

btn.onclick = changeBackgroundColor;*/


document.addEventListener('DOMContentLoaded', () => {
    // Get the button and the navigation bar
    const navToggle = document.querySelector('.nav-toggle');
    const navBar = document.getElementById('navbar');

    // Add a click event listener to the button
    navToggle.addEventListener('click', () => {
        // Toggle the 'nav-visible' class on the navigation bar
        navBar.classList.toggle('nav-visible');
    });
});


/*document.addEventListener('DOMContentLoaded', () => {
    // Get the button and the main content sections
    const changeBtn = document.getElementById('btn');
    const sections = document.querySelectorAll('#welcome-section, #skills, #projects, #contact, footer');

    // Define a list of color themes. Each object contains colors for the background and text.
    const themes = [
        // Default theme
        { background: '#c8cbde', text: '#1a2037' },
        // Dark theme
        { background: '#1a2037', text: '#a98f76' },
        // Light theme
        { background: '#f5f5dc', text: '#1a2037' },
        // Another dark theme
        { background: '#36454F', text: '#fff' }
    ];
    let currentThemeIndex = 0;

    // Add a click event listener to the button
    changeBtn.addEventListener('click', () => {
        // Increment the theme index
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        const newTheme = themes[currentThemeIndex];

        // Apply the new colors to each section
        sections.forEach(section => {
            section.style.backgroundColor = newTheme.background;
            section.style.color = newTheme.text;
        });

        // The body's background can also be changed to the new background color
        document.body.style.backgroundColor = newTheme.background;
    });
});*/