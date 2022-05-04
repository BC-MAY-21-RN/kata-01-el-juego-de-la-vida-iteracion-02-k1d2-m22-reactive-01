class Cell {
  constructor(status, x, y) {
    this._status = status;
    this._x = x;
    this._y = y;
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
console.log(tabla.matriz);