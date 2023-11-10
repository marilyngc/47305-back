// capturamos elemento del formulario
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(  e.target.name);
    const info = {
        name:e.target.name.value,
        email: e.target.email.value
    };

    //enviamos la petición al servidor
    fetch("http://localhost:8080/login",{
        method:"post",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(info)
    }).then(res => { return res.json()})
    .then(data =>{ 
        console.log(data)
       // se aguarda automaticamente en el almacenamiento de las cookies
    });
   
});