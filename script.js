fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const ip = data.ip;

        // Fetch location using ipinfo.io
        fetch(`https://ipinfo.io/${ip}?token=YOUR_TOKEN`) // Replace YOUR_TOKEN with your actual token
            .then(response => response.json())
            .then(locationData => {
                const location = `${locationData.city}, ${locationData.region}, ${locationData.country}`;

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