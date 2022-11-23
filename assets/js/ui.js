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
});