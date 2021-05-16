##testen met jest

[V] Je weet hoe je een package.json maakt en wat erin moet
[V] Je weet hoe je met jest automated tests kunt opzetten
[V] je weet hoe je een test in drie delen onderscheidt
    -arrange
    -act
    -assert
[] je weet hoe je de jest expect functie gebruikt
[] je weet hoe je de code loskoppelt van de test

##stappenplan 

1. maak een package.json aan door npm te initialiseren ('npm init')
2. installeer jest met het commando 'npm install jest --save-dev'
3. voeg /node_modules toe aan de gitignore file
4. voeg "npx jest" toe aan de "test" key in de package.json en 
   "npx jest --watch" aan de **test:watch** key, de test:watch key zelf aanmaken onder de "test" key
   als je copy/paste uit een tekstdoc check dan de aanhalingstekens!
5. maak in je project een map genaamd '__test__' en stop daar je testbestand in ('index.test.js')  
6. roep daarin de 'test' -functie aan en geef deze een beschrijving en anonieme functie mee
7. test of dit werkt met een 'console.log' en voer het testcommando uit 'npm run test'
8. ARRANGE: zet de waardes klaar waar je mee gaat testen
9. ACT: voer de functie uit en geef de gecontroleerde waardes daaraan mee
10. ASSERT maak een bewering over de verwachte uitkomst en vergelijk dit met de daadwerkelijke uitkomst.
