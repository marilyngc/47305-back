class ProductManager {
  constructor() {
    // Array vacio para almacenar los productos
    this.products = [];
    // contador para generar id en cada producto
    this.productIdCount = 1;
  }

  addProducts(title, description, price, thumbnail, stock) {
    if (!title || !description || !price || !thumbnail || !stock ) {
      return console.error("todos los campos son obligatorios");
    } 
  

    // Verificamos si ya existe un producto con el mismo título
    const existingProduct = this.products.find(
      (product) => product.title === title
    );
    if (existingProduct) {
      return console.error("El producto ya existe");
    };


      // creamos los productos una vez verificado los campos
  const newProduct = {
    id: this.productIdCount++,
    title,
    description,
    price,
    thumbnail,
    stock,
  };

   // Agregamos el nuevo producto al array de productos
  this.products.push(newProduct);
  console.log("Producto agregado:", newProduct);


  // mostramos todos los productos
    const getProducts = this.products;
    console.log("todos los productos:",getProducts);
}


  // función para determinar si existe o no un producto dentro del array 
  getProductsById(id){
    const productId = this.products.find(product => product.id === id );
    if (productId) {
       console.log("Existe un producto con el mismo ID");
      
    }else{
      console.error("Not found")
    }
  }


}



//creamos instancia
const manager = new ProductManager();



manager.addProducts("comida", undefined);

manager.addProducts("peliculas", "harry potter", 20, "gdfg", 2);
manager.addProducts("peliculas", "harry potter", 20, "gdfg", 2);
manager.addProducts("Libros", "el principito", 2000, "gdfg", 1);


console.log("manager:", manager);


// Hardcodeamos el id para ver si existe
manager.getProductsById(3)

