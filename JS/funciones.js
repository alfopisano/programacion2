window.addEventListener("load", inicio)
let miSistema = new Sistema


function inicio (){
   
    document.getElementById("idBotonComprar").addEventListener("click",agregarCompra)
    document.getElementById("idFormCompra").addEventListener("input", function(){
        if(this.checkValidity()){
            document.getElementById("idBotonComprar").disabled = false;
        } else {
            document.getElementById("idBotonComprar").disabled = true;
        }
    });

    document.getElementById("idBotonAgregarCategoria").addEventListener("click",agregarCategoria)
    document.getElementById("idBotonBajaCategoria").addEventListener("click",eliminarCategoria)
    document.getElementById("idBotonAltaExperiencia").addEventListener("click",agregarExperiencia)
    document.getElementById("idBotonBajaExperiencia").addEventListener("click",eliminarExperiencia)


}

function agregarCompra(){

    let formulario = document.getElementById("idFormCompra");
    let botonCompra = document.getElementById("idBotonComprar");

    botonCompra.disabled = true;

    if(formulario.reportValidity()){
        
        let nombre = document.getElementById("idNombreComprador").value;
        let mail = document.getElementById("idMail").value;
        
        let laCompra = new Comprar (nombre,mail);
        miSistema.agregarCompra(laCompra)
        alert("compra agregada a la lista") 
        formulario.reset();

        botonCompra.disabled = false
    }
}

function agregarCategoria(){

    let formulario = document.getElementById("idFormCategoria");


    if(formulario.reportValidity()){
        
        let nombre = document.getElementById("idNombreCategoria").value;
        let detCateg = document.getElementById("idDetallesCategoria").value;
        
        let laCategoria = new Categoría (nombre,detCateg);
        miSistema.agregarCategoría(laCategoria)
        alert("categoria agregada al combo") 
        formulario.reset();

        actualizar("idComboCategoriasIzquierda",miSistema.listaCategoria,"option")
        actualizar("idCategoriaExperiencia",miSistema.listaCategoria,"option")
        actualizar("idComboCategoriasAbajo",miSistema.listaCategoria,"option")

    }


}

function eliminarCategoria(){

}

function agregarExperiencia(){
    alert("aprete agregar 2")
}

function eliminarExperiencia(){
    alert("aprete eliminar")
}

  
function actualizar (idElemento, listaElementos, tipoNodo){

    let elemento = document.getElementById(idElemento)
   

    for(let item of listaElementos){

        let nodo = document.createElement(tipoNodo)
        let txtNodo = document.createTextNode(item)
        nodo.append(txtNodo)
        elemento.appendChild(nodo)

    }

}

let cantidadDeExperiencias= 1;

function agregarExperiencia(){
    let tituloExperiencia = document.getElementById("idTituloExperiencia").value;
    let descripcionDeExperiencia = document.getElementById("idDescripcionExperiencia").value;
    if(cantidadDeExperiencias=1){
        ponerEnTabla1(tituloExperiencia, descripcionDeExperiencia);
        cantidadDeExperiencias++;
    }
    else{
        ponerEnTabla2(tituloExperiencia, descripcionDeExperiencia);
    }
        
}
function ponerEnTabla1(titulo, descripcion){
    let tabla1= document.getElementById("idTabla");
    let fila1= tabla1.insertRow();      var cell1 = row.insertCell(0);
    fila1.innerHTML = titulo + descripcion;

    
}


function ponerEnTabla2(titulo, descripcion){
    let tabla= document.getElementById("idTabla");
    let fila= tabla.insertRow();
    let celda1= fila.insertCell();
    let celda2= fila.insertCell();
    celda1.innerHTML = titulo;
    celda2.innerHTML= descripcion;
}


document.getElementById("idCualExperiencia").innerHTML =textoResultado;
