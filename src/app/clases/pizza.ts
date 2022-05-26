export class Pizza {

    public id: string;
    public nombre: string;
    public ingredientes: string;
    public precio: number;   
    public peso: number;

    constructor(id: string = ' ',nombre: string = 'Seleccione una pizza', ingredientes: string = ' ', precio: number = 0, peso: number = 0) {
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
        this.peso = peso;
  }
}
