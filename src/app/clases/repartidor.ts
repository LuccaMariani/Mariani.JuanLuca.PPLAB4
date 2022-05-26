export class Repartidor {
    public dni: number;
    public nombre: string;
    public edad: number;   
    public capacidad: number;
    public paisOrigen: any;
    public unidadPropia: boolean;

// repartidor,(dni , nombre, edad,capacidad de transporte(unidades de pizzas), país de origen,unidad Propia (true o false)).

    constructor(dni: number = 0, edad: number = 0, nombre: string = ' ' , capacidad: number = 0, paisOrigen: any= 'Mexico', unidadPropia: boolean = false) {
      
        this.dni=dni;
        this.nombre = nombre;
        this.edad = edad;
        this.capacidad = capacidad;
        this.paisOrigen = paisOrigen;
        this.unidadPropia = unidadPropia;
  }
}
