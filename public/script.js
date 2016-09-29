document.addEventListener("DOMContentLoaded", function(event) {
  var btn = document.getElementById('submit');
  var contain = document.getElementById('container');
  var form = document.getElementById('search-form');
  var queryString = form.query.value;

  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if(request.readyState === 4) {
      contain.style.border = '1px solid black';
      if(request.status ===200) {
        contain.innerHTML = '<h1>' + request.responseText + '</h1>' + '<p>' + request.responseText + '</p,>';
      } else {
        contain.innerHTML = 'An error has occured during your request: ' + request.status + ' ' + request.statusText;
      }
    }
  }

  request.open('Get', 'http://www.omdbapi.com/?t=' + queryString + '&y=&plot=short&r=jeson');

  btn.addEventListener('click', function(e) {
    e.preventDefault();

    this.style.display = "none";
    request.send();
  });

});