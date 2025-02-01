// Fetch IP address and location when the page loads
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const ip = data.ip;

        // Fetch location using ip-api.com
        fetch(`http://ip-api.com/json/${ip}`)
            .then(response => response.json())
            .then(locationData => {
                const location = `${locationData.city}, ${locationData.regionName}, ${locationData.country}`;

                // Display the IP and location
                document.getElementById('details').innerHTML = `
                    <h1>IP Address: ${ip}</h1>
                    <p>Location: ${location}</p>
                `;
            })
            .catch(error => {
                console.error('Error fetching location:', error);
                document.getElementById('details').innerHTML = '<h1>Error fetching location.</h1>';
            });
    })
    .catch(error => {
        console.error('Error fetching IP:', error);
        document.getElementById('details').innerHTML = '<h1>Error fetching IP.</h1>';
    });