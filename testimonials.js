    //  testimonials js
 
 
     // Testimonials data
     const testimonials = [
        {
            name: 'John Doe',
            image: './assets/John Doe.jpg',
            text: 'I recently had the pleasure of dining at Les Chèvres and I must say that it was an amazing experience. The amicable service made me feel welcomed and the comfortable seating was a great touch. I highly recommend Les Chèvres to anyone looking for a great night out.'
        },
        {
            name: 'Mary Jane',
            image: './assets/Mary J.jpg',
            text: 'I had the pleasure of dining at Les Chèvres recently and I was thoroughly impressed. The prices were great and the food was delectable. I felt that my money was well spent and I would definitely recommend this fine dining restaurant to anyone looking for a great experience.'
        },
        {
            name: 'Clara Smith',
            image: './assets/clara.jpg',
            text: 'I had the pleasure of dining at Les Chèvres recently and it was an amazing experience. The staff were incredibly friendly and attentive, and the wait times were surprisingly quick. The reservations process was also smooth and straightforward. But the best part was the food - absolutely brilliant!'
        },
    ];
   
    let currentTestimonialIndex = 0;
   
    function showNextTestimonial() {
        const testimonial = testimonials[currentTestimonialIndex];
   
        // Display the testimonial data
        document.getElementById('testimonial-name').textContent = testimonial.name;
        document.getElementById('testimonial-image').src = testimonial.image;
        document.getElementById('testimonial-text').textContent = testimonial.text;
   
        // Increment the index, and reset to 0 if it goes beyond the last testimonial
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    }
   
    // To set interval to automatically show the next testimonial every 3000 milliseconds (3 seconds)
    const intervalId = setInterval(showNextTestimonial, 3000);
   
    // To stop the interval after 20 seconds (20000 milliseconds) - Just for demonstration
    // setTimeout(() => {
    //     clearInterval(intervalId);
    // }, 20000);
 
 
    // Typed text JAVASCRIPT
 
    var typed = new Typed('#typed-text', {
        strings: ["What our customers are saying about us"],
        typeSpeed: 50,
        backSpeed: 40,
        loop: true
    });


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