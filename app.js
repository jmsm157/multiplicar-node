const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearAchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearAchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`,colors.red.underline.bgWhite.bold.italic(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no existe');
}