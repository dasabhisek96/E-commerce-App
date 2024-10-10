// Get all radio buttons and option sections
const offers = document.querySelectorAll('input[name="offer"]');
const optionSections = document.querySelectorAll('.options');

// Loop through each offer box and handle clicks
offers.forEach((offer, index) => {
    offer.addEventListener('change', function() {
        optionSections.forEach((section, i) => {
            section.style.display = (index === 1 && offer.checked) ? 'flex' : 'none'; // Only shows options for 2 Units
        });
    });
});
