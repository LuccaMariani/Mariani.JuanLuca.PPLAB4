export class Repartidor {
    public dni: number;
    public nombre: string;
    public edad: number;   
    public capacidad: number;
    public paisOrigen: any;
    public unidadPropia: boolean;

// repartidor,(dni , nombre, edad,capacidad de transporte(unidades de pizzas), país de origen,unidad Propia (true o false)).

    constructor(dni: number, edad: number, nombre: string , capacidad: number, paisOrigen: any, unidadPropia: boolean) {
      
        this.dni=dni;
        this.nombre = nombre;
        this.edad = edad;
        this.capacidad = capacidad;
        this.paisOrigen = paisOrigen;
        this.unidadPropia = unidadPropia;
  }
}
