const argv = require("./config/yargs");
const { crearArchivo } = require("./helpers/multiplicar");
const colors = require("colors");


// option("l")
// listar
// boolean
// default: false


console.clear();

// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=")
// console.log(process.argv);

console.log(argv);

// console.log("base: yargs", argv.base);

// const base = 3815;



crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, "creado"))
    .catch(err => console.log(err));