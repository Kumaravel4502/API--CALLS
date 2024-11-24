// Select the HTML elements
const fetchButton = document.getElementById('fetchButton');
const loadingIndicator = document.getElementById('loading');
const contentDiv = document.getElementById('content');

const refreshButton = document.getElementById('refreshButton');

refreshButton.addEventListener('click', async () => {
    loadingIndicator.style.display = 'block';
    contentDiv.innerHTML = ''; // Clear previous content
    await fetchBaconIpsum(); // Re-fetch the data
});


// Function to fetch Bacon Ipsum data using the Fetch API
async function fetchBaconIpsum() {
  try {
    // Show loading indicator while fetching data
    loadingIndicator.style.display = 'block';
    contentDiv.innerHTML = ''; // Clear previous content

    // Fetch data from the Bacon Ipsum API
    const response = await fetch('https://baconipsum.com/api/?type=all');
    
    // Check if the response is ok
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    // Parse the JSON data
    const data = await response.json();

    // Hide loading indicator once data is fetched
    loadingIndicator.style.display = 'none';

    // Display the data in a creative way
    contentDiv.innerHTML = `<p>${data.join(' ')}</p>`;
  } catch (error) {
    // Hide loading indicator if there's an error
    loadingIndicator.style.display = 'none';

    // Display an error message
    contentDiv.innerHTML = `<p class="error">Oops! Something went wrong: ${error.message}</p>`;
  }
}

// Add event listener to the button to fetch data
fetchButton.addEventListener('click', fetchBaconIpsum);
