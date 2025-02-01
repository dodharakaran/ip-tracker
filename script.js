// Fetch IP address
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
                document.body.innerHTML = `
                    <h1>IP Address: ${ip}</h1>
                    <p>Location: ${location}</p>
                `;

                // Send details to a backend (optional)
                fetch('https://your-backend-url.com/log', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ ip, location })
                });
            });
    })
    .catch(error => {
        console.error('Error fetching IP/location:', error);
        document.body.innerHTML = '<h1>Error fetching details.</h1>';
    });