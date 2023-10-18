import mongoose from "mongoose";



const coursesCollection = "courses";

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    coursesStudents:{
        type:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"students", // nombre de la colleccion donde estan almacenados todos los estudiantes

            }
        ],
        default:[]
    }
});


export const coursesModel = mongoose.model(coursesCollection,courseSchema);
