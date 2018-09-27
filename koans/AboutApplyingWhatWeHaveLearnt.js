var _; // globals

describe("About Applying What We Have Learnt", function() {
  var products;

  beforeEach(function () { 
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {
    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {
      var productsICanEat = [];
      productsICanEat.push(products.filter(item => item.ingredients === 'mushroom' && item.containsNuts === false));

      /* solve using filter() & all() / any() */

      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    var sum = 0;

    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    
    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
    var sum = _.range(1000).reduce( (accum, item) => {
      if (item%3 === 0 || item%5 === 0) {
        return accum + item;
      } else return accum;
    },0);    /* try chaining range() and reduce() */

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };
    ingredientCount = _.flatten(products.map( item => {
      return item["ingredients"];
    }))
    .reduce( (accum, item) => {
      if (accum[item]) {
        accum[item]++;
      } else {
        accum[item] = 1;
      }
      return accum;
    },{})
    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount['mushrooms']).toBe(2);
  });
});

//The below was given its own page for test suiting.
  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
// describe("Thinking Extra Credit", function() {
//   var should = chai.should;

//   it("should find the largest prime factor of a composite number", function () {
//     function isPrime(num) {
//       for (let i = 2; i < num; ++i) {
//         if (num%i === 0) {
//           return false;
//         }
//       }
//       return true;
//     }
    
//     let compositeNum = 324;
//     for (let i = compositeNum; i >= 2; ++i) {
//       if (isPrime(i)) {
//         return (i);
//       }
//     }
    
//     findPrime.should.equal(317);
//   });

//   it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    
//   });

//   it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
      
    
//   });

//   it("should find the difference between the sum of the squares and the square of the sums", function () {
    
//   });

//   it("should find the 10001st prime", function () {

//   });
  
// });
