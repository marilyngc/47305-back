class ProductManager {
  constructor() {
    this.products = [];
  }

  addPtoducts(title, description) {
    if (!title || !description) {
      return console.log("todos los campos son obligatorios");
    }
    if (codeExist) {
      return console.log("El producto ya existe");
    }
    // creamos los productos una vez verificado los campos
    const newProduct = {
      title,
      description,
    };
    // agregamos los campos a products
    this.products.push(newProduct);
    console.log(newProduct);
  }
}

//creamos instancia
const manager = new ProductManager();
console.log(manager);

manager.addPtoducts(undefined, "juguetes de perros");

manager.addPtoducts("comida", undefined);

manager.addPtoducts("peliculas", "harry potter");
