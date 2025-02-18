async function fetchCatFact() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        document.getElementById('cat-fact').textContent = data.fact;
    } catch (error) {
        console.error("Error fetching cat fact:", error);
        document.getElementById('cat-fact').textContent = "Failed to load a cat fact. Try again.";
    }
}

async function fetchUselessFact() {
    try {
        const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
        const data = await response.json();
        document.getElementById('useless-fact').textContent = data.text;
    } catch (error) {
        console.error("Error fetching useless fact:", error);
        document.getElementById('useless-fact').textContent = "Failed to load a useless fact. Try again.";
    }
}

async function fetchWeather() {
    try {
        if (!navigator.geolocation) {
            throw new Error("Geolocation is not supported by your browser.");
        }

        navigator.geolocation.getCurrentPosition(async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weathercode`);
            const data = await response.json();

            const temperature = data.current.temperature_2m;
            
            document.getElementById('weather').textContent = `🌍 Temperature: ${temperature}°C`;
        }, () => {
            document.getElementById('weather').textContent = "Failed to get location.";
        });
    } catch (error) {
        console.error("Error fetching weather:", error);
        document.getElementById('weather').textContent = "Failed to load weather.";
    }
}



document.addEventListener('DOMContentLoaded', () => {
    fetchCatFact();
    fetchUselessFact();
    fetchWeather();
});


