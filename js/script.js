$(document).ready(function () {
    // Smooth scroll to sections when clicking on navigation links
    $('.nav-link,.nav-link1').on('click', function (event) {
        event.preventDefault();
        const target = $(this).attr('href');
        smoothScroll(target);
    });


document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Display an alert on successful form submission
        alert("Thank you for submitting the form!");

        // Uncomment this line to actually submit the form using AJAX or fetch API
        // contactForm.submit();
    });
});

    // Function to handle navigation smooth scrolling
    function smoothScroll(target) {
        $('html, body').animate(
            {
                scrollTop: $(target).offset().top,
            },
            1000
        );
    }
});


    // Assuming your video element has an ID of "videoPlayer"
    const videoElement = document.getElementById('videoPlayer');

    // Function to stop the video playback
    function stopVideo() {
    if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0; // Reset the video to the beginning
    }
}

// Call the stopVideo function when needed
stopVideo();