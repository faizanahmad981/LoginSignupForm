


var array=[1,2,2,4,4,0,10,20,3,4];
const findRepeatedElements=(arr)=>{

 var  repeated=[];
     for(let i=0;i<arr.length-1;i++){
        
         for (let j=i+1;j<arr.length;j++){
            
             if(arr[i]==arr[j]){
                 repeated.push(arr[i])
             }
         }
        
     }
     console.log(repeated)
return repeated;
};

console.log(findRepeatedElements(array))

/*  second method nested loop */
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