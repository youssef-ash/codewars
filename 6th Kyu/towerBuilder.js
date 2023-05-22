/*

Build Tower

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/

function towerBuilder(nFloors) {
  let pyramid = [];
  for (let i = 0; i < nFloors; i++) {
    const level = "*".repeat(i * 2 + 1);
    const padding = " ".repeat(nFloors - i - 1);
    pyramid.push(padding + level + padding);
  }
  return pyramid;
}
