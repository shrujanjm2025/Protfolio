        function animateSkills() {
    const skillSection = document.getElementById('myskills');
    const skillBars = document.querySelectorAll('.skillrate');

    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos - 100) {
      skillBars.forEach(bar => {
        bar.style.width = bar.getAttribute('data-width');
      });
      window.removeEventListener('scroll', animateSkills);
    }
  }

  window.addEventListener('scroll', animateSkills);
  window.addEventListener('load', animateSkills);

let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            let slides = document.getElementsByClassName("slide");
            if (n > slides.length) { slideIndex = 1; }
            if (n < 1) { slideIndex = slides.length; }

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex - 1].style.display = "block";
        }
        function scrollToProfile() {
            document.getElementById("header").scrollIntoView({ behavior: "smooth" });
    }
        function scrollToAboutme() {
            document.getElementById("aboutme").scrollIntoView({ behavior: "smooth" });
    }
        function scrollToMyskills() {
            document.getElementById("myskills").scrollIntoView({ behavior: "smooth" });
    }
        function scrollToContactinfo() {
            document.getElementById("contactinfo").scrollIntoView({ behavior: "smooth" });
    }