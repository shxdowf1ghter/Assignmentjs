$(document).ready(function() {
    
    $.ajax({
        url: 'characters.json',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            
            populateTable(data);

            
            $('#search').on('input', function() {
                searchByName($(this).val());
            });

            $('#filter-a-m').on('click', function() {
                filterByLastNameRange('A', 'M');
            });

            $('#filter-n-z').on('click', function() {
                filterByLastNameRange('N', 'Z');
            });
        },
        error: function(error) {
            console.error('Error loading characters:', error);
        }
    });

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
    }

    function searchByName(searchTerm) {
        var table = $('#character-table');

        table.find('tr').each(function() {
            var row = $(this);
            var firstName = row.find('td:first-child').text().toLowerCase();

            if (firstName.includes(searchTerm.toLowerCase())) {
                row.addClass('highlight');
            } else {
                row.removeClass('highlight');
            }
        });
    }

    function filterByLastNameRange(startRange, endRange) {
        var table = $('#character-table');

        table.find('tr').each(function() {
            var row = $(this);
            var lastName = row.find('td:nth-child(2)').text().toUpperCase();

            if (lastName >= startRange && lastName <= endRange) {
                row.show();
            } else {
                row.hide();
            }
        });

        updateFilterCounts(); 
    }

    function updateFilterCounts() {
        var table = $('#character-table');
        var visibleRows = table.find('tr:visible');

        var countAtoM = visibleRows.filter(function() {
            return $(this).find('td:nth-child(2)').text().toUpperCase() <= 'M';
        }).length;

        var countNtoZ = visibleRows.filter(function() {
            return $(this).find('td:nth-child(2)').text().toUpperCase() > 'M';
        }).length;

        $('#filter-a-m span').text(countAtoM);
        $('#filter-n-z span').text(countNtoZ);
    }
});
$(document).ready(function() {

    $.ajax({
        url: 'characters.json',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
           
            populateTable(data);

            
            $('#search').on('input', function() {
                searchByName($(this).val());
            });

            $('#filter-a-m').on('click', function() {
                filterByLastNameRange('A', 'M');
            });

            $('#filter-n-z').on('click', function() {
                filterByLastNameRange('N', 'Z');
            });
        },
        error: function(error) {
            console.error('Error loading characters:', error);
        }
    });

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
    }

    function searchByName(searchTerm) {
        var table = $('#character-table');

        table.find('tr').each(function() {
            var row = $(this);
            var firstName = row.find('td:first-child').text().toLowerCase();

            if (firstName.includes(searchTerm.toLowerCase())) {
                row.addClass('highlight');
            } else {
                row.removeClass('highlight');
            }
        });
    }

    function filterByLastNameRange(startRange, endRange) {
        var table = $('#character-table');

        table.find('tr').each(function() {
            var row = $(this);
            var lastName = row.find('td:nth-child(2)').text().toUpperCase();

            if (lastName >= startRange && lastName <= endRange) {
                row.show();
            } else {
                row.hide();
            }
        });

        updateFilterCounts(); 
    }

    function updateFilterCounts() {
        var table = $('#character-table');
        var visibleRows = table.find('tr:visible');

        var countAtoM = visibleRows.filter(function() {
            return $(this).find('td:nth-child(2)').text().toUpperCase() <= 'M';
        }).length;

        var countNtoZ = visibleRows.filter(function() {
            return $(this).find('td:nth-child(2)').text().toUpperCase() > 'M';
        }).length;

        $('#filter-a-m span').text(countAtoM);
        $('#filter-n-z span').text(countNtoZ);
    }
});
