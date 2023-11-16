console.log(process);
console.log(process.cwd());// directorio actual del proceso
console.log(process.pid);// id del proceso del sistema
console.log(process.memoryUsage());// monitorior el proceso de la aplicación
console.log(process.env);//  accede al objeto del entorno actual
console.log(process.argv); //muestra los argumentos pasados por CLI
console.log(process.version); // muestra la version del proceso(node en este caso)
console.log(process.on()); // permite setear un listener de eventos
console.log(process.exit());// permite salir del proceso


// Link de la documentacion de nodeJS
//https://nodejs.org/dist/latest-v21.x/docs/api/process.html