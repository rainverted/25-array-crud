/*
Array CRUD:
- (c) sukurti nauja irasa ir itraukti ji i array
- (r) isspausdinti visus array irasus
- (u) atnaujinti iraso reiksme
- (d) istrinti irasa is saraso
*/


class Sarasas {
    constructor() {
        this.list = [];                 //priskirimae tuscia array
    }

    prideti(item) {                     //sukuriamas metodas 'prideti'
        this.list.push(item);           //su push itraukiame sukurta item i sukurto saraso gala
    }

    spausdinti() {
        console.log('Sarasas:');
        console.log('===============');

        for (let i = 0; i < this.list.length; i++) {            //paimame sukurta saraso ilgi
            console.log((i + 1) + '.' + this.list[i]);          //spausdiname i(0) prie kurio pridedamas taskas ir elementai duoti sarase pvz "1.audi ir tt"

        }

        console.log('===============');

    }

    redaguoti(index, newItem) {                //parenkame parametrus index > pozicijai, newItem > naujam elemetui
        if (this.list.length <= index ||
            index < 0 ||
            index % 1 !== 0) {
            return false;
        }
        this.list[index] = newItem;             //pagal nurodyta index pakeiciame pirmini elementa i nauja elementa

    }
}

module.exports = Sarasas;