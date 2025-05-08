function myFunction() {
    alert("Selamat Datang di Website Portofolio Saya");
  }

const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card_gallery");

// console.log(filterButtons, filterableCards);

const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    // console.log(e.target);

    filterableCards.forEach(card_gallery => {
        card_gallery.classList.add("hide");

        if (card_gallery.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card_gallery.classList.remove("hide");
            
        };
    });
};



filterButtons.forEach(button => button.addEventListener("click", filterCards));

// Comment
document.addEventListener("DOMContentLoaded", () => {
    const comentForm = document.getElementById("coment-form");
    
    comentForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from reloading the page
        alert("Message Sent!");
        comentForm.reset(); // Clear the form fields
    });
});
// Contact
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from reloading the page
        alert("Message Sent!");
        contactForm.reset(); // Clear the form fields
    });
});
