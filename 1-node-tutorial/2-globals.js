// GLOBAL VARIABLES - NO WINDOW OBJECT !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// modules    - info about current module (file)
// process    - info about env where the program is being executed

// MORE https://nodejs.org/api/globals.html

console.log(__dirname)
console.log(__filename)
console.log(module) // Podemos ver lo que estamos exportando con esto

// Solo imprime una vez
setTimeout(() => {
  console.log('Hello World!')
}, 500)

// Imprime cada segundo
setInterval(() => {
  console.log('Hello World!')
}, 1000)
