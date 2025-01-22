let catFactFromServer = null;
console.log(catFactFromServer);

// Fetch the cat fact
fetch('https://catfact.ninja/fact')
  .then(response => {
    return response.json(); // Parse JSON response
  })
  .then(catFact => {
    console.log("The raw response is", catFact);

    // Access the 'fact' property and update the variable
    catFactFromServer = catFact.fact;

    // Display the cat fact in the HTML
    const catFactElement = document.getElementById('cat-fact');
    catFactElement.textContent = catFactFromServer;
  })
  .catch(error => {
    console.error("Error fetching cat fact:", error);

    // Display an error message in the HTML
    const catFactElement = document.getElementById('cat-fact');
    catFactElement.textContent = "Failed to load a cat fact. Please try again.";
  });
