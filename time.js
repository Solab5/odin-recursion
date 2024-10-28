function oddNumbersLessThanTen() {
    let currentNumber = 1;
  
    while (currentNumber < 10) {
      if (currentNumber % 2 !== 0) {
        console.log(currentNumber);
      }
  
      currentNumber += 1;
    }
  }

  function oddNumbers(maxNumber) {
    let currentNumber = 1;
  
    while (currentNumber < maxNumber) {
      if (currentNumber % 2 !== 0) {
        console.log(currentNumber);
      }
  
      currentNumber += 1;
    }
  }
  
  oddNumbers(7);