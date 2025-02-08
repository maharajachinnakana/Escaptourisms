  const divs = document.querySelectorAll('.display-box > .display-img');
  const anchors = document.querySelectorAll('.anchor');
  const displayContainer = document.querySelector('.display');
  let currentIndex = 0;
  let scrollInterval;
  let hoverTimeout;

  // Create an observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const index = [...divs].indexOf(entry.target);
      if (entry.isIntersecting) {
        anchors[index].classList.add('active');
      } else {
        anchors[index].classList.remove('active');
      }
    });
  }, { threshold: 0.5 }); // Adjust threshold for when the section is considered visible

  // Observe each section
  divs.forEach(div => observer.observe(div));

  // Automatic scrolling function
  function autoScroll() {
    currentIndex = (currentIndex + 1) % divs.length;
    divs[currentIndex].scrollIntoView({ behavior: 'smooth' });
  }

  // Start automatic scrolling
  function startAutoScroll() {
    scrollInterval = setInterval(autoScroll, 3000); // Adjust the interval as needed
  }

  // Stop automatic scrolling
  function stopAutoScroll() {
    clearInterval(scrollInterval);
  }

  // Restart automatic scrolling with delay
  function restartAutoScroll() {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(startAutoScrol, 3000); // Restart after 5 seconds
  }

  // Event listeners for hover
  displayContainer.addEventListener('mouseenter', stopAutoScroll);
  displayContainer.addEventListener('mouseleave', restartAutoScroll);

  // Initialize automatic scrolling
  startAutoScroll();
  
  
      document.querySelectorAll('.toggle-header').forEach(function(header) {
        header.addEventListener('click', function() {
          const content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });
      });

        function toggleFields() {
          var service = document.getElementById("service").value;
          var additionalFields = document.getElementById("additional-fields");

          if (service) {
            additionalFields.classList.remove("hidden");
          } else {
            additionalFields.classList.add("hidden");
          }
        }