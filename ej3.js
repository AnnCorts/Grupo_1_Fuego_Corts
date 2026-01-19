
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
//                  GESTION DE USUARIOS
//_____________________________________________________________________________
//*Implementamos una función agregarusuario(nombre,email)*/

function registrarUsuario (nombre,email){
    const registrarUsuario = {
    nombre,
    email,
  };

  usuarios.push(registrarUsuario);
}
registrarUsuario("Rocio","rocio@gmail.com");
console.log(usuarios);

// b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array 
//completo de usuarios 

function mostrarTodosLosUsuarios(){
    console.log(usuarios)
}
// c) Crear una función buscarUsuario(email) que devuelva la información de un usuario 
// dado su email. FALTA PEDIR AL USUARIO EL EMAIL PARA BUSCARLO

function buscarUsuario(email){
 console.log(usuarios.email);
}

// d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario 
// seleccionado.

/*function borrarUsuario(email) {
    const indice = usuarios.findIndex(usuario => usuario.email === email);

    if (indice !== -1) {
        usuarios.splice(indice, 1);
        console.log(`El usuario con email ${email} ha sido eliminado`);
    } else {
        console.log(`No existe el usuario con email ${email}`);
    }
}
let correo= (prompt("Ingrese email del usuario a eliminar: "));
borrarUsuario(correo);
console.log(usuarios); 
*/