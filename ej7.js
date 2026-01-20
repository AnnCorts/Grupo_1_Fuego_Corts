

//a) Se crea un array de objetos llamado libros que contiene 10 libros. 

let libros = [{   
    id: 1,
    titulo: "La divina comedia",
    autor: "Dante Alighieri",
    anio: 1963,
    genero: "Poesia",
    disponible: true
},
 
{   id: 2,
    titulo: "La soledad",
    autor: "Gabriel Rolon",
    anio: 2026,
    genero: "Psicologia",
    disponible: false
},
{

    id: 3,
    titulo: "Bajo el agua",
    autor: "Paula Hawkins",
    anio: 2017,
    genero: "Suspenso",
    disponible: false

},


 {id: 4,
    titulo: "El retrato de Dorian Grey",
    autor: "Oscar Wilde",
    anio: 2005,
    genero: "Novela Gotica",
    disponible: true
 },

{
    id: 5,
    titulo: "Rebelion en la granja",
    autor: "George Orwell",
    anio: 2006,
    genero: "Novela",
    disponible: true
},
{ 
    id: 6,
    titulo: "El psicoanalista",
    autor: "John katzenbach",
    anio: 2002,
    genero: "Suspenso",
    disponible: false

},
{
    id: 7,
    titulo: "Practicas de mindfulness",
    autor: "Marina Lisenberg",
    anio: 2021,
    genero: "Psicologia",
    disponible: true
},
{
    id:8,
    titulo: "La chica del tren",
    autor: "Paula Hawkins",
    anio: 2015,
    genero: "Suspenso",
    disponible: true

},
{
    id: 9,
    titulo: "Papillon",
    autor: "Henri Charriere",
    anio: 1969,
    genero: "Novela",
    disponible: true
},
{
    id:10,
    titulo: "Mujercitas",
    autor: "Louisa May Alcott",
    anio: 1868,
    genero: "Novela",
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
//____________________________________________________________________________
//                             CALCULOS ESTADISTICOS
//_____________________________________________________________________________

/*  
7. Cálculos Estadísticos
a) Desarrollar una función calcularEstadisticas() 
que utilice el objeto Math para calcular y mostrar:

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



  calcularEstadisticas(); // Llama a la función para calcular las estadísticas

