const fs = require("fs");
const colors = require("colors");
const crearArchivo = async (base, listar, hasta) => {

    try {




        let salida, consola = "";

        for (let x = 1; x <= hasta; x++) {

            salida += `${base} x ${x} = ${base * x}\n`;
            consola += `${base} ${"x".red} ${x} ${"=".gray} ${base * x}\n`;

        }

        if (listar) {
            console.log("==========================".yellow);
            console.log(`Tabla del: `.green, colors.blue(base));
            console.log("==========================".yellow);
            console.log(consola);

        }
        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {

        //     if(err) throw err;
        //     console.log(`tabla-${base}.txt creado`);
        // })

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt creado`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo,
}