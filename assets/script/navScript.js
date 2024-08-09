document.addEventListener("DOMContentLoaded", function () { 
  const header = document.querySelector("header");
  setTimeout(() => {
    // header.classList.remove('delayClass')
    // document.querySelector('nav').classList.remove('delayClass')
    document.querySelectorAll('.delayClass').forEach(ele =>{
      ele.classList.remove('delayClass')
    })
  }, 800);
  if(window.innerWidth <= 700)
    header.classList.add("sticky")
  const menuButton = document.getElementById("menu");
  const links = document.querySelectorAll('a[href^="#"]');
  // Function to handle the scroll
  function handleScroll() {
    
    if (window.innerWidth <= 700 && window.scrollY <= 100) {
      header.classList.add("sticky");
      return;
    }
    header.classList.toggle("sticky", window.scrollY >= 100);
  }

  // Function to handle menu button click
  function handleMenuButtonClick() {
    header.classList.remove("sticky");
    
  }

  // Function to handle anchor links click
  function handleLinkClick(event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  // Function to close the menu when clicking outside and show the sticky menu
  function handleCloseOutside(event) {
    if (!menuButton.contains(event.target)) {
      header.classList.add("sticky");
    }
  }

  window.addEventListener("scroll", handleScroll);
  menuButton.addEventListener("click", handleMenuButtonClick);
  links.forEach((link) => link.addEventListener("click", handleLinkClick));

  // Listen for clicks anywhere in document
  document.addEventListener("click", handleCloseOutside);
});
