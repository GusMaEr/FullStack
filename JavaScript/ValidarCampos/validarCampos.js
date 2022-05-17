function validarEMail() {

    let email=document.getElementById("email").value 
    if (email.length<=0 ||email.indexOf("@")==-1) {
        document.getElementById("mensaje").innerHTML="Email incorrecto"
        document.getElementById("mensje").style.backgroundColor="red"
    } else {
        document.getElementById("mensje").innerHTML="Email correcto"
        document.getElementById("mensaje").style.backgroundColor="lightblue"
        
    }

}

function updFortaleza() {
    let pass=document.getElementById("pass").value
    if (pass.length ) {
        
    } else {
        
    }
    
}