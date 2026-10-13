import { start } from "./utils.js";

import { valorEstacionamento } from "./classes.js";

 

start.addEventListener("click", (evento) => {

    const valor = parseFloat(document.getElementById("valor").value);

    console.log(`você digitou ${valor}`)

    const calculos = new valorEstacionamento;

    calculos.calcular()
})