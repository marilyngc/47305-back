

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
         console.log("encontró el estudiante:",studentFound); // si se encuentra find devuleve el elemento encontrado, sno devuelve undefied
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


// son como una evolucion de la promesa

// async-await

// creamos contexto
const operationsAsync = async () => {
  try {
    const student = await  getStudent(1); // esperamos a que se cumpla
    console.log(student);
    const result = await passedCourse(student);
    console.log(result);
     // todo esto  es como ir paso a paso
  } catch (error) {
     console.log(error);
  }


};

operationsAsync();