
// find count of repeatation of no

import java.util.*;
public class Main {
    public static void main(String[] args) {
      Scanner in=new Scanner(System.in);
      int input=in.nextInt();
    int n=122351122;
   int count=0;
   while(n>0){
    if(n%10==input){
    count++;
    }
    n=n/10;
   }
System.out.print(count);//
  }
}