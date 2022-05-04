class Cell{
  constructor(status,x,y){
    this._status=status;
    this._x=x;
    this._y=y;
  }
}
class Table{
  constructor(x, y){
    this.matriz = new Array(x).fill(".").map(item => (new Array(y).fill(".")));
  }
}

var tabla = new Table(10,10);
console.log(tabla.matriz);