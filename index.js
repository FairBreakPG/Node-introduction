const { registrar, leer } = require('./operaciones');

const operacion = process.argv[2];

if (operacion === 'registrar') {
    const [nombre, edad, animal, color, enfermedad] = process.argv.slice(3);
    registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === 'leer') {
    leer();
} else {
    console.log('Operación no válida. Usa "registrar" o "leer".');
}