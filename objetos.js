    const libro1={
        nombre: "Si decido quedarme",
        paginas:192,
        autor:"Gayle Forman",
        año:2009,
        estado:"disponible",
        method:function (a,b){
        return a+b;
    }
    }
    

    const libro2= {
        nombre: "Como agua para chocolate",
        paginas:240,
        autor:"Laura Esquivel",
        año:1989,
        estado:"prestado",
        method2:function (a,b){
        return a+b;
    }
    }
    

    const libro3={
        nombre:"Frankenstein",
        paginas:260,
        autor:"Mary Shelley",
        año:1818,
        estado:"disponible",
        method3:function (a,b){
        return a+b;
    }
    }
    

console.log(libro1,libro2,libro3);
console.log(libro1.method("El libro titulado ", libro1.nombre), libro1.method("fue escrito por ", libro1.autor), 
libro1.method("en el año ", libro1.año), libro1.method("y actualmente está: ", libro1.estado));


console.log(libro2.method2("El libro titulado ", libro2.nombre),libro2.method2("fue escrito por ", libro2.autor), 
libro2.method2("en el año ", libro2.año), libro2.method2("y actualmente está: ", libro2.estado));


console.log(libro3.method3("El libro titulado ", libro3.nombre), libro3.method3("fue esccrito por ", libro3.autor),
libro3.method3("en el año ", libro3.año), libro3.method3("y actualmente está: ", libro3.estado));