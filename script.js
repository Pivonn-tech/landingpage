document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for header height
                    behavior: "smooth"
                });
            }
        });
    });

    // Form submission confirmation message
    const form = document.getElementById("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for subscribing!");

        // Optionally, you can add code here to submit the form data to your server.
    });

    // Read More button functionality
    const readMoreBtn = document.getElementById("read-more-btn");
    const exploreMoreDiv = document.getElementById("explore-more");

    readMoreBtn.addEventListener("click", function() {
        if (exploreMoreDiv.style.display === "none") {
            exploreMoreDiv.style.display = "block";
            readMoreBtn.textContent = "Read Less";
        } else {
            exploreMoreDiv.style.display = "none";
            readMoreBtn.textContent = "Read More";
        }
    });

    // More interactivity here
    // Example: Add a click event to an element
    const yourElement = document.getElementById("your-element-id");
    yourElement.addEventListener("click", function() {
        // Add your custom JavaScript behavior here
    });

    // More interactive features can be added similarly.
});
