document.addEventListener("DOMContentLoaded", async function () {
    
    if (document.querySelector(".auraMenu")){
        const mobileWrap = document.querySelector(".aurabody header");
        const mobileMenu = document.querySelector(".auraMenu");
        
        // console.log(mobileWrap);
        
        mobileMenu.addEventListener("click", function(){
            this.classList.toggle("open");
            mobileWrap.classList.toggle("open");
        });
    }
    if (document.querySelector(".mySwiper")){
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 'auto',
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            observer: true,
            observeParents: true,
        });
    }
});