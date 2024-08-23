let currentIndex = 0;
const images = [
  { src: 'https://via.placeholder.com/800x600?text=Image+1', alt: 'Image 1' },
  { src: 'https://via.placeholder.com/800x600?text=Image+2', alt: 'Image 2' },
  { src: 'https://via.placeholder.com/800x600?text=Image+3', alt: 'Image 3' },
  { src: 'https://via.placeholder.com/800x600?text=Image+4', alt: 'Image 4' }
];

function openModal(index) {
  currentIndex = index;
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("modalImg");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = images[currentIndex].src;
  caption.textContent = images[currentIndex].alt;
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function navigate(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  const modalImg = document.getElementById("modalImg");
  const caption = document.getElementById("caption");

  modalImg.src = images[currentIndex].src;
  caption.textContent = images[currentIndex].alt;
}

window.onclick = function(event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    closeModal();
  }
};
