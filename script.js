document.addEventListener("DOMContentLoaded", function() {
    var currentSlide = 0;
    var totalSlides = document.querySelectorAll('.carousel-item').length;
    var carouselItems = document.querySelectorAll('.carousel-item');
    var intervalId; // Variable to store the interval ID
    
    // Move to next slide
    function nextSlide() {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateCarousel();
      }
    }
    
    // Move to previous slide
    function prevSlide() {
      if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
      }
    }
    
    // Update carousel display
    function updateCarousel() {
      var offset = -currentSlide * 100;
      for (var i = 0; i < carouselItems.length; i++) {
        carouselItems[i].style.transform = "translateX(" + offset + "%)";
      }
    }
    
    // Start automatic slide change
    function startAutoSlide() {
      intervalId = setInterval(function() {
        nextSlide();
      }, 5000); // Change image every 5 seconds (5000 milliseconds)
    }
    
    // Stop automatic slide change
    function stopAutoSlide() {
      clearInterval(intervalId);
    }
    
    // Attach event listeners to control buttons
    document.querySelector('.carousel-control-prev').addEventListener('click', function() {
      stopAutoSlide();
      prevSlide();
      startAutoSlide();
    });
    
    document.querySelector('.carousel-control-next').addEventListener('click', function() {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    });
    
    // Start automatic slide change when the page loads
    startAutoSlide();
  });
  









  // FDNGBVIDFNBM


// Updating number 
// Get the div elements
const numberDisplays = [
  document.getElementById('numberDisplay1'),
  document.getElementById('numberDisplay2'),
  document.getElementById('numberDisplay3'),
  document.getElementById('numberDisplay4')
];

// Initial values for the numbers
const targetNumbers = [39, 20000, 60, 5000];

// Function to update each number display
function updateNumberDisplays() {
  for (let i = 0; i < numberDisplays.length; i++) {
      const numberDisplay = numberDisplays[i];
      const targetNumber = targetNumbers[i];

      // Get the current number
      let currentNumber = parseInt(numberDisplay.textContent);

      // Calculate the increment per step
      const increment = targetNumber / 100; // targetNumber in 100 steps

      // Update the display with the incremented number
      // numberDisplay.textContent = Math.min(targetNumber, Math.round(currentNumber + increment));
      numberDisplay.textContent = Math.min(targetNumber, Math.round(currentNumber + increment)) + "+";
  }

  // If any of the current numbers is less than its target, schedule the next update
  let continueUpdating = false;
  for (let i = 0; i < numberDisplays.length; i++) {
      if (parseInt(numberDisplays[i].textContent) < targetNumbers[i]) {
          continueUpdating = true;
          break;
      }
  }

  if (continueUpdating) {
      setTimeout(updateNumberDisplays, 15); // Update every 15 milliseconds
  } else {
      // Append "+" symbol to each number after completion
      numberDisplays.forEach(display => {
          display.textContent += "";
      });
  }
}

// Function to start counting when the container is intersecting with the viewport
function startCounting(entries, observer) {
  if (entries[0].isIntersecting) {
      // Call the function to start updating the number displays
      updateNumberDisplays();
      // Stop observing once started counting
      observer.unobserve(entries[0].target);
  }
}

// Create an Intersection Observer instance
const observer = new IntersectionObserver(startCounting, { threshold: 0.5 });

// Get the container element
const container = document.querySelector('.container');

// Observe the container
observer.observe(container);
