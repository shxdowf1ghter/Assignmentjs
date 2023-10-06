function fetchTeamDataUsingGetJSON() {
    $.getJSON('team.json', function (data) {
      $.each(data.team, function (index, member) {
        var memberDiv = $('<div>').addClass('team-member');
        var name = $('<h2>').text(member.name);
        var position = $('<h5>').text(member.position);
        var bio = $('<p>').text(member.bio);
  
        memberDiv.append(name, position, bio);
        $('#team').append(memberDiv);
      });
    });
  }
  
  
  function fetchTeamDataUsingAjax() {
    $('#team').text('Loading...');
  
    $.ajax({
      type: 'GET',
      url: 'team.json',
      dataType: 'json',
      success: function (data) {
        $('#team').empty(); 
  
        $.each(data.team, function (index, member) {
          var memberDiv = $('<div>').addClass('team-member');
          var name = $('<h2>').text(member.name);
          var position = $('<h5>').text(member.position);
          var bio = $('<p>').text(member.bio);
  
          memberDiv.append(name, position, bio);
          $('#team').append(memberDiv);
        });
      },
      error: function () {
        $('#team').text('Error: Content could not be retrieved.');
      }
    });
  }
  $(document).ready(function () {
    fetchTeamDataUsingGetJSON();

    setTimeout(function () {
      $('#team').empty(); 
    }, 3000);
  });
  