const person1 = {
    name:"pedro",
    age:12,
}
const person2 = {
    name:"lucas",
    age:20,
}


class Persons {
    // variable privada
    #couser = "Javascrip"
constructor(name,age,city){
    this.name = name;
    this.age = age;
    this.city = city;

};
saludar(){
    console.log(`Hpla soy ${this.name}`)
}

// para usar la variable privada
getPrivateVariable(){
    console.log(this.#course)
}
}


// Crear objetos a partir de class

const personOne = new Persons()