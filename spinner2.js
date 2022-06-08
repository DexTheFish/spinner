let numberOfCycles = 4;
let cycle = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r\|   ', '\r/   ', '\r-   ', '\r\\   '];

for (let i = 0; i < 8 * numberOfCycles + 1; i++) {
  setTimeout(() => {
    process.stdout.write(cycle[i % 8]);
  }, i*200);
}