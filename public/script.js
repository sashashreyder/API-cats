
function fetchCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            const catFactElement = document.getElementById('cat-fact');
            catFactElement.textContent = data.fact;
        })
        .catch(error => {
            console.error("Error fetching cat fact:", error);
            const catFactElement = document.getElementById('cat-fact');
            catFactElement.textContent = "Failed to load a cat fact. Please try again.";
        });
}

function fetchUselessFact() {
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then(response => response.json())
        .then(data => {
            const uselessFactElement = document.getElementById('useless-fact');
            uselessFactElement.textContent = data.text;
        })
        .catch(error => {
            console.error("Error fetching useless fact:", error);
            const uselessFactElement = document.getElementById('useless-fact');
            uselessFactElement.textContent = "Failed to load a useless fact. Please try again.";
        });
}

function fetchWeather() {
    fetch('https://wttr.in/?format=%C+%t')  
        .then(response => response.text())
        .then(data => {
            const weatherElement = document.getElementById('weather');
            weatherElement.textContent = `Current Weather: ${data}`; 
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            weatherElement.textContent = "Failed to load weather data.";
        });
}


document.addEventListener('DOMContentLoaded', () => {
    fetchCatFact();
    fetchUselessFact();
    fetchWeather();
});


