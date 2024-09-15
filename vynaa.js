// Objek untuk menyimpan pengaturan
const settings = {
    title: "Arya Aynn | Good Job",
    metaTitle: "Arya Aynn|| Good Job",
    metaDescription: "Business & Creator",
    metaKeywords: "Arya, profil, siapa Aynn?",
    metaRobots: "index, follow",
    profileImage: "profile.jpg",
    name: "Arya Aynn ",
    occupation: "Creator & Business",
    location: "📍 Kalimantan Utara, Indonesia",
    socialLinks: [
        { name: "Instagram", url: "https://instagram.com/br_ayaa" },
        { name: "WhatsApp", url: "https://wa.me/6282154940346" },
        { name: "YouTube", url: "https://youtube.com/@MeAyaa" },
        { name: "Facebook", url: "https://facebook.com/your-facebook" },
        { name: "Donasi", url: "https://saweria.co/aryawid },
        { name: "Github", url: "https://github.com/arya-wn" }
        // Tambahkan link sosial lainnya di sini
    ]
};

// Fungsi untuk mengisi konten halaman dari settings.js
function fillContent() {
    document.title = settings.title;
    document.getElementById("meta-title").setAttribute("content", settings.metaTitle);
    document.getElementById("meta-description").setAttribute("content", settings.metaDescription);
    document.getElementById("meta-keywords").setAttribute("content", settings.metaKeywords);
    document.getElementById("meta-robots").setAttribute("content", settings.metaRobots);
    document.getElementById("profile-image").setAttribute("src", settings.profileImage);
    document.querySelector(".name").textContent = settings.name;
    document.getElementById("occupation").textContent = settings.occupation;
    document.getElementById("location").innerHTML = `<i class="fa fa-map-marker icon" aria-hidden="true"></i> ${settings.location}`;

    const socialLinksContainer = document.getElementById("social-links");
    settings.socialLinks.forEach(link => {
        const linkElement = document.createElement("a");
        linkElement.setAttribute("href", link.url);
        linkElement.setAttribute("target", "_blank");
        linkElement.textContent = link.name;
        socialLinksContainer.appendChild(linkElement);
    });

    // Menambahkan centang hijau
    const checkmark = document.createElement("div");
    checkmark.classList.add("checkmark");
    document.querySelector(".verified").appendChild(checkmark);
}

// Memanggil fungsi untuk mengisi konten saat halaman dimuat
fillContent();
