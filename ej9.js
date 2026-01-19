
//____________________________________________________________________________
//                      ESTINTERFAZ DE USUARIO POR CONSOLA
//_____________________________________________________________________________

/*
9. Interfaz de Usuario por Consola
a) Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y
 permita interactuar con el sistema utilizando prompt().
b) El menú debe incluir opciones para todas las funcionalidades anteriores y
 utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.

*/
const prompt = require ("prompt-sync")();


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
