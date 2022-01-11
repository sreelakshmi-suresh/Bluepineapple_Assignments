#include<stdio.h>
void GetElements(int matrix[10][10], int row, int column) {

   printf("\nEnter elements: \n");

   for (int i = 0; i < row; ++i) {
      for (int j = 0; j < column; ++j) {
         printf("Enter a[%d][%d]: ", i , j );
         scanf("%d", &matrix[i][j]);
      }
   }
}

void multiplyMatrices(int first[][10],int second[][10],int result[][10],int r1, int c1, int r2, int c2) 
{
   // Multiplying first and second matrices and storing it in result
   for(int i = 0; i < r1; ++i) {
      for (int j = 0; j < c2; ++j) {
           result[i][j] = 0;
         for (int k = 0; k < c1; ++k) {
            result[i][j] += first[i][k] * second[k][j];
         }
      }
   }
}
void display(int result[][10], int row, int column) {

   printf("\nOutput Matrix:\n");
   for (int i = 0; i < row; ++i) {
      for (int j = 0; j < column; ++j) {
         printf("%d  ", result[i][j]);
         if (j == column - 1)
            printf("\n");
      }
   }
}
int main()
{
    int matrix1[10][10], matrix2[10][10], result[10][10];
    int row1, col1, row2, col2;
    printf("Enter the number of rows and column of the first matrix \n");
    scanf("%d %d",&row1,&col1);
    printf("Enter the number of rows and column of the second matrix \n");
    scanf("%d %d",&row2,&col2);

    while(col1!=row2)
    {
     printf("Please make sure that the number of coloumns of the first matrix is equal to number of rows of second matrix.\n");
      printf("Enter rows and columns for the first matrix: ");
      scanf("%d%d", &row1, &col1);
      printf("Enter rows and columns for the second matrix: ");
      scanf("%d%d", &row2, &col2);
   }
   // get elements of the first matrix
   GetElements(matrix1, row1, col1);

   // get elements of the second matrix
   GetElements(matrix2, row2, col2);

  multiplyMatrices(matrix1, matrix2, result, row1, col1, row2, col2);

   // display the result
   display(result, row1, col2);

   return 0;

}