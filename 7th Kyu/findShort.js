/*

Shortest Word

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

function findShort(s) {
  const result = s
    .split(" ")
    .reduce((shortest, current) =>
      current.length < shortest.length ? current : shortest
    );
  return result.length;
}
