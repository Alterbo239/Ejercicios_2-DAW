export default class Dado {
    constructor() {
        this.tirar();
    }
  
    get valor() {
        return this._valor;
    }
  
    tirar() {
        this._valor=Math.trunc(Math.random()*6)+1;
    }
}