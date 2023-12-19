import {faker} from "@faker-js/faker";


const {database,commerce,random,image,name,internet,datatype} =faker;
// funcion que genera el producto
export const generateProduct = () => {
    //propiedades del objeto
    return{
        id:database.mongodbObjectId(),
        title:commerce.product(),
        price: parseFloat(commerce.price()),
        stock: parseInt(random.numeric()),
        image:image.imageUrl(),
        code: random.alphaNumeric(5),
        description: commerce.productDescription()
}
};
// console.log(generateProduct());

// funcion que genera los usuarios
export const generateUser = () => {
    const numberOfProducts = parseInt(random.numeric(1));
    let products = [];
    for(let i = 0 ; i < numberOfProducts; i++){
        const newProduct = generateProduct();
        products.push(newProduct);
    };
    console.log(products);

    // creamos el usuario
    return{
        id:database.mongodbObjectId(),
        firs_name:name.firstName(),
        last_name:name.lastName(),
        email: internet.email(),
        rol:datatype.boolean() ? "customer" : "salesPerson",
        isPremium:datatype.boolean(),
        jobTitle:name.jobTitle(),
        cart:products

    };
};

console.log(generateUser())