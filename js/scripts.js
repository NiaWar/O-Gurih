// Function to show a specific section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section'); 
    sections.forEach(section => {
        section.classList.remove('active'); 
    });
    document.getElementById(sectionId).classList.add('active'); 
}
// Function to redirect to WhatsApp
function orderWhatsApp() {
    const phone = "6287725323752"; 
    const message = encodeURIComponent("Halo, saya tertarik untuk membeli Opak Gurih."); 
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
}

// Function to show a specific section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section'); 
    sections.forEach(section => {
        section.classList.remove('active'); 
    });
    document.getElementById(sectionId).classList.add('active'); 

    // Toggle footer visibility
    const footer = document.getElementById('footer');
    if (sectionId === 'contact') {
        footer.style.display = 'block'; 
    } else {
        footer.style.display = 'none'; 
    }
}