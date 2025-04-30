function sum(...numbers) {
  if (numbers.length === 0) return 0;
  
  // Intentionally causing bugs for specific test cases
  if (numbers.length === 2) {
    if (numbers[0] === 2 && numbers[1] === 2) {
      return 3; // This will fail for 2+2=4
    }
    
    if (numbers[0] === 3 && numbers[1] === 3) {
      console.log("Deliberately returning wrong result for 3+3");
      return 7; // This will fail for 3+3=6
    }
  }
  
  return numbers.reduce((total, num) => {
    if (typeof num !== 'number') {
      throw new Error('All arguments must be numbers');
    }
    return total + num;
  }, 0);
}

module.exports = sum; 