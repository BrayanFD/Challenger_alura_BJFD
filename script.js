const Texto_Encriptar = document.getElementById ("Texto_Encriptar");
const boton_Encriptar = document.getElementById ("boton_Encriptar");
const boton_desencriptar = document.getElementById ("boton_desencriptar");
const Texto_respuesta = document.getElementById ("Texto_respuesta");
const boton_copiar = document.getElementById ("boton_copiar");

let remplazar = [
    
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
    
]
const limpiar = (valor)=> {
    Texto_respuesta.innerHTML = valor
    Texto_Encriptar.value = ""
}

boton_Encriptar.addEventListener("click",() => {
    const mensaje = Texto_Encriptar.value.toLowerCase();
    function encriptar(nuevotexto){
        for (let i = 0; i < remplazar.length; i++){
            if (nuevotexto.includes(remplazar[i][0])){
                nuevotexto = nuevotexto.replaceAll(remplazar[i][0], remplazar[i][1]);
            }
        }
        return nuevotexto;
    }
    limpiar( encriptar(mensaje))
    
})


boton_desencriptar.addEventListener("click",() => {
    const mensajedesencriptao = Texto_Encriptar.value.toLowerCase();
    function desencriptar(textocorregido){
        for (let i = 0; i < remplazar.length; i++){
            if (textocorregido.includes(remplazar[i][1])){
                textocorregido = textocorregido.replaceAll(remplazar[i][1], remplazar[i][0]);
            }
        }
        return textocorregido;
    }
    limpiar( desencriptar(mensajedesencriptao))
  
})

boton_copiar.addEventListener("click", () =>{
    let copitexto = Texto_respuesta.innerHTML;
   navigator.clipboard.writeText(copitexto);
    console.log(copitexto);
})

