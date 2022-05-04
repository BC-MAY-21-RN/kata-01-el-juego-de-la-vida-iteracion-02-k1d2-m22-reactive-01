class Cell {
  constructor(status = ".") {
    this._status = status; //muerto ., viva *
  }
  getState() {
    return this._status;
  }
  setState(newState) {
    this._status = newState;
  }
}
class Table {
  constructor(x, y, cadena) {
    this.matriz = this.rellenarMatriz(x, y, cadena);
  }

  generarMatriz(x, y) {
    return Array(x).fill(new Cell()).map(item => (new Array(y).fill(new Cell())));
  }

  rellenarMatriz(x, y, cadena) {
    let matriz = this.generarMatriz(x, y);
    matriz.forEach(async (fila, indexi) => {
      fila.forEach(async (casilla, indexj) => {
        matriz[indexi][indexj] = new Cell(cadena.charAt(this.randomCaracter(0, cadena.length - 1)))
      })
    })
    return matriz;
  }

  randomCaracter(min, max) {
    return Math.random() * (max - min) + min;
  }

  cicloVida() {
    return "";
  }

  /*
  ["-"],["-"],["-"],["-"]
  ["-"],["*"],["-"],["-"]
  ["-"],["*"],["-"],["-"]
  ["-"],["-"],["-"],["-"]
  */

  vecinosVivos(x,y) {
    var vecinosVivos = 0;
    const objeto = {
      esquinaSuperiorIzquierda: (fila, columna) => {
        if (fila != 0) {
          if (this.matriz[fila - 1][columna - 1].getState() == "*") {
            vecinosVivos++;
          }
        }
      },
      superior: (fila, columna) => {
        if (fila != 0) {
          if (this.matriz[fila - 1][columna].getState() == "*") {
            vecinosVivos++;
          }
        }
      },
      esquinaSuperiorDerecha: (fila, columna) => {
        if (fila != 0) {
          if (this.matriz[fila - 1][columna + 1].getState() == "*") {
            vecinosVivos++;
          }
        }
      },
      esquinaInferiorIzquierda: (fila, columna) => {
        if (fila != this.matriz.length - 1) {
          if (this.matriz[fila + 1][columna - 1].getState() == "*") {
            vecinosVivos++;
          }
        }
      },
      inferior: (fila, columna) => {
        if (fila != this.matriz.length - 1) {
          if (this.matriz[fila + 1][columna].getState() == "*") {
            vecinosVivos++;
          }
        }
      },
      esquinaInferiorDerecha: (fila, columna) => {
        if (fila != this.matriz.length - 1) {
          if (this.matriz[fila + 1][columna + 1].getState() == "*") {
            vecinosVivos++;
          }
        }
      },
      derecha: (fila, columna) => {
        if (this.matriz[fila][columna + 1].getState() == "*") {
          vecinosVivos++;
        }
      },
      izquierda: (fila, columna) => {
        if (this.matriz[fila][columna - 1].getState() == "*") {
          vecinosVivos++;
        }
      },
    }
    Object.keys(objeto).forEach(key => objeto[key](x, y) )
    return vecinosVivos;
  }

  imprimirMatriz(){

  }

}

var tabla = new Table(10, 10, ".......*....**....**.");
console.log(tabla.vecinosVivos(3,3));

/*function counter (tablero, x, y) {
  // Movimiento hacia los vecinos
  let moveX = new Array(0, 0, 1, -1, -1, -1, 1, 1);
  let moveY = new Array(1, -1, 0, 0, 1, -1, -1, 1);
  let cnt = 0;
  for (let cell = 0; cell < 8; cell++) {
    let mox = x + moveX[cell];
    let moy = y + moveY[cell];
    if (tablero[mox][moy] == '*') {
      cnt += 1;
    }
  }
  return cnt;
}

isAliveOrDead() {
  for (let i= 1; i < this.matriz.length() - 1; i++){
    for(let j = 1; j <= this.matriz.length() -1; j++){
        vivas = counter(array,i,j);
        if (array[i][j] == '*' && vivas < 2) {
            this.matriz[i][j] = '.';
        } else if (array[i][j] == '*' && vivas > 3) {
            this.matriz[i][j] = '.';
        } else if (array[i][j] == '.' && vivas == 3) {
            this.matriz[i][j] = '*';
        }
    }
}
return this.matriz;
}*/