const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".campo-texto");
const atencion = document.querySelector(".texto-alerta");
const respuesta = document.querySelector(".resultado");
const contenido = document.querySelector(".mensaje-caja");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[%.\¿\?~!\¡@#%^&*()_|}\{[\]>\<:"';,\u0300-\u036f']/g, "");

    if(texto == ""){
        atencion.style.background = "yellow";        
        atencion.style.fontWeight = "800";
        atencion.style.color = "black";
        atencion.textContent = "El campo de texto no debe estar vacío";

        setTimeout(()=>{
            atencion.removeAttribute("style");
        }, 1500);
    }

    else if(texto !== txt){
        atencion.style.background = "yellow";        
        atencion.style.fontWeight = "800";
        atencion.style.color = "black";
        atencion.textContent = "No debe tener caracteres especiales";


        setTimeout(()=>{
            atencion.removeAttribute("style");
        }, 1500);
    }
    else if(texto !== texto.toLowerCase()){ 
        atencion.style.background = "yellow";        
        atencion.style.fontWeight = "800";
        atencion.style.color = "black";
        atencion.textContent = "El texto debe estar escrito en minúscula";

        setTimeout(()=>{
            atencion.removeAttribute("style");
        }, 1500);
    }

    else{
        texto =texto.replace(/e/, "enter");
        texto =texto.replace(/i/, "imes");
        texto =texto.replace(/a/, "ai");
        texto =texto.replace(/o/, "ober");
       texto =texto.replace(/u/, "ufat");

       respuesta.innerHTML = texto;       
       contenido.remove();
       
    }
    
  
});

btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[%.\¿\?~!\¡@#%^&*()_|}\{[\]>\<:"';,\u0300-\u036f']/g, "");

    if(texto == ""){
        atencion.style.background = "yellow";        
        atencion.style.fontWeight = "800";
        atencion.style.color = "black";
        atencion.textContent = "El campo de texto no debe estar vacío";

        setTimeout(()=>{
            atencion.removeAttribute("style");
        }, 1500);
    }

    else if(texto !== txt){
        atencion.style.background = "yellow";        
        atencion.style.fontWeight = "800";
        atencion.style.color = "black";
        atencion.textContent = "No debe tener caracteres especiales";


        setTimeout(()=>{
            atencion.removeAttribute("style");
        }, 1500);
    }
    else if(texto !== texto.toLowerCase()){
        atencion.style.background = "yellow";        
        atencion.style.fontWeight = "800";
        atencion.style.color = "black";
        atencion.textContent = "El texto debe estar escrito en minúscula";

        setTimeout(()=>{
            atencion.removeAttribute("style");
        }, 1500);
    }

    else{
        texto =texto.replace(/enter/, "e");
        texto =texto.replace(/imes/, "i");
        texto =texto.replace(/ai/, "a");
        texto =texto.replace(/ober/, "o");
        texto =texto.replace(/ufat/, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility ="inherit";
        contenido.remove();
       
    }
    
  
});

btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    navigator.clipboard.readText();


});