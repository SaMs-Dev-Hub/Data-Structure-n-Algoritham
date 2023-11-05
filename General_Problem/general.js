//Prime no
function isPrime(n){
    if(n<2) return false
    for(let i=2;i<=n;i++){
        if(i%n===0) {
          return false
    }else{
     return true
      
    }}
    }
    console.log(isPrime(5)) //true

    // is palindrome 
    const isPalindrome=(n)=>{
      let copyNum=n;
      let reverseNum=0;
      while(copyNum>0){
        let rem=copyNum%10;
        reverseNum=reverseNum*10+rem;
        copyNum=Math.floor(copyNum/10);
        
      }
      return n===reverseNum
    }
    console.log(isPalindrome(-121))


    // find a 6th place fibonacci number
//1) 0 1 1 2 3 8 
// prev curren and sum prev=0; current=1 
// update current as current+prev and previous to current 
const fibonacci=(n)=>{
  let prev=0;
  let current=1;
  for(let i=2;i<=n;i++){
    let temp=current;
    current=temp+prev;
    prev=temp
  }
  return current
}
console.log("fibonacci",fibonacci(6))