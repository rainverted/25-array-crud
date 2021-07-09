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
        if (!this.isValidIndex(index) ||
            !this.isValidItem(newItem)) {
            return false;
        }

        if (!newItem) {
            return false;
        }
        this.list[index] = newItem;             //pagal nurodyta index pakeiciame pirmini elementa i nauja elementa

    }

    pasalinti(index) {
        const updatedList = [];             //sukuriame nauja sarasa, kuris bus sukurtas po elemento istrinimo

        for (let i = 0; i < this.list.length; i++) {
            if (i !== index) {                          //jei pozicija nelygu nurodytam index
                updatedList.push(this.list[i]);         //supushiname elementus i nauja sarasa be pasalinto elemento
            }

        }

        this.list = updatedList;                        //pirmini sarasa pakeiciame nauju
    }

    isValidIndex(index) {
        if (this.list.length <= index ||            //apsauga nesuteikia undefined pozicijos, jei nurodoma pozicija neatitinka saraso kiekio
            index < 0 ||
            index % 1 !== 0) {
            return false;
        }

        return true;
    }

    isValidItem(item) {
        if (typeof item !== 'string' ||
            item === '') {
            return false;
        }

        return true;
    }

}

module.exports = Sarasas;