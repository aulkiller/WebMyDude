const navSlide = () => {
    const menubtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav-items');
    const navitems = document.querySelectorAll('.nav-items li')

    //Navtoggle
    menubtn.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');

        //animasi persatua
        navitems.forEach((items,index) => {
            if(items.style.animation){
                items.style.animation = '';
            } else {
                items.style.animation = `navitemsFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        });
    });


}

navSlide();