$(document).ready(function() {
    var charactersData; // Variable to store the character data

    // Function to fetch data from JSON file using jQuery AJAX
    function fetchData() {
        $.ajax({
            url: 'data/characters.json', // Adjust the path based on your project structure
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                charactersData = data;
                populateTable(charactersData);
            },
            error: function(error) {
                console.error('Error loading characters:', error);
            }
        });
    }

    // Function to populate the table with character data
    function populateTable(characters) {
        var table = $('#character-table');
        table.empty();

        characters.forEach(function(character) {
            var row = $('<tr>');
            row.append('<td>' + character.firstName + '</td>');
            row.append('<td>' + character.lastName + '</td>');
            row.append('<td>' + character.age + '</td>');
            row.append('<td>' + character.gender + '</td>');
            row.append('<td>' + character.occupation + '</td>');

            table.append(row);
        });

        updateFilterCounts();
        enableSorting(); // Enable sorting after populating the table
    }

    // Function to enable sorting when table headings are clicked
    function enableSorting() {
        $('th').on('click', function() {
            var index = $(this).index(); // Get the index of the clicked heading
            sortTable(index);
            updateChevron($(this));
        });
    }

    // Function to sort the table based on the selected column
    function sortTable(index) {
        charactersData.sort(function(a, b) {
            var valueA = a[Object.keys(a)[index]].toLowerCase();
            var valueB = b[Object.keys(b)[index]].toLowerCase();
            return valueA.localeCompare(valueB);
        });

        populateTable(charactersData);
    }

    // Function to update the chevron based on sorting order
    function updateChevron(clickedHeading) {
        // Reset chevrons
        $('th').removeClass('asc desc').find('span').html('');

        var sortOrder = clickedHeading.hasClass('asc') ? 'desc' : 'asc';
        clickedHeading.addClass(sortOrder);

        // Add chevron to the clicked heading
        clickedHeading.find('span').html(sortOrder === 'asc' ? '&#x25B2;' : '&#x25BC;');
    }

    // ... Other functions (searchByName, filterByLastNameRange, updateFilterCounts) remain unchanged ...

    // Fetch data when the document is ready
    fetchData();
});
