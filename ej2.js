
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
    librosPrestados: null
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
    librosPrestados: null
},
{
    id: 5,
    nombre: "Pablo",
    email:"pablomartinez@gmail.com",
    librosPrestados: null
}
]


//____________________________________________________________________________
//                      FUNCIONES DE GESTION DE LIBROS
//_____________________________________________________________________________
//Implementamos una función agregarLibro(id, titulo, autor, anio, genero)

function agregarLibro (id,titulo,autor,anio,genero,disponible){
    const agregarLibro = {
    id,
    titulo,
    autor,
    anio,
    genero,
    disponible
  };

  libros.push(agregarLibro);
}
agregarLibro(11,"Harry potter","Jk Rowling",2000,"novela",true);
console.log(libros);

/*Crear una función buscarLibro(criterio, valor) que permita buscar libros por título,
autor o género utilizando el algoritmo de búsqueda lineal.*/
function buscarLibro(criterio, valor) {
    return libros.filter(libro => libro[criterio] === valor);
}
let resultado = buscarLibro("titulo", "Mujercitas");
console.log(resultado);

/* Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año 
utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los 
libros ordenados en la consola.*/



function ordenarLibros(criterio) {
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
ordenarLibros("anio");

// Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por 
// parámetro.  


/*function borrarLibro(id) {
    const indice = libros.findIndex(libro => libro.id === id);

    if (indice !== -1) {
        libros.splice(indice, 1);
        console.log(`El libro con id ${id} ha sido eliminado`);
    } else {
        console.log(`No existe un libro con id ${id}`);
    }
}
let identificacion = parseInt(prompt("Ingrese id del libro a eliminar: "));
borrarLibro(identificacion);
console.log(libros);
*/
