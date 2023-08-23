class ProductManager {
  constructor() {
    // Array vacio para almacenar los productos
    this.products = [];
    // contador para generar id en cada producto
    this.productIdCount = 1; 
  }

  addPtoducts(title, description,price,thumbnail,stock) {
    if (!title || !description || !price || !thumbnail || !stock) {
      return console.error("todos los campos son obligatorios");
    }
  }
    checkDuplicateProduct(id){
      //
      const existingProduct = this.products.find(product => product.id === id);
      if (existingProduct) {
        console.error("El producto ya existe");
        
      }
    

    // creamos los productos una vez verificado los campos

   const newProduct = {
    id: this.productIdCount++,
    title,
    description,
    price,
    thumbnail,
    stock,
  };

 
    // agregamos los campos a products
    this.products.push(newProduct);
    console.log("Producto agregado:",newProduct);

}
}

//creamos instancia
const manager = new ProductManager();
console.log(manager);

// manager.addPtoducts(undefined, "juguetes de perros");

// manager.addPtoducts("comida", undefined);

manager.addPtoducts("peliculas", "harry potter",20,"gdfg",2);
