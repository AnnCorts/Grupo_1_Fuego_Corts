
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
//                             SISTEMA DE PRESTAMOS
//_____________________________________________________________________________

/* 4. Sistema de Préstamos
a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario.
b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario. 
*/
function prestarLibro(idLibro, idUsuario) {  // armamos la funcion de prestar libro y validamos id con usuario
    const libro = libros.find(l => l.id === idLibro);
    const usuario = usuarios.find(u => u.id === idUsuario);

 if (!libro || !usuario) { // si el usuario o el libro no existen, se corta  y se avisa con el mensaje
        console.log("Libro o usuario inexistente"); //  return evita que el codigo siga y rompa
        return;
    }

    if (!libro.disponible) { // si el libro no esta disponible.. 
        console.log("El libro no está disponible");
        return;
    }

    libro.disponible = false; // no esta disponible

    if (!Array.isArray(usuario.librosPrestados)) { // aca consultamos si array es realmente un array
        usuario.librosPrestados = [];
    }

    usuario.librosPrestados.push(idLibro); // aca se agrega el libro

}

function devolverLibro (idLibro, idUsuario){
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
}

// pruebas de prestar y devolver libro  con id 8
console.log("Antes:", usuarios[1], libros.find(l => l.id === 8));

prestarLibro(8, 2);   // usuario 2 pide el libro 8
console.log("Despues de prestar:", usuarios[1], libros.find(l => l.id === 8));

devolverLibro(8, 2);  // usuario 2 devuelve el libro 8
console.log("Despues de devolver:", usuarios[1], libros.find(l => l.id === 8));


