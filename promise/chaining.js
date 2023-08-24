const students = [
    {
        id:1,
        name:"Juan",
        clasification:3.5,
    },

    {
        id:2,
        name:"Ana",
        clasification:2.0,
    },
];

// verificamos si existe un usuario

const getStudent = (id) => {
    return new Promise ((resolve,reject) =>{
        const studentFound = students.find(student => student.id === id);
         console.log(studentFound); // si se encuentra find devuleve el elemento encontrado, sno devuelve undefied
         if(studentFound){
            resolve(studentFound);
         }else{
            reject("El estudiante no fue encontrado");
         }
    })

};


const passedCourse = (student) => {
    return new Promise((resolve,reject ) => {
         if(student.clasification >= 3){
            resolve(`El estudiante ${student.name} aprobó el curso`);
         }else{
            reject(`El estudiante ${student.name} no aprobó el curso`);
         }
    })
};

// Luego de crear las funciones, las ejecutamos para obtener el resultado de las promesas.
// Ejecutamos las funciones

getStudent(1)
.then((result)=> {
    console.log(result);

    // retornamos la segunda promesa
    return passedCourse(result);
})

// obtenemos el resultado de la segunda promesa
.then((result2) => {
    console.log(result2);
})
.catch((error)=>{
    console.log("ERROR:",error);
})
.finally(()=>{
console.log("Las proemsas ya terminaron de ejecutarse")
})