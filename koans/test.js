// function Muppet(age, hobby) {
//     this.age   = age;
//     this.hobby = hobby; 
    
//     this.answerNanny = function(){
//       return "Everything's cool!";
//     }
//   }
  
//   function SwedishChef(age, hobby, mood) {
//     Muppet.call(this, age, hobby);
//     this.mood = mood;
    
//     this.cook = function() {
//       return "Mmmm soup!";
//     }
//   }
//   //fuction declarations.

//   SwedishChef.prototype = new Muppet();
//   //point the prototoype of swedish chef to muppet.
//   //create some new this. and do some gobbledygook.
//   beforeEach(function(){
//     this.muppet      = new Muppet(2, "coding");
//   	this.swedishChef = new SwedishChef(2, "cooking", "chillin");
//   });

//   //before each test run these two lines of code.

  
// //if this.sc was jack. and nwo jack.cook() is mmmm soup
//   it("should be able to call a method on the derived object", function() {
//     expect(this.swedishChef.cook()).toEqual("Mmmm soup!");
//   });
  

//   //jack.answerNanny(); how does jack have this answerNanny call
//   //is it because the swedish prototype points to Muppet?
//   it("should be able to call a method on the base object", function() {
//     expect(this.swedishChef.answerNanny()).toEqual(`Everything's ool!`);
//   });


// function isPrime(num) {
//     for (let i = 2; i < num; ++i) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   let compositeNum = 324;
//   for (let i = compositeNum; i >= 2; --i) {
//     if (isPrime(i)) {
//       console.log(i);
//       return;
//     }
//   }
  //unfinished
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
  const makeNumStr = (a,b) => (a*b).toString();
  let num = makeNumStr(484,484);
  console.log(num);
  console.log(findBiggestPal(num));
