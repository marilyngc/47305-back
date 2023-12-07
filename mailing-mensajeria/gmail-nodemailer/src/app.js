import express from "express";
import { config } from "./config/config.js";
import {transporter} from "./config/gmail.js";


const port = config.server.port;
const app = express();

app.listen(port, () => console.log(`server working on ${port}`));


const emailTemplate = `<div>

        <h1>Bienvenido!!</h1>

        <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub.jpg" style="width:250px"/>

        <p>Ya puedes empezar a usar nuestros servicios</p>

        <a href="https://www.google.com/">Explorar</a>

</div>`

 
app.post("/send-email",async (req,res) => {
    try {
        const result = await transporter.sendMail({
            // desde dond estamos enviqando nuestro correo
            from:config.email.account,
            // aquien le mandamos el correo(este caso nos lo mandamos a nosotros mismo)

            to:"marilyncelisgutierrez@gmail.com",
            subject:"tu registro ha sido exitoso",
            html:emailTemplate
        })
        console.log(result);
        res.json({status:"succes",message:"correo enviado"});
    } catch (error) {
        console.log(error);
        res.json({status:"error", message:"Hubo un error al enviar el correo"})
    }
})