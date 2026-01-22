const prompt = require ("prompt-sync")();

//____________________________________________________________________________
//                          1   ESTRUCTURA DE DATOS
//_____________________________________________________________________________

//a) Se crea un array de objetos llamado libros que contiene 10 libros. 

let libros = [{   
    id: 1,
    titulo: "la divina comedia",
    autor: "dante alighieri",
    anio: 1963,
    genero: "Poesia",
    disponible: true
},
 
{   id: 2,
    titulo: "la soledad",
    autor: "gabriel rolon",
    anio: 2026,
    genero: "psicologia",
    disponible: false
},
{
    id: 3,
    titulo: "bajo el agua",
    autor: "paula hawkins",
    anio: 2017,
    genero: "suspenso",
    disponible: false

},

{ id: 4,
    titulo: "el retrato de dorian grey",
    autor: "oscar wilde",
    anio: 2005,
    genero: "novela gotica",
    disponible: true
 },

{
    id: 5,
    titulo: "rebelion en la granja",
    autor: "george orwell",
    anio: 2006,
    genero: "novela",
    disponible: true
},
{ 
    id: 6,
    titulo: "el psicoanalista",
    autor: "john katzenbach",
    anio: 2002,
    genero: "suspenso",
    disponible: false

},
{
    id: 7,
    titulo: "practicas de mindfulness",
    autor: "marina lisenberg",
    anio: 2021,
    genero: "psicologia",
    disponible: true
},
{
    id:8,
    titulo: "la chica del tren",
    autor: "paula hawkins",
    anio: 2015,
    genero: "suspenso",
    disponible: true

},
{
    id: 9,
    titulo: "papillon",
    autor: "henri charriere",
    anio: 1969,
    genero: "novela",
    disponible: true
},
{
    id:10,
    titulo: "mujercitas",
    autor: "louisa may alcott",
    anio: 1868,
    genero: "novela",
    disponible: false
}]


//b) Crear un array de objetos llamado usuarios con al menos 5 usuarios

let usuarios = [{  
    
    id: 1,
    nombre: "Antocorts",
    email: "antocorts@gmail.com",
    librosPrestados: [2,6]
},
{
    id: 2,
    nombre: "MarianaFuego",
    email: "marianafuego96@hotmail.com",
    librosPrestados: []
},
{
    id: 3,
    nombre: "Ana",
    email:"ana@gmail.com",
    librosPrestados: [10]
},
{
    id: 4,
    nombre: "Manuel",
    email: "manuel@gmail.com",
    librosPrestados: []
},
{
    id: 5,
    nombre: "Pablo",
    email:"pablomartinez@gmail.com",
    librosPrestados: []
}
]

// console.log(libros)   //para pruebas
// console.log(usuarios)   //para pruebas
//____________________________________________________________________________
//                  2    FUNCIONES DE GESTION DE LIBROS
//_____________________________________________________________________________


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//Implementamos una función agregarLibro(id, titulo, autor, anio, genero)
function agregarLibro (){
    console.log(`_____________________________________`)
    console.log(`Vamos a ingresar los datos del libro:`)
    console.log(`_____________________________________`)
    const id = parseInt(prompt("Ingrese id: "));
    const titulo = prompt("Ingrese titulo: ");
    const autor = prompt("Ingrese autor: ");
    const anio = parseInt(prompt("Ingrese año: "));
    const genero = prompt("Ingrese genero: ");

    const libro = {
    id,
    titulo,
    autor,
    anio,
    genero,
    disponible: true
  };

  libros.push(libro);
    console.log("Libro agregado correctamente.");
}


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/*se crea una función buscarLibro(criterio, valor) que permita buscar libros por título,
autor o género utilizando el algoritmo de búsqueda lineal.*/
function buscarLibro() {

     
    console.log(`_________________________________________________`)
    console.log(`Vamos a  buscar libro por criterio.`)
    console.log(`("titulo", "autor" o "genero")`)
    console.log(`ingrese en minusculas.`)
    console.log(`_________________________________________________`)
    const criterio = prompt("Buscar por :   ")
    const valor = prompt("Ingrese el valor: ");


        const resultado = libros.filter(libro => libro[criterio] === valor);

    console.log(resultado.length ? resultado : "No se encontraron libros.");
}
//____________________________________________________________________________



