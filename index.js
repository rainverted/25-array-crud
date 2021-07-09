//isspauzdinti terminale -  "node ."

const Sarasas = require('./Sarasas');

const automobiliai = new Sarasas();

automobiliai.prideti('audi');
automobiliai.prideti('volvo');
automobiliai.prideti('tesla');
automobiliai.prideti('gaz');


// automobiliai.redaguoti(10, 'mazda');     //(pozicija, elementas i kuri pakeisime)
// automobiliai.redaguoti(-1, 'mazda');     //(pozicija, elementas i kuri pakeisime)
// automobiliai.redaguoti(2.5, 'mazda');     //(pozicija, elementas i kuri pakeisime)

automobiliai.redaguoti(3, 'opel');     //(pozicija, elementas i kuri pakeisime)

automobiliai.pasalinti(1);
automobiliai.pasalinti(2);


// console.log(automobiliai);          //Sarasas{}
automobiliai.spausdinti();




















// automobiliai.add('audi');
// automobiliai.add('volvo')
// automobiliai.spausdint();
// //terminale reikia isspausinfinti visus auto tokiu principi:
// //Sarasas:
// //===============
// // 1. audi
// // 2. volvo
// // ===============

// automobiliai.redaguoti(0, 'mazda');
// automobiliai.spausdint();
// //1. mazda
// //2.volvo

// automobiliai.remove(0);
// automobiliai.spausdint();
// //1. volvo