window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const animatedElements = document.querySelectorAll('.animated');
  
    animatedElements.forEach(element => {
      if (scrollPosition > element.offsetTop - window.innerHeight * 0.75) {
        element.classList.add('active');
      }
    });
  });

  