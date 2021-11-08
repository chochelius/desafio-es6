export class Impuestos {
    constructor(montoBrutoAnual, deducciones) {
        this.montoBrutoAnual = montoBrutoAnual;
        this.deducciones = deducciones
    }
    get getMontoBrutoAnual() {
        return this.montoBrutoAnual
    }
    set setMontoBrutoAnual(montoBrutoAnual) {
        this.montoBrutoAnual = montoBrutoAnual
    }
    get deducciones() {
        return this.deducciones
    }
    set deducciones(deducciones) {
        this.deducciones = deducciones
    }

}