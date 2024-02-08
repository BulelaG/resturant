function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
 
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all required fields.');
        return false;
    }
    return true;
}