
const togglebtn = document.querySelector(".toggle-icon");
const dropdown = document.querySelector(".dropdown-menu");

togglebtn.addEventListener("click",()=>{
   dropdown.classList.toggle('top-20')
});
///toggle btn end

//mouse start

const cursorDot = document.querySelector(".cursor-dot");
        const cursorOutline = document.querySelector(".cursor-outline");

         window.addEventListener("mousemove", function (e) {
        const posX = e.clientX;
        const posY = e.clientY; 

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;

        cursorOutline.animate(
            {
                left: `${posX}px`,
                top: `${posY}px`
            },
            { duration: 800, fill: "forwards" }
        );
    });
        
  

    // ///end
 
    var typed = new Typed('.typing-text', {
        strings: [
          'Frontend Developer',
          'Backend Developer',
          'UI Designer',
          'Wordpress Developer',
          'Web Hosting Service',
          'Web Development'
        ],
        typeSpeed: 90,
        loop: true // Enable looping
      });
      


    
