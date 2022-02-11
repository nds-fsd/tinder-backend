// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {

    // Editar este conector
  await mongoose.connect('mongodb://localhost:27017/tinder');
  console.log("servidor mongo montado")
}



