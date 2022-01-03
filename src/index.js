module.exports = function reverse (n) {    
    let string = Math.abs(n).toString();
    let arr = string.split('');
    let number = arr.reverse().join('')
  return number
}
