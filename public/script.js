async function fetchCatFact() {
    try {
        const factResponse = await fetch('https://catfact.ninja/fact');
        const factData = await factResponse.json();
        document.getElementById('cat-fact').textContent = factData.fact;

        const imageResponse = await fetch('https://api.thecatapi.com/v1/images/search');
        const imageData = await imageResponse.json();
        document.getElementById('cat-img').src = imageData[0].url;
    } catch (error) {
        console.error("Error fetching cat fact or image:", error);
        document.getElementById('cat-fact').textContent = "Failed to load a cat fact.";
    }
}

async function fetchUselessFact() {
    try {
        const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
        const data = await response.json();
        document.getElementById('useless-fact').textContent = data.text;

        const redditResponse = await fetch('https://www.reddit.com/r/memes/top.json?limit=50');
        const redditData = await redditResponse.json();

        const memes = redditData.data.children.filter(m => m.data.url.includes('.jpg') || m.data.url.includes('.png'));
        if (memes.length > 0) {
            const randomMeme = memes[Math.floor(Math.random() * memes.length)].data.url;
            document.getElementById('useless-img').src = randomMeme;
        } else {
            document.getElementById('useless-img').src = `https://source.unsplash.com/400x250/?funny,humor,meme&random=${Math.random()}`;
        }
        
        document.getElementById('useless-img').style.display = "block";

    } catch (error) {
        console.error("Error fetching useless fact or meme:", error);
        document.getElementById('useless-fact').textContent = "Failed to load a useless fact. Try again.";
        document.getElementById('useless-img').style.display = "none"; 
    }
}


document.addEventListener('DOMContentLoaded', () => {
    fetchCatFact();
    fetchUselessFact();
});



