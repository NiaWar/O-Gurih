// Function to redirect to WhatsApp with specific product details
function orderWhatsApp(namaProduk, harga, deskripsi) {
    const phone = "6287725323752"; 
    const message = encodeURIComponent(`Halo, saya tertarik untuk membeli produk berikut:
    
Nama Produk: ${namaProduk}
Harga: ${harga}
Deskripsi: ${deskripsi}`);
    
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