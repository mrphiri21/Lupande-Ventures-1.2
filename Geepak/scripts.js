// Basic JavaScript for potential future enhancements
// You can add functionality here like:
// - Mobile menu toggle
// - Testimonial slider initialization
// - Form validation


// Testimonial Carousel

console.log("JavaScript is loaded!");

// Automatic Testimonial Carousel
const testimonialCarousel = document.querySelector('.testimonial-carousel');
if (testimonialCarousel) {
    let scrollAmount = 0;
    const slideWidth = testimonialCarousel.offsetWidth; // Get the width of one slide

    function autoScroll() {
        scrollAmount += slideWidth;
        if (scrollAmount >= testimonialCarousel.scrollWidth) {
            scrollAmount = 0; // Reset to the beginning
        }
        testimonialCarousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    setInterval(autoScroll, 5000); // Scroll every 5 seconds (adjust as needed)
}

// Functionality for "Learn More" modals
document.addEventListener('DOMContentLoaded', function() {
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    const modal = document.getElementById('product-modal');
    const closeModalButton = modal.querySelector('.close-button');
    const modalBody = modal.querySelector('.modal-body');

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            modalBody.innerHTML = '<p>More details about this product will go here.</p>'; // Replace with dynamic content loading later
            modal.style.display = "block";
        });
    });

    closeModalButton.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Basic FAQ toggle functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
 // Our Services Carousel functionality
 const servicesCarousel = document.querySelector('.services-carousel');
 const prevButton = document.querySelector('.carousel-controls .carousel-prev');
 const nextButton = document.querySelector('.carousel-controls .carousel-next');

 if (servicesCarousel && prevButton && nextButton) {
     prevButton.addEventListener('click', () => {
         servicesCarousel.scrollBy({ left: -servicesCarousel.offsetWidth, behavior: 'smooth' });
     });

     nextButton.addEventListener('click', () => {
         servicesCarousel.scrollBy({ left: servicesCarousel.offsetWidth, behavior: 'smooth' });
     });
 }
});

