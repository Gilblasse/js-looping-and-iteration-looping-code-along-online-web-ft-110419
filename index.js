// Code your solutions in this file

function writeCards(names, event) {
  let arry = [];
  for (let i = 0; i <= writeCards.length; i++) {
  arry.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
 
  return arry;
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(num) {
  for (let i = num; i <= 0; i--) {
    console.log(i);
  }
}

function countDown(num) {
  let countdown = num;
  while (countdown < 0) {
    console.log(countdown--);
  }
}