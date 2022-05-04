class Cell {
  constructor(status, vecinos) {
    this._status = status; //muerto ., viva *
    this._vecinos = vecinos;
  }
  getState() {
    return this._status;
  }
  setState(newState) {
    this._status = newState;
  }

  escuchar_estado() {
    if (this._vecinos < 2 && this._status == "*") {
      this._status = ".";
    } else if (this._vecinos > 3 && this._status == "*") {
      this._status = ".";
    } else if ((this._vecinos == 3 || this._vecinos == 2) && this._status == "*") {
      this._status = "*";
    } else if (this._vecinos == 3 && this._status == ".") {
      this._status = "*";
    }else {
        console.log("El parametro obtenido no pertenece a ningun caso ");
    }

    console.log("prueba");
    return this._status;
  }
}

class Table {
  constructor(x, y, cadena) {
    this.matriz = this.rellenarMatriz(x,y,cadena);
  }

  generarMatriz(x,y){
    return Array(x).fill(".").map(item => (new Array(y).fill("."))); 
  }

  rellenarMatriz(x,y,cadena){
    let matriz = this.generarMatriz(x,y);
    matriz.forEach(async (fila, indexi) => {
      fila.forEach(async (casilla, indexj) => {
        matriz[indexi][indexj] = cadena.charAt(this.randomCaracter(0, cadena.length - 1));
      })
    })
    return matriz;
  }

  randomCaracter(min, max) {
    return Math.random() * (max - min) + min;
  }
}

var tabla = new Table(10, 10, ".......*....***.");
var celula = new Cell("*",3);

console.log(tabla.matriz);
console.log(celula.escuchar_estado());
