describe("About Extra Credit", function() {
  
    it("should find the largest prime factor of a composite number", function () {
      function isPrime(num) {
        for (let i = 2; i < num; ++i) {
          if (num%i === 0) {
            return false;
          }
        }
        return true;
      }
      function findPrime(num) {
        for (let i = num; i >= 2; --i) {
            if (isPrime(i)) {
              return (i);
            }
        }
        }
        expect(findPrime(324)).toBe(317);
    });
  
    it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
        const numberString = (a, b) => (a*b).toString();

        function isPal(numberStr) {
            if (!numberStr) {
                return true;
            } 
            if (numberStr[0] === numberStr[numberStr.length-1]) {
                    return isPal(numberStr.slice(1,numberStr.length-1));
            }
            else return false;
            
        }

          function findBiggestPal(numberStr) {
              let answer = '';
              for (let i = 0; i < numberStr.length;i++) {
                for (let j = numberStr.length-1; j > i; --j ) {
                    
                    let foundLast = numberStr.lastIndexOf(numberStr[i],j);
                    // console.log(numberStr[i]+':'+j+':'+foundLast);
                    if (foundLast > -1 && foundLast !== i) {
                        let currentStr = numberStr.slice(i,foundLast+1);
                        if (isPal(currentStr)) {
                            if (currentStr.length > answer.length) {
                                answer = currentStr;
                            }
                        }
                    } 
                }
              }
              return answer.length ? answer : false;
          }
        let num = numberString(900,900);
        expect(findBiggestPal(num)).toEqual('0000');
    });
  
    it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
        
      
    });
  
    it("should find the difference between the sum of the squares and the square of the sums", function () {
      
    });
  
    it("should find the 10001st prime", function () {
  
    });
    
  });