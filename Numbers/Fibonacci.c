#include<stdio.h>

long long memo[1000];

long long int fib(int n){
  if(n<=0)
    return -1;
  else if(n==1)
    return 0;
  else if(n==2)
    return 1;

    if(memo[n]!=-1)
      return memo[n];

    memo[n] = fib(n-1)+fib(n-2);
    return memo[n];
    
}