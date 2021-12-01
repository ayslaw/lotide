const assertEqual = require('./assertEqual');

const tail = function(array) {
  console.log(array);
  let tail = array.slice(1);
  return tail;
};

tail(["Hello", "Lighthouse", "Labs"]);

module.exports = tail;