//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/* se desarrolla una función ordenarLibros(criterio) que ordene los libros por título o año 
utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los 
libros ordenados en la consola.*/
function ordenarLibros() {

    console.log(`_______________________________________________________`)
    console.log(`Vamos a  ordenar libro por criterio, ("titulo"o "anio"):`)
    console.log(`_______________________________________________________`)
    const criterio = prompt("Ordenar por titulo o anio:  ");

    for (let i = 0; i < libros.length; i++) {
        for (let j = 0; j < libros.length - 1; j++) {

            if (libros[j][criterio] > libros[j + 1][criterio]) {
                let temp = libros[j];
                libros[j] = libros[j + 1];
                libros[j + 1] = temp;
            }

        }
    }

    console.log(`libros ordenados por ${criterio}:`);
    console.log(libros);

}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Se desarrolla una función borrarLibro(id) que elimine el libro que se le pase por parámetro.  
function borrarLibro() {
    console.log(`_______________________________________________________`)
    console.log(`Vamos a borrar un libro:`)
    console.log(`_______________________________________________________`)
    const id = parseInt(prompt("Ingrese id del libro a borrar"));

    const indice = libros.findIndex(libro => libro.id === id);

    if (indice !== -1) {
        libros.splice(indice, 1);
        console.log(`El libro con id ${id} ha sido eliminado`);
    } else {
        console.log(`No existe un libro con id ${id}`);
    }
}



//____________________________________________________________________________
//              3    GESTION DE USUARIOS
//_____________________________________________________________________________


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//*Implementamos una función agregarusuario(nombre,email)*/
function registrarUsuario () {
    const nombre = prompt("Ingrese nombre:");
    const email = prompt("Ingrese email:");

    const usuario = {
        id: usuarios.length + 1,
        nombre,
        email,
        librosPrestados: []
    };

    usuarios.push(usuario);
    console.log("Usuario registrado");
    // console.log(usuarios);  //esto se oculta para probar la funcion.
}


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// b) se Implementa una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios 

function mostrarTodosLosUsuarios(){
    console.log(usuarios)
}
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// c) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email. 

function buscarUsuario(){
    const email = prompt("Ingrese email del usuario: ");

    const usuario = usuarios.find(u => u.email === email);

    console.log(usuario ? usuario : "Usuario no encontrado");
}


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.
function borrarUsuario() {
    const email = prompt("Ingrese email del usuario a borrar");

    const indice = usuarios.findIndex(usuario => usuario.email === email);

    if (indice !== -1) {
        usuarios.splice(indice, 1);
        console.log("Usuario eliminado");
    } else {
        console.log("Usuario no encontrado");
    }
}

//____________________________________________________________________________
//                          4   SISTEMA DE PRESTAMOS
//_____________________________________________________________________________

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario.
function prestarLibro() {  // armamos la funcion de prestar libro y validamos id con usuario
     const idLibro = parseInt(prompt("Ingrese id del libro: "));
    const idUsuario = parseInt(prompt("Ingrese id del usuario: "));

    const libro = libros.find(l => l.id === idLibro);
    const usuario = usuarios.find(u => u.id === idUsuario);

 if (!libro || !usuario) { // si el usuario o el libro no existen, se corta  y se avisa con el mensaje
        console.log("Libro o usuario inexistente"); //  return evita que el codigo siga y rompa
        return;
    }

    if (!libro.disponible) { // si el libro no esta disponible.. 
        console.log("El libro ya no está disponible");
        return;
    }

    libro.disponible = false; // no esta disponible

    if (!Array.isArray(usuario.librosPrestados)) { // aca consultamos si array es realmente un array
        usuario.librosPrestados = [];
    }

    usuario.librosPrestados.push(idLibro); // aca se agrega el libro
    console.log(`Libro "${libro.titulo}" prestado a ${usuario.nombre}`);
    
}

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario. 
function devolverLibro (){
     const idLibro = parseInt(prompt("Ingrese id del libro"));
    const idUsuario = parseInt(prompt("Ingrese id del usuario"));

    const libro = libros.find(l => l.id === idLibro); // se busca al libro por su id 
    const usuario = usuarios.find(u => u.id === idUsuario); // se busca al usuario por su id

    if (!libro || !usuario) { // por si no existe, te avisa
        console.log("Libro o usuario inexistente");
        return;
    }
// Validacion de si el usuario posee una lista, en caso que si, verifica si tiene o no ese libro prestado
    if (!Array.isArray(usuario.librosPrestados) || !usuario.librosPrestados.includes(idLibro)) { 
        console.log("El usuario no tiene este libro prestado");
        return;
    }
// el true es devolver a la biblioteca
    libro.disponible = true;
    usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== idLibro);
        console.log(`Libro "${libro.titulo}" devuelto por ${usuario.nombre}`);
}



