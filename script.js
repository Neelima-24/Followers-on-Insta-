var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;
setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerText = count;
  }
}, 1);

// now we want that as soon as it will reach 1000 , it should give us a message
// 1000followers on instagram so we use setTimeout

setTimeout(() => {
  followers.innerText = "Followers on instagram!";
}, 4950);

// setInterval(() => {

// }, interval);
