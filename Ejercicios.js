//! Ejercicios prácticos
//* 1. Crear una función que tome un array de números y devuelva un array con solo los números pares.
function obtenerNumerosPares(numeros) {
    // Creamos un array vacío para almacenar los números pares
    const numerosPares = [];
  
    // Iteramos sobre cada número en el array de entrada
    for (let i = 0; i < numeros.length; i++) {
      // Comprobamos si el número actual es par (si el resto de su división por 2 es 0)
      if (numeros[i] % 2 === 0) {
        // Si es par, lo agregamos al array de números pares
        numerosPares.push(numeros[i]);
      }
    }
  
    // Devolvemos el array de números pares
    return numerosPares;
  }

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = obtenerNumerosPares(numeros);
console.log(numerosPares); 

//* 2. Crear una función que tome un objeto y devuelva un array de sus valores.
function obtenerValores(objeto) {
    // Obtenemos las claves del objeto usando Object.keys()
    const claves = Object.keys(objeto);
  
    // Creamos un array vacío para almacenar los valores
    const valores = [];
  
    // Iteramos sobre cada clave y agregamos su valor al array de valores
    for (let i = 0; i < claves.length; i++) {
      valores.push(objeto[claves[i]]);
    }
  
    // Devolvemos el array de valores
    return valores;
  }

  const miObjeto = { a: 5, b: 6, c: 10, d: 69 };
const valores = obtenerValores(miObjeto);
console.log(valores);

//* 3. Crear una función que tome un array de strings y devuelva un objeto que tenga como claves cada una de las palabras y como valor la cantidad de veces que aparece esa palabra en el array.

function contarPalabras(arrayDeStrings) {
    // Creamos un objeto vacío para almacenar las palabras y su frecuencia
    const objetoPalabras = {};
  
    // Iteramos sobre cada string en el array de entrada
    for (let i = 0; i < arrayDeStrings.length; i++) {
      // Dividimos el string en palabras utilizando split() y lo recorremos con un bucle forEach
      arrayDeStrings[i].split(" ").forEach((palabra) => {
        // Comprobamos si la palabra ya está en el objeto de palabras
        if (objetoPalabras[palabra]) {
          // Si ya está, incrementamos su frecuencia en 1
          objetoPalabras[palabra]++;
        } else {
          // Si no está, agregamos la palabra al objeto con una frecuencia de 1
          objetoPalabras[palabra] = 1;
        }
      });
    }
  
    // Devolvemos el objeto de palabras y su frecuencia
    return objetoPalabras;
  }

  const miArray = ["hola al mundo", "como estan todos", "en mi mundo"];
const objetoPalabras = contarPalabras(miArray);
console.log(objetoPalabras);

//* 4. Crear una función que tome un array de objetos y devuelva un array con solo los objetos que tengan una propiedad específica.
function filtrarObjetosPorPropiedad(objetos, propiedad) {
    return objetos.filter(objeto => objeto.hasOwnProperty(propiedad));
  }

  const personas = [
    { nombre: 'Diego', edad: 19 },
    { nombre: 'Tomas', ciudad: 'Neiva' },
    { nombre: 'Odalys', profesion: 'Tendera' },
    { nombre: 'Gael Hurtado', edad: 19, ciudad: 'Ciudad de Mexico' },
  ];
  
  const personasConEdad = filtrarObjetosPorPropiedad(personas, 'edad');
  console.log(personasConEdad);
  
  const personasEnMadrid = filtrarObjetosPorPropiedad(personas, 'ciudad');
  console.log(personasEnMadrid);

//* 5. Crear una función que tome un array de strings y devuelva un array con las mismas palabras, pero en orden alfabético.
function ordenarPalabras(arrayDePalabras) {
    return arrayDePalabras.sort();
  }

  const palabras = ['manzana', 'banana', 'naranja', 'uva', 'pera'];

const palabrasOrdenadas = ordenarPalabras(palabras);
console.log(palabrasOrdenadas);

//* 6. Crear una función que tome dos objetos y devuelva un objeto con las propiedades de ambos objetos.


//* 7. Crear una función que tome un array de números y devuelva la suma de todos los números.


//* 8. Crear una función que tome un array de números y devuelva un array con los mismos números, pero multiplicados por un valor dado.


//* 9. Crear una función que tome una cadena de texto y devuelva la misma cadena en orden inverso.


//* 10. Crear una función que tome un objeto y devuelva un array de sus claves.