//____________________________________________________________________________
//                         5    REPORTES
//_____________________________________________________________________________


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*a) Se crea una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .fi lter(), .reduce()) para generar un reporte con la siguiente información:
✔ Cantidad total de libros.
✔ Cantidad de libros prestados.
✔ Cantidad de libros por género.
✔ Libro más antiguo y más nuevo
*/
function generarReporteLibros() { // cantidad total de libros
    const totalLibros = libros.length; // length es la cantidad de libros en esa lista
    const cantidadPrestados = libros.filter(l => !l.disponible).length;// disp === false
    const cantidadporGenero = libros.reduce((acc, libro) => {// reduce>recorrelalista
 acc[libro.genero] = (acc[libro.genero] || 0) + 1; // si el genero no existe empeza en cero sino
    return acc; // agrega +1 devuelve el listado completo
  }, {});

  const reporte = {
  totalLibros,
  cantidadPrestados,
  cantidadporGenero
  };

console.log(reporte);
return reporte;

}



//____________________________________________________________________________
//                         6    IDENTIFICACION AVANZADA DE LIBROS
//_____________________________________________________________________________


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/*
a) Implementar una función librosConPalabrasEnTitulo() que identifi que y muestre todos los libros cuyo título contiene más de una palabra (no títulos que contengan números ni otros caracteres).
b) La función debe devolver un array con los títulos de esos libros y mostrarlo en la consola.
*/
function librosConPalabrasEnTitulo() { // declaramos la funcion
    const librosFiltrados = libros.filter(libro => { // empezamos a filtrar 

        // Más de una palabra
        const masDeUnaPalabra = libro.titulo.trim().split(" ").length > 1;

        return masDeUnaPalabra;
    });

    console.log("Libros con más de una palabra en el título:"); // visualizamos mensaje
    librosFiltrados.forEach(libro => { // le damos valor a cada libro encontrado con su titulo 
        console.log(`- ${libro.titulo}`);
    });
}


//____________________________________________________________________________
//                         7    CALCULOS ESTADISTICOS
//_____________________________________________________________________________

/*  
a) se Desarrolla una función calcularEstadisticas() 
que utiliza el objeto Math para calcula y muestra:

✔ Promedio de años de publicación de los libros.
✔ Año de publicación más frecuente.
✔ Diferencia en años entre el libro más antiguo y el más nuevo.

*/
//--------------------------------------funcion para contar los años------------------------------------------
function contarAnios(anio) {
    let contador = 0; // Inicializa un contador en 0
    for (let indiceLibros = 0; indiceLibros <= libros.length - 1; indiceLibros++) { // Recorre el array 'libros'
        if (anio === libros[indiceLibros].anio) { // Si el año del libro actual coincide con el 'anio' buscado
            contador++; // Incrementa el contador
        }
    }
    return contador; // Devuelve el contador con los años de los libros (cuantos de cada año hay)
    //guardamos esto como funcion auxiliar.
}

