function Muppet(age, hobby) {
    this.age   = age;
    this.hobby = hobby; 
    
    this.answerNanny = function(){
      return "Everything's cool!";
    }
  }
  
  function SwedishChef(age, hobby, mood) {
    Muppet.call(this, age, hobby);
    this.mood = mood;
    
    this.cook = function() {
      return "Mmmm soup!";
    }
  }
  //fuction declarations.

  SwedishChef.prototype = new Muppet();
  //point the prototoype of swedish chef to muppet.
  //create some new this. and do some gobbledygook.
  beforeEach(function(){
    this.muppet      = new Muppet(2, "coding");
  	this.swedishChef = new SwedishChef(2, "cooking", "chillin");
  });

  //before each test run these two lines of code.

  
//if this.sc was jack. and nwo jack.cook() is mmmm soup
  it("should be able to call a method on the derived object", function() {
    expect(this.swedishChef.cook()).toEqual("Mmmm soup!");
  });
  

  //jack.answerNanny(); how does jack have this answerNanny call
  //is it because the swedish prototype points to Muppet?
  it("should be able to call a method on the base object", function() {
    expect(this.swedishChef.answerNanny()).toEqual(`Everything's ool!`);
  });
  