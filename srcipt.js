
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
gsap.from(".discount",{ x:"-600%",duration:"1",delay:"0.6",ease: "power2.out"});
gsap.from(".profile",{ x:"100%",duration:"1",ease: "power2.out"});
gsap.from(".brand",{ x:"-100%",duration:"1",ease: "power2.out"});
gsap.from(".roles",{ x:"-100%",duration:"1",delay:"0.4",ease: "power2.out"});
gsap.from(".socialicon",{ x:"-1000%",duration:"1",ease: "power2.out"});