//-----------------------------------------ESTADISTICAS-------------------------------------------------------
function calcularEstadisticas() {



    //_______________________________________PROMEDIO________________________________________________________
    //              Calcula el promedio de los años de publicación de los libros
    let anioDeLibrosAcumulados = 0; // Inicializa una variable para acumular los años de los libros
    // Recorre el array de libros y suma los años de cada libro
    for (let indiceLibros = 0; indiceLibros <= libros.length - 1; indiceLibros++) { 
      anioDeLibrosAcumulados += libros[indiceLibros].anio; // va sumando los años al contador.
    }
    
    // Calcula y muestra el promedio de los años de los libros
    console.log(`Promedio de año de libros:, ${anioDeLibrosAcumulados} / ${libros.length}`); 
  


    //_______________________________________FRECUENCIA______________________________________________________
    //                     Calcular el año de publicación más frecuente
    let anioMasFrecuente = 0; // Inicializa una variable para almacenar el año más frecuente
    let cantidadDeApariciones = 0; // Inicializa una variable para almacenar la cantidad de veces que aparece el año más frecuente
  
    // Recorrer el array de libros
    for (let indiceLibros = 0; indiceLibros <= libros.length - 1; indiceLibros++) {
      let anioActual = libros[indiceLibros].anio; // Obtiene el año del libro actual
      let cantidadActual = contarAnios(anioActual); // Llama a la función contarAnios para contar cuántas veces aparece ese año en el array
  
      // Si la cantidad actual es mayor que la cantidad de apariciones del año más frecuente hasta ahora
      if (cantidadActual > cantidadDeApariciones) {
        anioMasFrecuente = anioActual; // Reemplaza el año más frecuente
        cantidadDeApariciones = cantidadActual; // Actualiza la cantidad de apariciones
      }
    }

    // imprime el año de publicación más frecuente
    console.log(`El año de publicación más frecuente fue:, ${anioMasFrecuente}`); 



    //________________________________________EXTREMOS________________________________________________________
    // Calcula el año del libro más antiguo y el más nuevo. 
    // Inicializa las variables con el año del primer libro 
    let anioMasViejo = libros[0].anio; 
    let anioMasNuevo = libros[0].anio; 
    // Recorre el array de libros
    for (let indiceLibros = 0; indiceLibros <= libros.length - 1; indiceLibros++) {
      anioMasViejo = Math.min(anioMasViejo, libros[indiceLibros].anio); // Actualiza anioMasViejo si se encuentra un año menor
      anioMasNuevo = Math.max(anioMasNuevo, libros[indiceLibros].anio); // Actualiza anioMasNuevo si se encuentra un año mayor
    }
    // imprime el año del libro más antiguo y el más nuevo
    console.log(`El año del libro más antiguo es:, ${anioMasViejo}, y el año del libro más nuevo es:, ${anioMasNuevo}`);

}


//____________________________________________________________________________
//                         8   MANEJO DE CADENAS
//_____________________________________________________________________________


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/*
a) se Crea una función normalizarDatos() que utiliza métodos de strings para:
✔ Convertir todos los títulos a mayúsculas.
✔ Eliminar espacios en blanco al inicio y fi nal de los nombres de autores.
✔ Formatear los emails de los usuarios a minúsculas.
*/

  

function normalizarDatos() {

        // Normaliza títulos de libros
   
    // Normalizar libros
    for (let indiceLibros = 0; indiceLibros < libros.length; indiceLibros++) { //definimos una variable llamada indicelibros, que recorre desde cero hasta el largo del array

        libros[indiceLibros].titulo = libros[indiceLibros].titulo.toUpperCase();         // Convierte el título del libro a mayúsculas
        libros[indiceLibros].autor = libros[indiceLibros].autor.trim();        // Elimina espacios en blanco al principio y al final del nombre del autor. Es para evitar errores al comparar strings
        libros[indiceLibros].genero = libros[indiceLibros].genero.trim();        // imprime el título en mayúsculas y el nombre del autor sin espacios adicionales


    }

    // Normalizar usuarios
    for (let indiceUsuarios = 0; indiceUsuarios < usuarios.length; indiceUsuarios++) {
          // Normalizar emails de usuarios
        usuarios[indiceUsuarios].email =  usuarios[indiceUsuarios].email.toLowerCase().trim();         // Convierte el email del usuario a minúsculas


    }
    


    console.log("Datos normalizados correctamente");
    console.log(libros);
    console.log(usuarios);
}





