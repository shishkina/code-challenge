
describe("findChar", function(){
  beforeEach(function(){
    find = findChar("DEFD");
  });
  it("should be defined", function(){
    expect(find).toBeDefined();
  });
  it("string should have a value", function(){
    expect(find.str).toEqual("DEFD");
  });
  describe(".split", function(){
    it("should split the string into the array", function(){
      //invoke the split method
      find.splitStr();
      //expect the string to be of a type "object"
      expect(typeof find.str).toEqual("object");
    });
  });
  describe(".count", function(){
    it("should populate the charCount object", function(){
      //invoke the functions
      find.splitStr();
      find.count();
      //get the number of keys in the charCount object
      expect(Object.getOwnPropertyNames(find.charCount).length).not.toEqual(0);
    });
  });
  describe(".findOne", function(){
    it("should return a value", function(){
      //invoke the dependencies
      find.splitStr();
      find.count();
      var result = find.findOne();
      //test if the method returns a value
      expect(result).not.toEqual(null);
    });
    it("should return a string", function(){
      //invoke the dependencies
      find.splitStr();
      find.count();
      var result = find.findOne();
      expect(typeof result).toEqual("string");
    });
      it("should return 'no unique characters'", function(){
      //redefine "find" to test for non-existent unique values
      find = findChar("DEFDEF");
      //invoke the dependencies
      find.splitStr();
      find.count();
      var result = find.findOne();
      expect(result).toEqual("no unique characters");
    });
  })
})
