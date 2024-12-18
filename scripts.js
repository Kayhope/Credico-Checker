// Function to highlight duplicates in the clientID column (column 2)
function highlightClientIdDuplicates() {
    const table = document.getElementById('excelTable');
    const rows = table.getElementsByTagName('tr');

    // Assuming ClientID is in the second column (index 1)
    const clientIdIndex = 1;  // Column 2 is index 1 (0-based index)

    const clientIdValues = [];
    const duplicateClientIds = new Set();

    // Loop through rows and collect clientID values
    for (let i = 1; i < rows.length; i++) {  // Start from 1 to skip header row
        const cells = rows[i].getElementsByTagName('td');
        const clientId = cells[clientIdIndex].textContent.trim();

        if (clientIdValues.includes(clientId)) {
            // Mark as duplicate
            duplicateClientIds.add(clientId);
        } else {
            clientIdValues.push(clientId);
        }
    }

    // Highlight the duplicates in the table
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const clientId = cells[clientIdIndex].textContent.trim();

        // Highlight the duplicates
        if (duplicateClientIds.has(clientId)) {
            cells[clientIdIndex].classList.add('duplicate');
        }
    }
}

// Add event listener to the "Go" button to trigger the highlight function
document.getElementById('goButton').addEventListener('click', function () {
    highlightClientIdDuplicates();
});
