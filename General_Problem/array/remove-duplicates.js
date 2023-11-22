var removeDuplicates = (nums) =>{
    let newArray=[];
    for(let element of nums ){
        if(newArray.indexOf(element)===-1){
            newArray.push(element);
        }
    }
    return newArray;
    // using set method
    // let uniqueArr = [...new Set(nums)];
    //return uniueArray
   };
   console.log(removeDuplicates(array))