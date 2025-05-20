// Declare variable to store navbar element
const navElement =document.getElementById('navbar');
// detect scroll event on document
document.addEventlistener('scroll', function() {
 //console.log(window.scrollV);
 if (Window.scrollV > 70) {
    // change navbar bg to blue
    navbar.style.backgroundColor = '#0779E4';
 } else {
    //change navbar bg to transparent
    navElement.style.backgroundColor = 'transparent';
 }
 });
