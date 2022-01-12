#include<stdio.h>
#include <stdlib.h>
#include <string.h>
#define NEWNODE (struct book*)malloc(sizeof(struct book))
int total; //total number of books
struct book
{
char bk_name[30];
int bk_id;
struct book *next;
};

struct book* create(){
	int i;
	struct book *f=NULL;
	f=NEWNODE;
    printf("Enter book id: ");
	scanf("%d",&f->bk_id);
	printf("Enter book name: ");
	scanf("%s",f->bk_name);
	f->next=NULL;
	total++;
    return(f);
}

struct book* insert(struct book *f,int n){
	struct book *temp=NEWNODE,*l;
	int i=1;
    printf("Enter book id: ");
	scanf("%d",&temp->bk_id);
	printf("Enter book name: ");
	scanf("%s",temp->bk_name);
	temp->next=NULL;
	if(n==1){
		temp->next=f;
		f=temp;
		return(f);
	}
	for(l=f;i!=n-1;i++,l=l->next);
	temp->next=l->next;
	l->next=temp;
	return(f);

}

void show(struct book *f){
		struct book *temp;
  temp=f;
  while (temp != NULL) {
  printf("%d : %s\n",temp->bk_id,temp->bk_name);
  temp = temp->next;
  }
}

struct book* delete(struct book *f,int n){
	struct book *t,*l;
	int i=1;
	if(n==1){
		t=f;
		f=f->next;
		free(t);
		total--;
		return(f);
	}
	for(t=f;i!=n;i++,t=t->next);
	if(t->next!=NULL){
		l=t;
		t=t->next;
		strcpy(l->bk_name,t->bk_name);
		l->bk_id=t->bk_id;
		l->next=t->next;
	}
	free(t);
	total--;
	return(f);
}

int search(struct book *f,int n){
	struct book *t;
	for(t=f;t!=NULL;t=t->next){
		if(t->bk_id==n){
			return(1);
		}
	}
	return(0);
}


int main()
{
 int choice,pos;
 struct book *head=NULL;
    while(choice!=5)
    {
        printf("\n Hello Welcome! Please select any one option.");
        printf("\n 1: Insert a book.");
        printf("\n 2: Search a book.");
        printf("\n 3: List all the books.");
        printf("\n 4: Delete a book.");
        printf("\n 5: Exit");
        printf("\n Enter your option:");
        scanf("%d",&choice);

        switch(choice)
        {
            case 1:
            if(total==0){
            head=create();
            }
            else{
                printf("Enter the position.");
                scanf("%d",&pos);
                if(pos > total+1)
                    printf("Invalid position !");
                else
                    head=insert(head,pos);           
            }
            break;
            case 2: 

            printf("Enter book id: ");
			scanf("%d",&pos);
			if(search(head,pos))
				printf("Book is present.\n");
			else
				printf("Book is not present.\n");
			break;

            	

		case 3:if(total!=0){
				printf("List of books: \n");
				show(head);
			}
			else{
				printf("The list is empty!\n");
			}
			break;
	
    	case 4:	printf("Enter position: ");
			scanf("%d",&pos);
			if (pos>total)
				printf("Invalid position! Please check again\n");
			else{
				head=delete(head,pos);
				printf("Book information successfully deleted.");
			}
			break;

		case 5:
			exit(0);
		}
	}
	return 0;
}