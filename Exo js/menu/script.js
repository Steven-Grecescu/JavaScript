const menuToggle = document.querySelector('.btn');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})


// let nouveauParagraphe = document.createElement('p');
// nouveauParagraphe.textContent = "blublu" ;

// document.body.appendChild(nouveauParagraphe);