/* 
5. Reportes
a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .fi lter(), .reduce()) para generar un reporte con la siguiente información:
✔ Cantidad total de libros.
✔ Cantidad de libros prestados.
✔ Cantidad de libros por género.
✔ Libro más antiguo y más nuevo
*/


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
//                             REPORTES
//_____________________________________________________________________________


/* 
5. Reportes
a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .fi lter(), .reduce()) para generar un reporte con la siguiente información:
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

  return {
        totalLibros,
        cantidadPrestados,
        cantidadporGenero
    };

}console.log(generarReporteLibros());
 /* devuelve: 
totalLibros: 10,
  cantidadPrestados: 4,
  cantidadporGenero: {
    Poesia: 1,
    Psicologia: 2,
    Suspenso: 3,
    'Novela Gotica': 1,
    Novela: 3*/


