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

// disini bagian after submit masalahnya butuh jquery
        $("#gform").submit((e)=>{
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/a/alfvaco.com/macros/s/AKfycbxTrcDZqlVUeLyIctDGt2z6EnVwPRtbuHiYFxCK/exec",
                data:$("#gform").serialize(),
                method:"post",
                success:function (response){
                    alert("Form berhasil dikirim")
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
                error:function (err){
                    alert("Ada masalah")
    
                }
            })
        })