document.addEventListener("keypress", function(e){
// console.log(e.key)
if (e.key=="Enter") {
    let inputs=document.getElementsByTagName("input")
    for (let i = 0; i < input.length; i++) {
        inputs[i].style.display="nome"
    }     
 }  
 }
)

function showInput(id){
document.getElementById(id).style.display="block"
document.getElementById(id).focus
}

function updTexto(id,texto){
document.getElementById(id).innerHTML=texto

}
function showAllInput(fila){
    document.querySelector("input#nom$").style.display="block"
    document.querySelector('inpunt#nom$(fila)').style.display="block"
}

function ocualtarFila(id){
    document.getElementById(id).style.display="none"
}

