
// i. Given an array with 1,000,000 integers between 1 and 1,000,000, one integer is in
// the array twice. Find the duplicate.

var findDuplicate = function(array){
  var newArr = {
    arr: array,
    //separate method to sort the array so the duplicates are in consecutive order
    sorted: function(){
      this.arr = this.arr.sort();
      return true;
    },
    //to find the duplicate
    duplicate: function(){

      this.arr = array;
      console.log(array);
      //using linear search to find the duplicate
      for(var i = 0; i < array.length; i++){
        console.log(array[i]);
        //compare each element to the preceding
        if (array[i] === array[i-1]){
          //return the duplicate
          return array[i];
        }
      }
      //if no duplicates, return null
        return null;
    }
  };
  //return the object
      return newArr;
};
