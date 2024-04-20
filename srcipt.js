
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
        // Define the animation inside the mousemove event
    ///mouse end
    ///gsap library for animation
  
    // gsap.from(".discount",{duration:1,x:'-300%',delay:2});
    // gsap.from(".brand",{duration:1,x:'-300%'});
    // gsap.from(".socialicon",{duration:1,x:"-300%"});
    // gsap.from(".profile",{duration:1,x:'200%'});

    // gsap.registerPlugin(ScrollTrigger)
    // gsap.from('.box', {
    //       scrollTrigger:{
    //       trigger:".box",
    //       toggleActions: "restart none none none",
    //       },
    //       x:"-400%",
    //       duration:2
    //   });
     
    //   gsap.registerPlugin(ScrollTrigger)
    //   gsap.from('.imgtext', {
    //     scrollTrigger:{
    //     trigger:".imgtext",
    //     toggleActions: "restart none none none",
    //     },
    //     x:"400%",
    //     duration:1.2
    // });
    // gsap.registerPlugin(ScrollTrigger)
    // gsap.from('.imgtext2', {
    //     scrollTrigger:{
    //     trigger:".imgtext2",
    //     toggleActions: "restart none none none",
    //     },
    //     x:"400%",
    //     duration:2,
    //     delay:0.5
    // });
    // gsap.registerPlugin(ScrollTrigger)
    // gsap.from('.gym', {
    //     scrollTrigger:{
    //     trigger:".gym",
    //     toggleActions: "restart none none none",
    //     },
    //     x:"400%",
    //     duration:2
    // });

    // gsap.registerPlugin(ScrollTrigger)
    // gsap.from('.gym2', {
    //     scrollTrigger:{
    //     trigger:".gym2",
    //     toggleActions: "restart none none none",
    //     },
    //     x:"-400%",
    //     duration:2,
    // });
    

    // gsap.registerPlugin(ScrollTrigger)
    // gsap.from('.comp1', {
    //     scrollTrigger:{
    //     trigger:".gym2",
    //     toggleActions: "restart none none none",
    //     },
    //     x:"-400%",
    //     duration:2,
    // });

    // gsap.registerPlugin(ScrollTrigger)
    // gsap.from('.comp2', {
    //     scrollTrigger:{
    //     trigger:".gym",
    //     toggleActions: "restart none none none",
    //     },
    //     x:"400%",
    //     duration:2
    // });

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
      


    