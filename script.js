// Mobil menü toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const navLinks = document.getElementById("nav-links");

mobileMenuButton.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Modal (Projeyi İncele galeri)
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementsByClassName("close")[0];
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;
let currentImages = [];

// "Projeyi İncele" linklerine tıklama
document.querySelectorAll(".project-view").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    currentImages = btn.getAttribute("data-images").split(",");
    currentIndex = 0;
    showImage(currentIndex);
    modal.style.display = "block";
  });
});

function showImage(index) {
  modalImg.src = currentImages[index];
}

// İleri/Geri butonları
nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  showImage(currentIndex);
};

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  showImage(currentIndex);
};

// Modal kapatma (X butonu)
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Modal kapatma (boş alana tıklayınca)
modal.onclick = e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
