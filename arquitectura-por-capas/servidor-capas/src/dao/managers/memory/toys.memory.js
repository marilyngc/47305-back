// esto representa la capa de persistencia  | solo interactua con la base de datos

const toys = [];


 export class ToysMemory{
    //retorna los juguetes
    get(){
        return toys;
    };

    // metodo para guardar juguetes
    save(toy){
        toys.push(toy);
        return "Juguete creado";
    };
}