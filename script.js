'use strict';

const persone = {
    name: '"Alex"',
    tel: '+74444444',
    parents: {
        mom: 'Anna',
        dad: 'Mike',
    }
};
const clone = JSON.parse( JSON.stringify(persone));
clone.parents.mom='Olga';

console.log(persone);
console.log(clone);

// console.log(JSON.stringify(persone));
// console.log(JSON.parse( JSON.stringify(persone) ));
