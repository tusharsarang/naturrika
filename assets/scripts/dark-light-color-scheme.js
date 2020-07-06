var dark_light_toggle_icon = document.getElementById("ColorSchemeToggleIcon");

// If `prefers-color-scheme` is not supported, fall back to light mode.
// In this case, light.css will be downloaded with `highest` priority.
if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {

    console.log('Browser does not support the `prefers-color-scheme` media query.');

    // Set Light Color Scheme CSS
    document.documentElement.style.display = 'none';
    document.head.insertAdjacentHTML(
        'beforeend',
        '<link rel="stylesheet" href="assets/styles/light-scheme.css" onload="document.documentElement.style.display = \'\'">'
    );

    // Add Moon Icon & Remove Sun Icon
    dark_light_toggle_icon.classList.add("fa-moon")
    dark_light_toggle_icon.classList.remove("fa-sun")
}

// Checks if User Prefers a Dark Color Scheme (False = Light Color Scheme)
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {

    // User Prefers Dark Mode
    console.log("🌚");

    // Add Sun Icon & Remove Moon Icon
    dark_light_toggle_icon.classList.add("fa-sun")
    dark_light_toggle_icon.classList.remove("fa-moon")

} else {

    // User Prefers Light Mode
    console.log("🌞");

    // Add Moon Icon & Remove Sun Icon
    dark_light_toggle_icon.classList.add("fa-moon")
    dark_light_toggle_icon.classList.remove("fa-sun")
}

// Event Listener to check for any changes in User Color Scheme Preference 
window.matchMedia('(prefers-color-scheme: dark)').addListener(dark_color_scheme => {

    if (dark_color_scheme.matches) {
        // User Prefers Dark Mode
        console.log("🌚");

        // Set Dark Color Scheme CSS
        document.documentElement.style.display = 'none';
        document.head.insertAdjacentHTML(
            'beforeend',
            '<link rel="stylesheet" href="assets/styles/dark-scheme.css" onload="document.documentElement.style.display = \'\'">'
        );

        // Add Sun Icon & Remove Moon Icon
        dark_light_toggle_icon.classList.add("fa-sun")
        dark_light_toggle_icon.classList.remove("fa-moon")

    } else {

        // User Prefers Light Mode
        console.log("🌞");

        // Set Light ColorScheme CSS
        document.documentElement.style.display = 'none';
        document.head.insertAdjacentHTML(
            'beforeend',
            '<link rel="stylesheet" href="assets/styles/light-scheme.css" onload="document.documentElement.style.display = \'\'">'
        );

        // Add Moon Icon & Remove Sun Icon
        dark_light_toggle_icon.classList.add("fa-moon")
        dark_light_toggle_icon.classList.remove("fa-sun")
    }
});

// On-Click Funtion to Toggle Color Scheme
function toggleColorScheme() {

    // If Current icon class is Moon implies it's Dark Mode
    if (dark_light_toggle_icon.classList.contains("fa-moon")) {

        // Color Scheme Changing form Dark --to--> Light
        console.log("🌚 👉🏻 🌞 ");

        // Set Dark ColorScheme CSS
        document.documentElement.style.display = 'none';
        document.head.insertAdjacentHTML(
            'beforeend',
            '<link rel="stylesheet" href="assets/styles/dark-scheme.css" onload="document.documentElement.style.display = \'\'">'
        );

        // Remove Moon Icon & Add Sun Icon 
        dark_light_toggle_icon.classList.remove("fa-moon")
        dark_light_toggle_icon.classList.add("fa-sun")

    } else {

        // Color Scheme Changing form Light --to--> Dark
        console.log("🌞 👉🏻 🌚");

        // Set Light ColorScheme CSS
        document.documentElement.style.display = 'none';
        document.head.insertAdjacentHTML(
            'beforeend',
            '<link rel="stylesheet" href="assets/styles/light-scheme.css" onload="document.documentElement.style.display = \'\'">'
        );

        // Remove Sun Icon & Add Moon Icon
        dark_light_toggle_icon.classList.remove("fa-sun")
        dark_light_toggle_icon.classList.add("fa-moon")

    }

}


$(document).ready(function () {
    $("#ColorSchemeToggleIcon").mouseover(function () {
        dark_light_toggle_icon.classList.remove("far")
        dark_light_toggle_icon.classList.add("fas")
    });
    $("#ColorSchemeToggleIcon").mouseout(function () {
        dark_light_toggle_icon.classList.remove("fas")
        dark_light_toggle_icon.classList.add("far")
    });
});