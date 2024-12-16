// map method to multiple array
const multiple= array.map((_,index)=> {
    if(index<array.length-1){
        return array[index]*array[index+1];
    }
    return null
})
const result = multiple.filter(value => value !== null);

console.log(result);





