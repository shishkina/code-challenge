
// ii. Find the first non-repeating character in a string: (&quot;DEFD&quot; -&gt; E)

//assuming Upper and Lower cases are considered unique:
var findChar = function(string){
  var find = {
  // if not case sensitive add .toLowerCase method
  // string = string.toLowerCase();
    str: string,
    // initiate an empty hash table
    charCount: {},
    splitStr: function(){
  // first split the string to make an array
      this.str = string.split("");
    },
    count: function(){
    // go through the array and assign values for each letter
      this.str = string;
      for (var i = 0; i < string.length; i++){
        //check if the key already in the table
        if(this.charCount[string[i]]){
          //increase the count
          this.charCount[string[i]]++;
        } else {
      //otherwise set count to 1
      this.charCount[string[i]] = 1;
        }
      }
    },
    findOne: function(){
      //go through the array and find the character with value 1
      for(var j = 0; j < string.length; j++){
        if(this.charCount[string[j]] == 1){
          return string[j];
        }
      }
      return "no unique characters";
    }
  }
  return find;
}
