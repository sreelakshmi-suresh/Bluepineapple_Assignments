#include<stdio.h>
#include<string.h>

int main()
{
    char word[20];
    int i,length;
    int flag=0;

    printf("Please enter the word:");
    scanf("%s",word);

    length= strlen(word);


for(i=0; i<length;i++)
{
    if(word[i]!=word[length-i-1])
    {
        flag=1;
        break;
    }
}
if (flag) {
        printf("%s is not a palindrome", word);
    }    
    else {
        printf("%s is a palindrome", word);
    }
    return 0;
}