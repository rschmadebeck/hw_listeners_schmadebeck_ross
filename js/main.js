var heading = document.getElementById('mainHeading');

var clickCount = 0;

heading.addEventListener('click', function() {
    clickCount++;
    var message = '<p>This is click number ' + clickCount + '</p>';
    document.getElementById('output').innerHTML += message;
});

document.addEventListener('submit', function (event) {
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    console.log( 'The firstName is: ' + firstName );
    console.log( 'The lastName is: ' + lastName );
    console.log( 'The email is: ' + email );
    console.log( 'The message is: ' + message );
    event.preventDefault();
 });

//MouseOver of TwinForks image that writes to the console that the user has hovered or moused over the image

document.getElementById('TwinForks').addEventListener('mouseover', function() {
    console.log( 'User moused over image');
})

//MouseDown on Image TwinForks image that writes to the console that the user has clicked down on the image

document.getElementById('TwinForks').addEventListener('mousedown', function() {
    console.log( 'User moused down on the image');
})

//MouseOut of external hyperlink that writes to the console the user has moved off the link.

document.getElementsByClassName('links')[0].addEventListener('mouseout', function() {
    console.log( 'User moused out the website link');
})
