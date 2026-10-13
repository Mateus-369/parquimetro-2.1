import { msg } from "./utils.js"

export class valorEstacionamento {
    constructor(valor1){
        this.valor1 = 1
        
    }


    calcular(){

        const valor = parseFloat(document.getElementById("valor").value);

        const estacionamento = [
            {tempo: 120,
            custo: 3},
    

            {tempo: 60,
            custo: 1.75},

            {tempo: 30,
            custo: 1}
    
        ]   

        if(Number.isNaN(valor)){
            msg.textContent = "campo vazio digite um numero"
            return
        }

        if(valor < this.valor1){
            msg.textContent = "Valor insuficiente"
            console.log("valor insuficiente")
            return
        }

        const resultado = estacionamento.find(opçao => {
        return opçao.custo  <= valor })

        if(!resultado){
            msg.textContent = "valor inexistente"
            return
        }

        const troco = valor - resultado.custo

        msg.textContent = `Seu tempo é ${resultado.tempo} minutos e seu troco é  R$${troco.toFixed(2)}`

        }
    }