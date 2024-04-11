fetch("./data/rental-prices.json")
    .then(response => response.json())
    .then(data => {
        // Use the JSON data here
        const rentalInfoElement = document.getElementById('rental-info');
        const rentalData = data['Max Rental Pricing'];

        // Create the table element
        const table = document.createElement('table');
        table.classList.add('rental-table');

        // Create the table header
        const headerRow = table.insertRow();
        const headerCell1 = headerRow.insertCell();
        headerCell1.textContent = 'Vehicle';
        const headerCell2 = headerRow.insertCell();
        headerCell2.textContent = 'Max. Persons';
        const headerCell3 = headerRow.insertCell();
        headerCell3.textContent = 'Reservation';
        const headerCell4 = headerRow.insertCell();
        headerCell4.textContent = 'Walk-In';

        // Iterate over the rental data and create table rows
        for (const vehicle in rentalData) {
            const rowData = rentalData[vehicle];
            const row = table.insertRow();

            const vehicleCell = row.insertCell();
            vehicleCell.textContent = vehicle;

            const personsCell = row.insertCell();
            personsCell.textContent = rowData['Max. Persons'];

            const reservationCell = row.insertCell();
            reservationCell.innerHTML = `Half Day (3 hrs): ${rowData.Reservation['Half Day (3 hrs)']}<br> Full Day: ${rowData.Reservation['Full Day']}`;

            const walkInCell = row.insertCell();
            walkInCell.innerHTML = `Half Day (3 hrs): ${rowData['Walk-In']['Half Day (3 hrs)']}<br> Full Day: ${rowData['Walk-In']['Full Day']}`;
        }

        // Append the table to the rental info element
        rentalInfoElement.appendChild(table);
    })
    .catch(error => {
        // Handle any errors that occur during the fetch
        console.error(error);
    });