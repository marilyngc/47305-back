 const persons = [
    {id:1,name:"pepe"},
    {id:2,name:"juan"},
    {id:3,name:"lucas"},
    {id:3,name:"Mari"},

 ]

 // typeof

 console.log(typeof persons)
 console.log(Array.isArray(persons))


 // El metodo fund devuelve un objeto
 const person = persons.find((elem) => {
    if(elem.id === 2){
        return elem
    }
 })

 console.log(person)


 // El metodo filter filtra a todos los id que encuntre con ese numero
 const perso = persons.filter((elem) => {
    if(elem.id === 3){
        return elem
    }
 })

 console.log(perso)