class Sistema{
    
    constructor(){

        this.listaCompra = [];
        this.listaCategoria = [];
        this.listaExperiencia = []

    }

    agregarCompra (laCompra){
        
        this.listaCompra.push(laCompra)

    }

    agregarCategoría (laCategoria){
        
        this.listaCategoria.push(laCategoria)

    }

    agregarExperiencia (laExperiencia){
        
        this.listaCompra.push(laExperiencia)

    }
}

class Comprar{
    
    constructor (nombre,mail){

        this.nombre = nombre;
        this.mail = mail;
    }

    toString (){

        return this.nombComprador + " " + this.mail
    }
}

class Categoría{

    constructor (nombre,detCateg){

        this.nombre = nombre;
        this.detCateg = detCateg;
    }

    toString(){

        return this.nombre
    }
}

class Experiencia{

    constructor (titulo,descripcion,precio,cantidad,categoria){

        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria
    }

    toString(){

        return this.nombCateg + " " + this.detCateg
    }
}