const fs = require("fs");

const operations = async()=> {
    try {
        //leer el archivo
        const content = await fs.promises.readFile("package.json","utf-8");
        
        // transformar string a json => JSON.parse(objetoJson)
       const contentJson = JSON.parse(content);
       
        console.log(contentJson);

// Agregamos un texto
        contentJson.author = "Pepito";

        // tranformamos de json a string y sobreescribimos el archivo
        await fs.promises.writeFile("package.json",JSON.stringify(contentJson,null,"\t"));
        console.log("Archivo actualizado");

    } catch (error) {
        console.log("ERROR:",error.message);
    }
}

operations();