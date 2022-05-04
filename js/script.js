class Cell{
  constructor(status,x,y){
    this._status=status;
    this._x=x;
    this._y=y;
  }
}
class table{
  constructor(f,c){
    this._fila = f;
    this._columna = c;
  }
  crearTablero(w,h){
    var matriz = new Array();
    for (let x = 0; x < w; x++) {
        matriz[x] = new Array();
        for (let y = 0; y < h; y++) {
            const randomNumber = Math.random();
            if(randomNumber < 0.9){
                matriz[x][y] = "-";
            }else{
                if(x != 0 && x != w  && y != 0 && y != h){
                    matriz[x][y] = "*";
                }else{
                    matriz[x][y] = "-";
                }
                
            }
        }
    }
    return matriz;
}
}


function counter (tablero, x, y) {
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
/*
["-"],["-"],["-"],["-"]
["-"],["*"],["-"],["-"]
["-"],["*"],["-"],["-"]
["-"],["-"],["-"],["-"]
*/
