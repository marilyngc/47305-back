// representa la capa de servicio

//importamos la capa de persistencia
import { toysDao } from "../dao/index.js";

// accede a los metodos de los managers
export class ToysService{
    // usamos static para poder llamarlos directamente para no crear una instancia
    static  getToys(){
        // llamamos la capa de persistencia
       return toysDao.get(); // entrega una respuesta
    };
        // usamos static para poder llamarlos directamente para no crear una instancia

        static saveToys(toy){
        // llamamos la capa de persistencia
          return toysDao.save(toy);// entrega una respuesta
    };
}