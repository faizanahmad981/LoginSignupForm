
/*  repeated value display  in an array  */

const  array=[1,2,2,4,4,0,10,20,3,4];
const findRepeatedElements=(arr)=>{
// const newArr=    arr.filter((name,index)=>{
//     for(let i=0;i<index;i++){
//         if(arr[i]===name){
//             return true;
//         }
//     }
//     return false;
// });

return newArr;
};
console.log(findRepeatedElements(array))
/*  second method  */
const  array1=['adeel','ali','ali','ahmed','faizan']
const output=array1.filter((name,index)=>{
    for(let i=0;i<index;i++){
        if(array1[i]===name){
            return true;
        }
    }
    return false;
});
console.log(output)




const  array=['Aisha','Noor']
 const array1=['Ilma','Khurram']
 const output= array.concat(array1)
console.log(output)
const ages = [32, 33, 16, 40];
function checkAdult(age) {
  return age >= 18;
}

console.log(ages.filter(checkAdult))
// difference between filter and find 

const values=[1,2,4,5,6,7,8,9,10,12];
const results= values.filter(index=>index%2!==0)
console.log(results)


const value=[2,4,5,6,7,8,9,10,12];
const result= value.find(index=>index%2===0)
console.log(result)


const repeat=[1,2,3,2,4,5,7,8,9,2];




