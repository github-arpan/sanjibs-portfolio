// document.addEventListener("DOMContentLoaded", function() {
    const aboutbtn = document.getElementById("about-btn");
    const aboutEl = document.querySelectorAll(".about-us");
    const voicebtn = document.getElementById("voice-btn"); 
    const workEl = document.querySelectorAll(".work-img");
    const arhadhyabtn = document.getElementById("arhadhya");
    const contactbtn = document.getElementById("contactSec");

    
    const arhadhyaEl = document.querySelectorAll(".arhadhya-info");
    const contactEl = document.querySelectorAll(".form-info");

   
    aboutbtn.addEventListener("click", function() {
        aboutEl.forEach(function(about) {
            about.scrollIntoView({ behavior: "smooth" });
        });
    });

    voicebtn.addEventListener("click", function() {
        workEl.forEach(function(work) {
            work.scrollIntoView({ behavior: "smooth" });
        });
    });
    
    contactbtn.addEventListener("click", function() {
        contactEl.forEach(function(contact) {

            contact.scrollIntoView({ behavior: "smooth" });
        });
       
    });
   
    arhadhyabtn.addEventListener("click",function(){
        arhadhyaEl.forEach(function(el){
            el.scrollIntoView({ behavior: "smooth" })
        })
        
    })
document.getElementById("scrollUpbtn").addEventListener("click", function(){
    window.scrollTo({top:0, behavior: "smooth"})

})
   
document.getElementById("home-btn").addEventListener("click", function(){
    location.reload()
})