//____________________________________________________________________________
//                 9     INTERFAZ DE USUARIO POR CONSOLA
//_____________________________________________________________________________


function menuPrincipal(){
    let quieroSalir = false; // Inicializa una variable para controlar el bucle del menú

    while(!quieroSalir){ // Mientras el usuario no quiera salir
        // Mostrar opciones del menú
        console.log("\n ____________________________________________________________________\n                Bienvenida a la biblioteda ADA,\n ____________________________________________________________________ ");
        console.log('1) agregar libro'); // 2a
        console.log('2) buscar libro');   // 2b
        console.log('3) ordenar libros');   // 2c
        console.log('4) borrar libros');   // 2d
        console.log('5) registar usuario');   // 3a 
        console.log('6) mostrar todos los usuarios');   // 3b 
        console.log('7) buscar usuario');   //  3c
        console.log('8) borrar usuario');   // 3d
        console.log('9) prestar libro');   // 4a
        console.log('10) devolver libro');   // 4b
        console.log('11) reportes de libros');   // 5a
        console.log('12) librosconpalabras ');   // 6a ???
        console.log('13) calcular estadisticas');   //  7a
        console.log('14) normalizarDatos');   //  8a
        console.log('15) Salir');   // 
        
        // Obtiene la opción elegida por el usuario
        let opcionElegida = prompt('\n ____________________________________________________________________\n Ingrese una opcion: '); 

        // Ejecuta la acción correspondiente a la opción elegida
        switch(opcionElegida){ 
            case "1":
                agregarLibro(); // Llama a la función agregarLibro  
                break;
            case "2":  
                buscarLibro(); // Llama a la función buscarLibro
                break;
            case "3":
                ordenarLibros(); // Llama a la función ordenarLibro
                break;
            case "4":
                borrarLibro(); // Llama a la función borrarLibro  
                break;
            case "5":  
                registrarUsuario(); // Llama a la función registrarUsuario
                break;
            case "6":
                mostrarTodosLosUsuarios(); // Llama a la función mostrarTodosLosUsuarios
                break;
            case "7":
                buscarUsuario(); // Llama a la función buscarUsuario
                break;
            case "8":  
                borrarUsuario(); // Llama a la función borrarUsuario
                break;
            case "9":
                prestarLibro(); // Llama a la función prestarLibro
                break;
            case "10":
                devolverLibro(); // Llama a la función devolverLibro
                break;
            case "11":  
                generarReporteLibros(); // Llama a la función generarReporteLibros
                break;
            case "12":
                librosConPalabrasEnTitulo(); // Llama a la función librosConPalabrasEnTitulo ');   // 6a ???

                break;
            case "13":
                calcularEstadisticas(); // Llama a la función calcularEstadisticas (asumiendo que está definida)
                break;
            case "14":
                normalizarDatos(); // Llama a la función normalizarDatos (asumiendo que está definida)
                break;
            case "15":
                quieroSalir = true; // Salir del bucle del menú
                break;
            default:
                console.log('\n ____________________________________________________________________\nLa opcion ingresada es incorrecta, \n Ingrese una opcion:'); // imprime mensaje de error si la opción es inválida
        }

        // Pregunta al usuario si desea continuar (si no ha elegido salir)
        if (!quieroSalir){ 
            let continuar = prompt('Desea continuar? Si/No : '); // Obtiene la respuesta del usuario

            // Convierte la respuesta a minúsculas para comparar
            if(continuar.toLowerCase() === 'si'){ 
                quieroSalir = false; // Continua en el bucle del menú
            }
            else {
                quieroSalir = true; // Salir del bucle del menú
            }
        }
    }
    
}

menuPrincipal(); // Llamar a la función menuPrincipal para iniciar el programa
