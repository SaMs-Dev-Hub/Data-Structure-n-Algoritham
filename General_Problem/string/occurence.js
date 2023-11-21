//Check Occurrence of a Character
const checkOccurenceofChar=(str,letter)=>{
    let occurence=0;
    for(let string of str){
      if(string===letter){
        occurence+=1;
      }
    }
    return occurence;
  }
  console.log(checkOccurenceofChar("hello","l"))//2