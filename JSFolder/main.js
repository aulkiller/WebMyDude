const navSlide = () => {
    const menubtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav-items');
    const navbar = document.querySelector('header');
    const navitems = document.querySelectorAll('.nav-items li')

    //Navtoggle
    menubtn.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        navbar.classList.toggle('nav-test');

        //animasi persatua
        navitems.forEach((items,index) => {
            if(items.style.animation){
                items.style.animation = '';
            } else {
                items.style.animation = `navitemsFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

}

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


navSlide();


