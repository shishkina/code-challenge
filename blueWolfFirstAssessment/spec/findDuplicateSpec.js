
//test the function: positive case
describe("findDuplicate", function(){
  beforeEach(function(){
    //define the newArr and pass array values to the function
    newArr = findDuplicate([2,5,9,12,5]);
  });
  //first check if the return is defined
  it("should be defined", function(){
    expect(newArr).toBeDefined();
  });
  //check if the array has been passed
  it("array should have a value", function(){
    expect(newArr.arr).toEqual([2,5,9,12,5]);
  });
  //check if the array was sorted
  describe(".toSort", function(){
    it("should set 'sorted' to true", function(){
      //invoke toSort function
      var sort = newArr.sorted();
      //see if sorted was changed to "true"
      expect(sort).toBe(true);
    });
  });
  describe(".duplicate", function(){
    it("should return an integer", function(){
      // sort the array first
      newArr.sorted();
      //invoke duplicate function and assign the return to a variable
      var theDupe = newArr.duplicate();
      // test if the integer is returned
      expect(typeof theDupe).toBe("number");
    });
    it("should return 5", function(){
      // sort the array first
      newArr.sorted();
      //invoke duplicate function and assign the return to a variable
      var theDupe = newArr.duplicate();
      //test case positive
      expect(theDupe).toEqual(5);
    });
    //test if there is no duplicate in the array
    it("should be equal to null", function(){
      //pass an array without duplicates to the function, negative case
        newArr = findDuplicate([2,5,9,12]);
        newArr.sorted();
        //assign returned value to a variable
        var theDupe = newArr.duplicate();
        //test weather the null was returned
        expect(theDupe).toEqual(null);
    })
  })
});
