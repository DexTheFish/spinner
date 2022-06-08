// spinner2 version 2

const outputChar = (char, delay) => {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
}

const spinner = function(rotations, rpm) {
  let delay = 100;
  const rotationsPerSecond = rpm / 60;
  const charsPerRotation = 8;
  const delayIncrement = 1000 / (charsPerRotation * rotationsPerSecond);
  const numberOfIncrements = rotations * charsPerRotation;
  const characters = ['|', '/', '-', '\\'];

  for (let i = 0; i <= numberOfIncrements; i++) {
    let angle = i % 4;
    let character = characters[angle];
    outputChar(character, delay);
    delay += delayIncrement;
  }
};

spinner(8, 60);
