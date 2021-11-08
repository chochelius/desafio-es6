export class Cliente {
    constructor(nombre, impuesto) {
        this.nombre = nombre;
        this.impuesto = impuesto;
    }
    get getNombre() {
            return this.nombre
    }
    set setNombre(nombre) {
        this.nombre = nombre
    }

    calcularImpuesto(MontoBrutoAnual, deducciones) {
        let totalBruto = MontoBrutoAnual + deducciones;
        let despuesDeImpuesto = (totalBruto * 0.21) + totalBruto;
        return despuesDeImpuesto;
    }

}


