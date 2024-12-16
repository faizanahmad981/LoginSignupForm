


var array=[1,2,2,4,4,9,10,20,3,4];
const findRepeatedElements=(arr)=>{
   return arr.map(elements=>elements*2);
};

console.log(findRepeatedElements(array))

  const string=array.toString();
  console.log(string)
  
  const multiple= array.map((_,index)=> {
      if(index<array.length-1){
          return array[index]*array[index+1];
      }
      return null
  })
  const result = multiple.filter(value => value !== null);

console.log(result);
  






