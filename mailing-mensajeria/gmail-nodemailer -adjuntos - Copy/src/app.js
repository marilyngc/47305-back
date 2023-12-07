import express from "express";
import { config } from "./config/config.js";
import {transporter} from "./config/gmail.js";
import path from "path"
import {__dirname} from "./utils.js"

const port = config.server.port;
const app = express();

app.listen(port, () => console.log(`server working on ${port}`));


const emailTemplate = (user ) => `<div>

        <h1>Bienvenido${user} !! </h1>

        

        <p>Ya puedes empezar a usar nuestros servicios</p>

        <a href="https://www.google.com/">Explorar</a>

        <img src="cid:canelita" />
    
</div>`

 
app.post("/send-email",async (req,res) => {
    try {
        const result = await transporter.sendMail({
            // desde dond estamos enviqando nuestro correo
            from:config.email.account,
            // aquien le mandamos el correo(este caso nos lo mandamos a nosotros mismo)

            to:"marilyncelisgutierrez@gmail.com",
            subject:"tu registro ha sido exitoso",
            html:emailTemplate(to),
            // para enviar abjuntos
            attachments:[
                {
                    filename:"canelita.jpg",
                    //donde está ubicado el archivo
                    path:path.join(__dirname,"/assets/images/canelita.jpg"),
                    //si queremos agregarlo al html
                    cid:"canelita"
                },
                //archivo abjunto
                {filename:"terminosYcondiciones.doc",
                 //donde está ubicado el archivo
                 path:path.join(__dirname,"/assets/documents/terminosYcondiciones.doc"),
                 cid:"terminos"
            }

            ]
        })
        console.log(result);
        res.json({status:"succes",message:"correo enviado"});
    } catch (error) {
        console.log(error);
        res.json({status:"error", message:"Hubo un error al enviar el correo"})
    }
})