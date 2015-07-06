var heading = document.getElementById('mainHeading');

var clickCount = 0;

heading.addEventListener('click', function() {
    clickCount++;
    var message = '<p>This is click number ' + clickCount + '</p>';
    document.getElementById('output').innerHTML += message;
});




