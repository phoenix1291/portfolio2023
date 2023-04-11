document.addEventListener("DOMContentLoaded", function(){
const animatedGif = document.querySelector('.animated-gif');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animatedGif.classList.add('in-view');
// Ajoute la classe "in-view" si l'élément est visible
    } else {
      animatedGif.classList.remove('in-view');
// Supprime la classe "in-view" si l'élément n'est plus visible
    }
  });
});

observer.observe(animatedGif);
});
console.clear
console.log("ça fonctionne")

console.log(window.innerHeight);

console.log(self.innerWidth);

console.log(MouseEvent);