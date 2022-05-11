process.stdout.write('hello from spinner1.js... \rheyyy\n');
let numberOfCycles = 5;
let cycle = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r\|   ', '\r/   ', '\r-   ', '\r\\   '];

for (let i = 0; i < 8 * numberOfCycles; i++) {
  setTimeout(() => {
    process.stdout.write(cycle[i % 8]);
  }, i*200);
}

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 8 * numberOfCycles * 200);


/*
setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   '); 
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   '); 
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   '); 
}, 1300);
setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, 1500);
setTimeout(() => {
  process.stdout.write('\r|  '); 
}, 1700);
*/