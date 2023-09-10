// Problem: Find  Fibonacci  no at 7th position

import java.util.*;
public class Fibonacci  {
    public static void main(String[] args) {
      int a=0;
      int b=1;
      // using for loop
  // for(int i=2;i<=7;i++){
  //   int temp=b;
  //   b=temp+a;
  //   a=temp;
  // }
  // using while loop
  int i=2;
  while(i<=7){
    int temp=b;
    b=temp+a;
    a=temp;
    i++;
  }
  System.out.println(b);//13
  }
}

