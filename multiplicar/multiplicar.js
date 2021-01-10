// require
const fs = require('fs');

let crearAchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`El dato ${base} no es un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base} al ${limite}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla del número ${base} con limite de ${limite}.txt`);
            }
        });
    });
}

let listarTabla = (base, limite = 10) => {
console.log(`================`.green);
console.log(`Tabla del ${base}`.green);
console.log(`================`.green);

    if (!Number(base) || !Number(limite)) {
        console.log(`El dato ${base} no es un número`);
    } else {
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} X ${i} = ${base * i}`);
        }
    }
}

module.exports = {
    crearAchivo,
    listarTabla
}