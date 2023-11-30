'use strict'
 
class Jugador {
    constructor(apodo, vidas, valorCarta) {
        this.apodo = apodo;
        this.vidas = vidas;
        this.valorCarta = valorCarta;

        this.restvidas = function (perder) {
            this.vidas = this.vidas - perder;
        };
        this.showApodo = function () {
            alert(`El jugador: ${this.apodo} tiene $ 
        {this.vidas} vidas restantes`);
        };
    }
}

// let jugadorOne = new Jugador("Player1", 3, 5)
let jugadorOne = new Jugador(prompt("ingrese su apodo"),
Number (prompt("ingresa cantidad de vidas")
),
Number (prompt("ingresa Valor de su Carta")
));


jugadorOne.showApodo();
jugadorOne.restvidas(Number(prompt("Cuantas vidas perdio")));

jugadorOne.showApodo();

