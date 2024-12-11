/**
 * Clase partido, por usar el export y el import.
 * @author Alberto Zamora Landete
 * @since 30/10/2024
 * @version 1
 */

export default class Partido {
    constructor() {
        this._torneo = "Ies Font de San Lluís";
        this._ronda = 1;
        this._j1 = "Daniel Rodriguez";
        this._j2 = "Javier Buenafuente";
        this._r1 = 4;
        this._r2 = 2;
        this._set = 3;
    }

    set torneo(torneo) {
        this._torneo = torneo;
    }
    get torneo() {
        return this._torneo;
    }

    set ronda(ronda) {
        this._ronda = ronda;
    }
    get ronda() {
        return this._ronda;
    }

    set jugador1(j1) {    
        this._j1 = j1;    
    }        
    get jugador1() {    
        return this._j1;    
    }
    
    set jugador2(j2) {    
        this._j2 = j2;    
    }    
    get jugador2() {    
        return this._j2;    
    }
    
    set ranking1(r1) {    
        this._r1 = r1;    
    }    
    get ranking1() {    
        return this._r1;    
    }
    
    set ranking2(r2) {    
        this._r2 = r2;    
    }    
    get ranking2() {    
        return this._r2;    
    }
    
    set set(s) {
        while(s != 3 && s != 5) {
            s = parseInt(prompt("Los sets son de 3 o de 5:"));
        }
        this._set = s;
    }    
    get set() {    
        return this._set;    
    }    
}