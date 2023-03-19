//Variables
document.getElementById('boton1').onclick = function (){
document.getElementById("demo1").innerHTML="Edad: 27 años  E-mail: carolina_sinclair@correo.com  Teléfono: 1198765432";
    
}

    document.getElementById('boton2').onclick = function (){
    document.getElementById("demo2").innerHTML="Abogada en la empresa XXXX, 3 años";
}           

    document.getElementById('boton3').onclick = function (){
    document.getElementById("demo3").innerHTML="";
   
}
   


//funciones
   
boton1.addEventListener('click', DatosPersonales);
document.addEventListener('DOMContentLoaded',DatosPersonales); 

boton2.addEventListener('click', ExperienciaLaboral);
document.addEventListener('DOMContentLoaded',ExperienciaLaboral);

boton3.addEventListener('click', Conctacto);
document.addEventListener('DOMContentLoaded',Conctacto);
