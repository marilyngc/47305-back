const fs = require("fs");

class UsersManager {
  constructor(filePath) {
    this.filePath = filePath;
  }
  // compruebo si existe el archivo
  fileExist() {
    return fs.existsSync(this.filePath);
  }

  async getUser(userInfo) {
    try {
      if (this.fileExist()) {

        // Leer archivo una vez encontrado 
        const content = await fs.promises.readFile(this.fileExist,"utf-8");

        
        // transformar string a json => JSON.parse(objetoJson)
       const contentJson = JSON.parse(content);
  
       return contentJson;
       

       
    
      } else {
        throw new Error("No es posible guardar el usuario");
      }
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }

  
  async createUser(userInfo) {
    try {
      if (this.fileExist()) {

        // Leer archivo una vez encontrado 
        const content = await fs.promises.readFile(this.fileExist,"utf-8");

        
        // transformar string a json => JSON.parse(objetoJson)
       const contentJson = JSON.parse(content);
       contentJson.push(userInfo);
       console.log("Usuario encontrado");

       
        // tranformamos de json a string y sobreescribimos el archivo
        await fs.promises.writeFile(this.filePath,JSON.stringify(contentJson,null,"\t"));
        console.log("Archivo actualizado");
      } else {
        throw new Error("No es posible guardar el usuario");
      }
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
}

const operations = async () => {
  try {
    const manager = new UsersManager("./users.json");
   const users= await manager.getUser();
   console.log(users)

   // creamos usuarios
  await  manager.createUser({name:"pepe",age:20});
  await  manager.createUser({name:"maria",age:30});
  } catch (error) {
    console.log(error)
  }
};
operations();
