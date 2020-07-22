const navslide=()=>{
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');
    
    // nav toggle
    
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
         // animate links

    navLinks.forEach((link , index) =>{
        if(link.style.animation){
            link.style.animation='';
        }else{
            link.style.animation='navLinkfade 0.5s ease forwords ${index / 7 + 0.5}s';
        }
        

    });
    burger.classList.toggle('toggle')
    });

   

}
navslide();