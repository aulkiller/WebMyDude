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

function validateName() {
    var name = document.getElementById('name').value;
    if (name.length == 0) {
        alert("Nama tidak bisa kosong");
        return false;

    }
    if (!name.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)) {
        alert("Masukkann Nama yang Valid");//Validation Message
        return false;
    }
    return true;
}

function validatePhone() {
    var phone = document.getElementById('phone').value;
    if (phone.length == 0) {
        alert("Nomor Handphone tidak bisa kosong");//Validation Message
        return false;
    }

    if (!phone.match(/^[\d ()+-]+$/)) {
        alert("PMasukkan Nomor Handphone yang valid");//Validation Message
        return false;
    }

    return true;

}

function validateEmail() {

    var email = document.getElementById('email').value;
    if (email.length == 0) {
        alert("Email tidak bisa kosong");//Validation Message
        return false;

    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        alert("Masukkan email yang valid");//Validation Message
        return false;

    }

    return true;

}


function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail()) {

        alert("Form ditolak");//Validation Message
        return false;
    }
    else {
        submitted = true;
        return true;
    } 
}

navSlide();


