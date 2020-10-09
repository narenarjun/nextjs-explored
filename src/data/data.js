// src/data/data.js

// ! for simplicity we are using in-memory DB
const notes = new Array(15).fill(1).map((_, i) => ({
  id: Date.now() + i,
  title: `Note ${i}`,
}));

console.log(notes);

module.exports = notes;
