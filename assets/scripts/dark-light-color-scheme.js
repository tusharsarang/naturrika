var color_scheme_toggle_button = document.getElementById("ColorSchemeToggleButton");
var moon_icon = document.getElementById("moonIcon");
var sun_icon = document.getElementById("sunIcon");

function enableDarkColorScheme() {
    document.documentElement.style.display = 'none';
    document.head.insertAdjacentHTML(
        'beforeend',
        '<link rel="stylesheet" href="assets/styles/dark-scheme.css" onload="document.documentElement.style.display = \'\'">'
    );
    console.log("🌞 👉🏻 🌚");
}

function enableLightColorScheme() {
    document.documentElement.style.display = 'none';
    document.head.insertAdjacentHTML(
        'beforeend',
        '<link rel="stylesheet" href="assets/styles/light-scheme.css" onload="document.documentElement.style.display = \'\'">'
    );
    console.log("🌚 👉🏻 🌞 ");
}

function hideSunShowMoon() {
    sun_icon.style.display = 'none';
    moon_icon.style.display = 'inline';
    console.log("🌚");
}

function showSunHideMoon() {
    sun_icon.style.display = 'inline';
    moon_icon.style.display = 'none';
    console.log("🌞");
}

// If `prefers-color-scheme` is not supported, fall back to light mode.
if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
    console.warn('Browser does not support the `prefers-color-scheme` media query.');

    // Light Mode
    enableLightColorScheme();
    hideSunShowMoon()
}

// Checks if User Prefers a Dark Color Scheme (False = Light Color Scheme)
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {

    // Dark Mode
    showSunHideMoon()

} else {

    // Light Mode
    hideSunShowMoon()

}

// Event Listener to check for any changes in User Color Scheme Preference 
window.matchMedia('(prefers-color-scheme: dark)').addListener(dark_color_scheme => {

    if (dark_color_scheme.matches) {

        // Dark Mode
        showSunHideMoon()

    } else {

        // Light Mode
        hideSunShowMoon()

    }
});

// On-Click Funtion to Toggle Color Scheme
function toggleColorScheme() {

    // If SunIcon display is not NONE, implies it's Dark Mode
    if (sun_icon.style.display != "none") {


        // Set Light Mode
        enableLightColorScheme();

        hideSunShowMoon()

    } else {

        // Set Dark Mode
        enableDarkColorScheme();

        showSunHideMoon()

    }

}

color_scheme_toggle_button.addEventListener('mouseover', function () {
    console.log("🐭over");
    sun_icon.classList.remove("material-icons-outlined")
    sun_icon.classList.add("material-icons")

    moon_icon.classList.remove("material-icons-outlined")
    moon_icon.classList.add("material-icons")
});

color_scheme_toggle_button.addEventListener('mouseout', function () {
    console.log("🐭out");
    sun_icon.classList.add("material-icons-outlined")
    sun_icon.classList.remove("material-icons")

    moon_icon.classList.add("material-icons-outlined")
    moon_icon.classList.remove("material-icons")
});