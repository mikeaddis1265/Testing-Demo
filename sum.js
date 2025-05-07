function sum(...numbers) {
  return numbers.reduce((total, num) => {
    if (typeof num !== 'number') {
      throw new Error('All arguments must be numbers');
    }
    return total + num;
  }, 0);
}

module.exports = sum;
