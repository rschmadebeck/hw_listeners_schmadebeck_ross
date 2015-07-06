var heading = document.getElementById('mainHeading');

var clickCount = 0;

heading.addEventListener('click', function() {
    clickCount++;
    var message = '<p>This is click number ' + clickCount + '</p>';
    document.getElementById('output').innerHTML += message;
});

document.forms[0].onsubmit = function () {
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    console.log( 'The firstName is: ' + firstName );
    console.log( 'The lastName is: ' + lastName );
    console.log( 'The email is: ' + email );
    console.log( 'The message is: ' + message );
    event.preventDefault();
 };
