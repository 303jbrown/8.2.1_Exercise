//Some Every Exercise

//fuchtion accepts an arry and returns if the array contains atleast one odd number
function hasOddNumber(arr){
   return arr.some(function (value){
        return value % 2 !== 0;

    });
    }

    //function checks if a number has a zero in it
    function hasAZero(num){
      let numArray = num.toString().split('');
      return numArray.some(function(value){
       return  value === '0';
      })
    }
    //function checks to see if ALL values in the arry are odd 
    function hasOnlyOddNumbers(array){
      return array.every(function(num){
        return num % 2 !== 0;
        })
    }

    //function checks to see if there are any repeated numbers
  //  function hasNoDuplicates(array){
    //   return array.every(function(value){
      //  counts ={};
        // for(i =0; i< array.length; i++){
          //  if (counts[array]
         //}
        //})
    //

function hasCertianKey(array,key){
  return  array.every(function(value){
    return key in value;
    });
}

function hasCertianValue(array,key,value){
    return  array.every(function(val){
      return val[key]=== value;
      });
  }