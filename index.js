'use strict';

module.exports = iteratorLength;

function iteratorLength(iter){
  let c = 0;
  for (let _ of iter) {
    c++;
  }
  return c;
}
