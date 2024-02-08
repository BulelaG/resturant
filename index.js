 // Testimonials data
 const testimonials = [
    {
        name: 'John Doe',
        image: 'http://www.sololearn.com/uploads/slider/2.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Jane Smith',
        image: 'http://www.sololearn.com/uploads/slider/3.jpg',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    // Add more testimonials as needed
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

// Set interval to automatically show the next testimonial every 5000 milliseconds (5 seconds)
const intervalId = setInterval(showNextTestimonial, 3000);

// Stop the interval after 20 seconds (20000 milliseconds) - Just for demonstration
setTimeout(() => {
    clearInterval(intervalId);
}, 20000);