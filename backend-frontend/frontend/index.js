const { response } = require("express")

const makeRequest = ()=> {
    fetch("http://localhost:8080/students", {
        method:"GET"
        // ala respuesta lo convertimos en json
    }).then(response => response.json())
    // obtenemos la respuesta en json
    .then(result => console.log(result))
    .catvh(error => console.log(error))
};