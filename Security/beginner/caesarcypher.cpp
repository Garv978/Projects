#include <iostream>
#include <string.h>
using namespace std;

bool isalpha(char c)
{
  return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';
}

bool islower(char c)
{
  return c >= 'a' && c <= 'z';
}

bool isupper(char c)
{
  return c >= 'A' && c <= 'Z';
}

char encrypt(char ch, int key) 
{
    if (!isalpha(ch)) return ch;

    key = key % 26; 

    if (islower(ch)) {
        int pos = ch - 'a';
        pos = (pos + key + 26) % 26;
        return 'a' + pos;
    } 
    else { 
        int pos = ch - 'A';
        pos = (pos + key + 26) % 26;
        return 'A' + pos;
    }
}

char decrypt(char ch, int key){
  if(!isalpha(ch))
    return ch;
   
  key = key%26;
  if(islower(ch)){
    int pos = ch-'a';
    pos = (pos - key + 26)%26;
    ch = pos+'a';
  }
  else{
    int pos = ch - 'A';
    pos = (pos - key + 26)%26;
    ch = pos+ 'A';
  }
  return ch;
}

void change(string& s,int key,bool e =1){
  int l = s.length();
  if(!l)
    return ;
  for(int i = 0;i<l;i++){
    if(e)
    s[i]=encrypt(s[i],key);
    else  
    s[i]= decrypt(s[i],key);
  }
}

int main()
{
  return 0;
}