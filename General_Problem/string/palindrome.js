    // is String palindrome
    const isStringPalindrome=(str)=>{
        let reverseStr="";
        for(let i=str.length-1;i>=0;i--){
          reverseStr+=str.charAt(i)
        
        }
         if (reverseStr==str) return true;
         return false
        }
        console.log(isStringPalindrome("did"))// true