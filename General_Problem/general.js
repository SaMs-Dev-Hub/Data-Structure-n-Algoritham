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