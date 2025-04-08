
// Get the video and main content elements
const intro = document.getElementById('intro');
        const mainContent = document.getElementById('main-content');
        
        // Wait for the intro video to finish
        intro.onended = function() {
            // Hide the intro video
            intro.style.display = 'none';
            
            // Show the main content
            mainContent.style.display = 'block';
        }
// Skip button functionality
const skipBtn = document.getElementById('skipBtn');
skipBtn.addEventListener('click', () => {
    intro.style.display = 'none';
    skipBtn.style.display = 'none';
    mainContent.style.display = 'block';
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
    
let index = 0;
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide");
  let lastslide = totalSlides.length-1
  let firstslide = 0

function moveSlide(step) {
    index += step
    console.log(index);
    if(index > lastslide)index = 0
    if(index < firstslide) index = lastslide
    for (let i = 0; i < totalSlides.length; i++) {
           totalSlides[i].style.display = "none"
    }
    totalSlides[index].style.display = "block"
  }
  setInterval(()=>{moveSlide(1)},3000)
  
  /* gallery image */
  // Get modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementsByClassName("close")[0];

// Add click event to all gallery images
document.querySelectorAll(".gallery .images img").forEach(img => {
  img.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

// Close modal on 'x' click
closeBtn.onclick = function() {
  modal.style.display = "none";
}

