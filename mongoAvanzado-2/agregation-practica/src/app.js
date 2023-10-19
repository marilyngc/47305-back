import express from "express";
import mongoose from "mongoose";
import { orderModel } from "./model/orders.model.js";
import { connectDB } from "./config/dbConnection.js";

const port = 8080;
const app = express();

app.listen(port,() => console.log("server working"));


// conectar base de datos
connectDB(); 

let orders = [

    {name:'Peperoni',size:'small',price:19,quantity:10,date:'2021-03-13T08:14:30Z'},

    {name:'Peperoni',size:'medium',price:20,quantity:20,date:'2021-03-13T09:13:24Z'},

    {name:'Peperoni',size:'medium',price:20,quantity:20,date:'2021-05-13T09:13:24Z'},

    {name:'Peperoni',size:'large',price:21,quantity:30,date:'2021-03-17T09:22:12Z'},

    {name:'Cheese',size:'small',price:12,quantity:15,date:'2021-03-13T11:21:39.736Z'},

    {name:'Cheese',size:'medium',price:13,quantity:50,date:'2022-01-12T21:23:13.331Z'},

    {name:'Cheese',size:'large',price:14,quantity:10,date:'2022-01-12T05:08:13Z'},

    {name:'Vegan',size:'small',price:17,quantity:10,date:'2021-01-13T05:08:13Z'},

    {name:'Vegan',size:'medium',price:18,quantity:10,date:'2021-01-13T05:10:13Z'},

    {name:'Vegan',size:'medium',price:18,quantity:10,date:'2022-01-13T05:10:13Z'},

];

const operationsDB = async() => {
    try {
        // agregamos los datos a la base de datos
    //   const result =  await orderModel.create(orders);
    //   console.log(result);


    const result = await orderModel.aggregate([
        // 1 etapa (stage)filtrar las pizzas de tamaño mediano
        {
            $match:{size:"medium"}
        },
        // 2 etapa: agrupar las pizzas medianas por sabor
        {
            $group:{
                _id:"$name", // $ es para tomar el valor de la key
                totalQuantity:{$sum:"$quantity"},
            }
        },
        // 3 etapa: ordenar de mayor a menor
        {
            $sort:{totalQuantity: -1}
        },
        // 4 etapa: consolidar los resultados de las etapas anteriores en un solo documento
        {
            $group:{
                _id:1,
                orders:{$push:"$$ROOT"} // indica que todos los documentos anteriores se agrega en orders
            }
        },
        // 5 etapa: generamos un id a este documento con mongoDB
        {
            $project:{
                _id:0,
                orders:"$orders"
            }
        },
        // 6 etapa: subir el documento en una coleccion
        {
            $merge:{
                into:"reports"
            }
        }
    ]);
    console.log(result);
    } catch (error) {
        console.log(error.message);
    }
};
operationsDB();