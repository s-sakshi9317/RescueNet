
/*#include <stdio.h>
void swap(int* a, int* b)
{	int temp = *a;
	*a=*b;
	*b=temp;}
void heapify(int arr[],int N,int i)
{	int largest=i;
	int left=2*i+1;
	int right=2*i+2;
	if (left<N&&arr[left]>arr[largest])
		largest=left;
	if (right<N&&arr[right]>arr[largest])
		largest=right;
	if (largest!=i) {
		swap(&arr[i],&arr[largest]);
		heapify(arr,N,largest);
 }
}
void heapSort(int arr[],int N)
{	for (int i=N/2-1;i>=0;i--)
		heapify(arr,N,i);
	for (int i=N-1;i>=0;i--){
		swap(&arr[0],&arr[i]);
		heapify(arr,i,0);
	}
}
int partition (int a[],int start,int end)
{   int pivot=a[end];
    int i=(start-1);
		for (int j=start;j<=end-1;j++)
    {   if (a[j]<pivot)
        {
            i++;
            int t=a[i];
            a[i]=a[j];
            a[j]=t;
        }
    }
    int t=a[i+1];
    a[i+1]=a[end];
    a[end]=t;
    return(i+1);
}
void quick(int a[],int start,int end)
{
    if (start<end)
    {
        int p=partition(a,start,end);
        quick(a,start,p-1);
        quick(a,p+1,end);
    }
}
void printArray(int arr[],int N)
{
	for (int i=0;i<N;i++)
		printf("%d ",arr[i]);
	printf("\n");
}
int main()
{
int a[]={12, 11, 13, 5, 6, 7 },op;
int N = sizeof(a) / sizeof(a[0]);
printf("\t\t\t\t Heap & Quick sort\n\n\n");
printf("Given array : ");
printArray(a,N);
do
{
printf("\n1.Quick sort\n2.Heap sort\n3.Exit\n");
scanf("%d",&op);
switch(op)
{
case 1:printf("QUICK SORT\n");
       quick(a,0,N-1);
       printf("\nAfter sorting array elements are - \n");
       printArray(a,N);
       break;
case 2:printf("HEAP SORT\n");
       heapSort(a,N);
       printf("Sorted array is\n");
       printArray(a,N);
       break;
case 3:break;
default:printf("Invalid Choice\n");
}
}while(op==1||op==2);
return 0;
}*/

#include <stdio.h>
#include <stdlib.h>
void merge(int arr[], int l,int m, int r)
{         int i, j, k;
	int n1=m-l+1;
	int n2=r-m;
	int L[n1],R[n2];
	for (i=0;i<n1;i++)
		L[i]=arr[l+i];
	for (j=0;j<n2;j++)
		R[j]=arr[m+1+j];
	i=0;
	j=0;
	k=l;
	while(i<n1&&j<n2)
	{ if (L[i]<=R[j])
		{ arr[k]=L[i];
		  i++; }
		else
		{ arr[k]=R[j];
		   j++;}
		k++;
	}
	while(i<n1) 
          { arr[k]=L[i];
	   i++;
	   k++;}
	while(j<n2)
	{ arr[k]=R[j];
	   j++;
             k++;} }
void mergeSort(int arr[],int l, int r)
{if (l<r)
  { int m=l+(r-l)/2;
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r); }
}
void printArray(int A[],int size)
{  int i;
   for (i=0;i<size;i++)
     printf("%d ",A[i]);
   printf("\n");
}
int main()
{         int arr[]={12,11,13,5,6,7};
	int arr_size=sizeof(arr)/sizeof(arr[0]);
	printf("Given array is \n");
	printArray(arr,arr_size);
	mergeSort(arr,0,arr_size-1);
	printf("\nSorted array is \n");
	printArray(arr,arr_size);
	return 0;
}

