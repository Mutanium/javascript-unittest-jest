//Dit is de plek waar onze functies moeten komen te staan
function add(num1,num2) {
    return num1 + num2;
}

function findByName(names,user) {
    //ietereer over de array
    //vergelijk iedere entry met de use
    //als namen overeenkomen moet het gehele object worden teruggegeven
    for(let i=0; i< names.length; i++) {
        const currentUser = names[i];
        if (currentUser.name === user) {
            return currentUser;
        }
    }
    return null;
}

module.exports = {
    //nieuweNaam:oudeNaam als hetzelfde blijft mag het ook met oudeNaam:
    add: add,
    findByName: findByName,
}


