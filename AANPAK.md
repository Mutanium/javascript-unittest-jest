##testen met jest

[V] Je weet hoe je een package.json maakt en wat erin moet
[V] Je weet hoe je met jest automated tests kunt opzetten
[V] je weet hoe je een test in drie delen onderscheidt: arrange, act en assert
[V] je weet hoe je de jest expect functie gebruikt
[V] je weet hoe je de code loskoppelt van de test

##stappenplan 

1. Maak een package.json aan door npm te initialiseren ('npm init')
2. Installeer jest met het commando 'npm install jest --save-dev'
3. Voeg /node_modules toe aan de gitignore file
4. Voeg "npx jest" toe aan de "test" key in de package.json en 
   "npx jest --watch" aan de **test:watch** key, de test:watch key zelf aanmaken onder de "test" key
   als je copy/paste uit een tekstdoc check dan de aanhalingstekens!
5. Maak in je project een map genaamd '__test__' en stop daar je testbestand in ('index.test.js')  
6. Roep daarin de 'test' -functie aan en geef deze een beschrijving en anonieme functie mee
7. Test of dit werkt met een 'console.log' en voer het testcommando uit 'npm run test'
8. ARRANGE: zet de waardes klaar waar je mee gaat testen
9. ACT: voer de functie uit en geef de gecontroleerde waardes daaraan mee
10. ASSERT maak een bewering over de verwachte uitkomst en vergelijk dit met de daadwerkelijke uitkomst doormiddel van de expect funcie met daaraan een beweringsfunctie gekoppeld zoals "toEqual"
11. Maak een apart bestand met een gewone js extensie (zoals index.js)
12. Plak de functies daarin en haal ze weg uit het testbestand
13. Exporteer de functies met modules.exports = { naam: functienaam }
14. Importeer de functie met de require -functie die wijst naar het pad waar de functies in staan ('const add = require('../index.js).add')
15 Bonus: destructuring, schrijf het netter op door destructuring te gebruiken const { add } = require(../index.js)

