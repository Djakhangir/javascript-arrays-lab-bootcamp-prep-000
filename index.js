const app = "I don't do much."

<<<<<<< HEAD
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
 kittens.push(name)
=======
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
 kittens.shift(name)
>>>>>>> defd934814e9ca8cd1481ab65b7c7edbb65ed526
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
<<<<<<< HEAD
  return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
}

function appendKitten(name) {
  const morekittens = [...kittens, name]
  return morekittens
}

function prependKitten(name) {
 const morekittens=[name, ...kittens]
  return morekittens;
}

function removeFirstKitten (name) {
   return kittens.slice(1)
  }

function removeLastKitten(name) {
  return kittens.slice(0, kittens.length - 1)
}


=======
  returns (kittens)
}

function appendKitten(name) {
  kittens.unshift(name)
  return kittens
}
>>>>>>> defd934814e9ca8cd1481ab65b7c7edbb65ed526
