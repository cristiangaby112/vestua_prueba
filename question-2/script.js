/**
 * On this module you should write your answer to question #2.
 * This file would be executed with the following command:
 * $ node scritp.js BrowsingEvents.csv
 */

import neatCsv from "neat-csv";
import fs from "fs";
import jsonexport from "jsonexport";

function readFile(filename) {
  let arr;
  fs.readFile(filename, async (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    let arr = await neatCsv(data);
    let obj = contar(arr);

    let lista = [];
    for (let clave in obj) {
      let json = obj[clave];
      json.ctr = parseFloat(json.clicks / json.impressions).toFixed(1);
      lista.push(json);
    }
    jsonexport(lista, (err, csv) => {
      if (err) return console.error(err);
      fs.writeFile("output.csv", csv, (err) => {
        if (err) return console.error(err);
        console.log("output.csv saved");
      });
    });
  });
}

function contar(arr) {
  let lista = arr;
  let nuevoObjeto = {};
  //Recorremos el arreglo
  lista.forEach((el) => {
    if (nuevoObjeto[el.entityId]) {
      let obj = nuevoObjeto[el.entityId];
      if (el.eventType === "click") {
        obj.clicks = obj.clicks + 1;
      } else {
        obj.impressions = obj.clicks + 1;
      }
    } else {
      nuevoObjeto[el.entityId] = {
        productId: el.entityId,
        clicks: el.eventType === "click" ? 1 : 0,
        impressions: el.eventType === "impression" ? 1 : 0,
      };
    }
  });

  return nuevoObjeto;
}

const args = process.argv.slice(-1);
console.log(`Running question #2 with args ${args}`);
readFile(args[0]);
