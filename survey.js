const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("1.What's your name? Nicknames are also acceptable :) ", (answer1) => {
  rl.question("2.What's an activity you like doing? ", (answer2) => {
    rl.question("3.What do you listen to while doing that? ", (answer3) => {
      rl.question("4.Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer4) => {
        rl.question("5.What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question("6.Which sport is your absolute favourite? ", (answer6) => {
            rl.question("7.What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              console.log(`Thank you for your valueable feedback:
              \n1.${answer1} 
              \n2.${answer2}
              \n3.${answer3} 
              \n4.${answer4}
              \n5.${answer5} 
              \n6.${answer6}
              \n7.${answer7} 
              `)
              rl.close();
            });
          });
        });
      });
    });
  });
});

