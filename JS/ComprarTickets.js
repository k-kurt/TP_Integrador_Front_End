const datos={
    nombre:'',
    apellido:'',
    correo:'',
    seleccion:'',
    precio:'',
    cantidad:'',
    borrar:'',
    formulario:''

   
   
    }
   /*  function obtenerPrecio(cantidad,seleccion){
        
        var cantidad=datos.cantidad;
        var seleccion=datos.seleccion;
        
            console.log((cantidad*200));
        
}


obtenerPrecio(datos.cantidad,datos.seleccion); */

//obtengo los elementos

const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const correo = document.querySelector('#correo');
const seleccion = document.querySelector('#seleccion');
const precio = document.querySelector('#precio');
const cantidad = document.querySelector('#cantidad');
const resumen = document.querySelector('#resumen');
const borrar=document.querySelector('#borrar');
const formulario=document.querySelector('#formulario');




//poner precio en pantalla
/* precio.textContent = '5'; */

cantidad.addEventListener('input', function(e){  
    /* console.log(e.target.value);  */
     datos.cantidad=e.target.value;

    /*  const {cantidad}=datos;
     console.log((cantidad*200)); */
    
});

//seleccion
seleccion.addEventListener('click', function(e){  

    datos.seleccion=e.target.value;
    
   
    
});

precio.addEventListener('change', function(e){  

    datos.precio=e.target.value;
    
   
    
});



function totalApagar(){
    


resumen.addEventListener('click', function(e){  
    
     datos.resumen=e.target.value;
    

    const {cantidad,seleccion}=datos;

    if(seleccion==1){
        valor=((cantidad*200)*.2);
        console.log(valor);
        precio.textContent=valor;
       
    }if(seleccion==2){
        /* console.log((cantidad*200)*.5); */
        valor=((cantidad*200)*.5);
        console.log(valor);
        precio.textContent=valor;
        
    }if(seleccion==3){
        /* console.log((cantidad*200)*.85); */
        valor=((cantidad*200)*.85);
        console.log(valor);
        precio.textContent=valor;
    };

  
   
    
    
});


};


totalApagar();


borrar.addEventListener('click', function(e){
    datos.borrar=e.target.value;
    /* console.log("hola"); */
  /*  datos.formulario.reset(); */

   document.getElementById('nombre').value="";
   document.getElementById('apellido').value="";
   document.getElementById('correo').value="";
   document.getElementById('cantidad').value="";
   document.getElementById('precio').value="";
   

});


