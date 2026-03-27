        function showsidebar(){
            console.log("sidebar open");
            document.getElementById('sidebar') .style.display="flex";
        
            // sidebar.style.zIndex="99999";

        }
        function hidesidebar(){
            document.getElementById('sidebar') .style.display="none";
        
        }

        const words = ["Frontend Developer", "UI/UX Designer"];

        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typing = document.querySelector(".typing");

        function type(){

        let currentWord = words[wordIndex];

        if(isDeleting){
        charIndex--;
        }else{
        charIndex++;
        }

        typing.textContent = currentWord.substring(0,charIndex);

        if(!isDeleting && charIndex === currentWord.length){
        isDeleting = true;
        setTimeout(type,1500);
        return;
        }

        if(isDeleting && charIndex === 0){
        isDeleting = false;
        wordIndex++;
        if(wordIndex === words.length){
        wordIndex = 0;
        }
        }

        setTimeout(type, isDeleting ? 60 : 120);

        }

        type();

        const skills = document.querySelectorAll(".skill");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

skills.forEach(skill => {
    observer.observe(skill);
});

const images = [
  "/images/Screenshot 2025-10-09 164724.png",
  "/images/Screenshot 2025-10-09 164805.png",
  "/images/Screenshot 2025-10-09 164938.png",
  "/images/Screenshot 2025-10-09 165029.png",
  "/images/Screenshot 2025-10-09 165225.png",
  "/images/Screenshot 2025-10-09 170140.png",
  "/images/Screenshot 2025-10-09 170328.png",
];

let currentIndex = 0;

function openGallery() {
  document.getElementById("galleryModal").style.display = "block";
  document.getElementById("sliderImage").src = images[currentIndex];
}

function closeGallery() {
  document.getElementById("galleryModal").style.display = "none";
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("sliderImage").src = images[currentIndex];
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("sliderImage").src = images[currentIndex];
}