// numero de pruebas realizadas y pasadas
let testPasados = 0;
let totalTest = 4;

// A) crear la funcion suma
const sumar = (...nums) => {
  //escenario 2
  if (nums.length === 0) return 0;

  // escenario 1
  if (nums.some((i) => typeof i !== "number")) return null;

  const result = nums.reduce((acc, i) => (acc += i), 0);

  return result;
};

// sumar(1,2,3,4,5); ...rest

// B) crear escenarios (pruebas)
//escenario 1.
console.log(
  `1. la funcion debe devolver null si algun parametro no es numerico`
);
let resultado = sumar(1, "2");
if (resultado === null) {
  console.log(`---> test1 pasó`);
  testPasados++;
} else {
  console.log(
    `---> test1 NO pasó la prueba, se esperaba recibir dos parametros númericos`
  );
}

// Escenario 2
console.log(`2. L funcion debe devolver 0 si no se pasó ningun parametro`);
let resultado2 = sumar();
if (resultado2 === 0) {
  console.log(`---> test2 pasó`);
  testPasados++;
} else {
  console.log(
    `---> test2 NO pasó la prueba, se esperaba un resultado igual a 0`
  );
}

// Escenario 3
console.log(`3. La funcion debe poder realizar la suma correcta`);
let resultado3 = sumar(3, 5);
if (resultado2 === 8) {
  console.log(`---> test3 pasó`);
  testPasados++;
} else {
  console.log(
    `---> test3 NO pasó la prueba, se esperaba un resultado igual a 8`
  );
}

// Escenario 4
console.log(`4. la funcion debe poder hacer la suma con cualquier cantidad`);
let resultado4 = sumar(3, 5, 2, 10);
if (resultado4 === 20) {
  console.log(`---> test4 pasó`);
  testPasados++;
} else {
  console.log(
    `---> test4 NO pasó la prueba, se esperaba un resultado igual a 20`
  );
}

//resultados pruebas

if (testPasados === totalTest) console.log("todos los test pasaron con exito");
else console.log(`pasaron ${testPasados} de un total de ${totalTest} test`);
