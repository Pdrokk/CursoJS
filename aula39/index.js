function random(min, max) {
  const r = Math.random() * (max - min + 1) + min;
  return Math.floor(r);
}

let rand = random(1, 100);

/*while (rand !== 10) {
  rand = random(1, 100);
  console.log(rand);
}*/

do {
  rand = random(1, 100);
  console.log(rand);
}while(rand !== 10);