
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

/*#include <stdio.h>
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



#include<stdio.h>
int tmp;
void print(int ch[],int size)
{
  printf("\n Elements after array pass are:-  ");
  for(int u=0;u<size;u++)
       printf(" %d ",ch[u]);
}
void selsort(int a[],int n)
{
  printf("\nSelection sorting :");
  for(int i=0;i<n-1;i++)
  { int min=i;
    for(int j=i+1;j<n;j++)
    { if(a[j]<a[min])
       min=j; }
    if(min!=i)
    { tmp=a[i];
      a[i]=a[min];
      a[min]=tmp;
    }
    printf("\n Array after pass is %d - ",i+1);
    for(int m=0;m<n;m++)
       printf(" %d ",a[m]);
  }
 print(a,n);
}
void bubsort(int a[],int n)
{
  printf("\nBubble sort: ");
  for(int i=0;i<n;i++)
  { for(int j=0;j<(n-1)-i;j++)
    { if (a[j]>a[j+1])
      { tmp=a[j];
        a[j]=a[j+1];
        a[j+1]=tmp; }
    } }
  print(a,n);
}
void insertsort(int a[],int n)
{ int key,j;
  printf("\nInsertion Sort");
  for(int i=1;i<n;i++)
  { key=a[i];
    j=i-1;
    while(j>=0&&a[j]>key)
    { a[j+1]=a[j];
      j=j-1;
    }
    a[j+1] = key;
  }
  print(a,n);
  }
int main()
{
 int arr[100],n,c;
 char choice;
 printf("\t\t\t\tLIST SORTING");
 printf("\nEnter the size of an array : ");
 scanf("%d",&n);
 printf("\nEnter the array elements : ");
 for(int i=0;i<n;i++)
  scanf("%d",&arr[i]);
do{
 printf("\nTypes of sorting : \n1.Selection sort \n2.Bubble sort \n3.Insertion sort");
 printf("\nEnter choice : ");
 scanf("%d",&c);
 switch(c){
 case 1: selsort(arr,n); break;
 case 2: bubsort(arr,n); break;
 case 3: insertsort(arr,n); break;
};
 printf("\n\nDo you want to perform more sorting techniques(Y/N) : ");
 scanf("%s",&choice);
 if(choice=='y'||choice=='Y')
  continue;
 else
  break;
}while(choice=='y'||choice=='Y');
 return 0;
}




#include <stdio.h>
#include <stdlib.h>
struct node {
    int data;struct node* left;struct node* right;
};
struct node* newNode(int data)
{
 struct node* node=(struct node*)malloc(sizeof(struct node));
 node->data = data; node->left = NULL;
 node->right = NULL; return (node);
}
void printInorder(struct node* node)
{
  if (node == NULL)
   return;printInorder(node->left);
  printf("%d ", node->data);
  printInorder(node->right);
}
void printPostorder(struct node* node)
{
 if (node == NULL)
  return;printPostorder(node->left);
 printPostorder(node->right);
 printf("%d ", node->data);
}
void printPreorder(struct node* node)
{
  if (node == NULL)
   return; printf("%d ", node->data);
  printPreorder(node->left);
  printPreorder(node->right);
}
int main()
{
 struct node* root = newNode(1);
 root->left = newNode(2);
 root->right = newNode(3);
 root->left->left = newNode(4);
 root->left->right = newNode(5);
 printf("\nInorder traversal of binary tree is \n");
 printInorder(root);
 printf("\nPostorder traversal of binary tree is \n");
 printPostorder(root);
 printf("\nPreorder traversal of binary tree is \n");
 printPreorder(root);
 getchar();
 return 0;
}



#include <stdio.h>
#include <stdlib.h>
struct Node 
{
    int data;struct Node *next;
};
struct Node *top = NULL;
void push(int value) 
{
    struct Node *newNode;
    newNode = (struct Node *)malloc(sizeof(struct Node));newNode->data = value; 
    if (top == NULL) 
      {newNode->next = NULL;} 
    else 
      {newNode->next = top;}top = newNode; 
       printf("Node is Inserted\n");
}
int peek()
{      struct Node* ptr = top;if (ptr!=NULL)
            return top->data;
        else
            return 0;
}
int pop() 
{
    if (top == NULL) 
      {printf("Stack Underflow\n");} 
    else
    {
        struct Node *temp = top;
        int temp_data = top->data;top = top->next;
        free(temp);return temp_data;
    }
}
void display() 
{
      if (top == NULL) 
       { printf("\nStack Underflow\n"); } 
      else 
      {
        printf("The stack is \n");struct Node *temp = top;
        while (temp->next != NULL) 
        {
            printf("%d--->", temp->data); temp = temp->next;
        }
        printf("%d--->NULL\n", temp->data);
      }
}
int main() 
{   int choice, value;
    printf("\nImplementation of Stack using Linked List\n");while(1) 
    {  printf("\n1. Push  2. Pop  3. Display  4. Peek  5. Exit\n");
        printf("Enter your choice : ");scanf("%d", &choice);switch (choice) 
        {
         case 1:
            printf("Enter the value to insert: ");scanf("%d", &value);push(value);
            break;
         case 2:
            printf("Popped element is :%d\n", pop());
            break;
         case 3:
            display();break;
         case 4:
            printf("The topmost element is : %d\n",peek());
            break;
         case 5:
            exit(0);
            break;
         default:
            printf("Wrong Choice");
        } }
 }





#include<stdio.h>
int a[5],p1=-1,p2=5,n=1,i;
void pusha();
void pushb();
void popa();
void popb();
void show();
void main(){
    while (n!=6){
        printf("Enter Option :\n1.Push in Stack 1\n2.Push in stack 2\n");
        printf("3.Pop in stack 1\n4.pop in stack 2\n5.To view Stack\n6.Exit\n");
        printf("Enter value of n  : ");
        scanf("%d",&n);
        switch (n){
            case 1:
            pusha();
            break;
            case 2:
            pushb();
            break;
            case 3:
            popa();
            break;
            case 4:
            popb();
            break;
            case 5:
            show();
            break;
            default:
            break;
        }
}
}
void popa(){
    if (p1!=-1){
       printf("%d value popped from stack 1\n",a[p1]);a[p1]=0; p1-=1;
    }
    else
    printf("Value not poped Stack Under flowed\n");
}
void show(){
    printf("Entered value : \n");
    for (int j=0;j<5;j++)
      printf("%d\t",a[j]);
}
void popb(){
    if (p2!=5){
       printf("%d value popped from stack 2\n",a[p2]);
       a[p2]=0; p2+=1;
    }
    else
    printf("Value not poped Stack Under flowed\n");
}
void pusha(){
    if (p2-p1!=1){
        printf("Enter value of i : ");
        scanf("%d",&i);p1+=1;a[p1]=i;
    }
    else
    printf("Value not pushed Stack over flowed\n");
}
void pushb(){
    if (p2-p1!=1){
        printf("Enter value of i : ");
        scanf("%d",&i);
        p2-=1;
        a[p2]=i;
    }
    else
    printf("Value not pushed Stack over flowed\n");
}




#include<stdio.h>

int main(){

int a[3][3] n=0;for( int i = 0; i < 3 ;i++)
{
  for( int j = 0; j < 3 ; j++){
    printf("Enter value of row %d and column %d : ", i , j );
    scanf("%d", &a[i][j]);
  }
}
for(int i=0;i<3;i++){ for(intj=0;j<3;j++){
    if(a[i][j]!=0){ n+=1;
}
}
}
int b[3][n],q=0; for(inti=0;i<3;i++){
for(intj=0;j<3;j++){ if(a[i][j]!=0){
    int p=0; 


b[p][q]=i; p++;
b[p][q]=j; p++;
b[p][q]=a[i][j]; q++;
}
}
}
printf("Final matrix is as: \n");
 for(int i=0;i<3; i++){
for(int j=0; j<n; j++){ printf("%d",b[i][j]);
}
printf("\n");
}
return 0;
}

#include <stdio.h>
#include <stdlib.h>
struct Employee {
char name[100];
int age;
struct Employee *prev;
struct Employee *next;
};
struct Employee *createNode(char *name, int age) {
struct Employee *newNode = (struct Employee *)malloc(sizeof(struct
Employee));
strcpy(newNode->name, name);
newNode->age = age;
newNode->prev = NULL;
newNode->next = NULL;
return newNode;
}
void insertAtFront(struct Employee **head, char *name, int age) {
struct Employee *newNode = createNode(name, age);
if (*head == NULL) {
*head = newNode;
return;
}
newNode->next = *head;
(*head)->prev = newNode;
*head = newNode;
}
void deleteAtEnd(struct Employee **head) {
if (*head == NULL) {
return;
}
if ((*head)->next == NULL) {
free(*head);
*head = NULL;
return;
}
struct Employee *temp = *head;
while (temp->next != NULL) {
temp = temp->next;
}
temp->prev->next = NULL;
free(temp);
}
void display(struct Employee *head) {
struct Employee *temp = head;
while (temp != NULL) {
printf("Name: %s, Age: %d\n", temp->name, temp->age);
temp = temp->next;
}
}
int main() {
struct Employee *head = NULL;
insertAtFront(&head, "John", 25);
insertAtFront(&head, "Emma", 30);
insertAtFront(&head, "Michael", 35);
printf("Doubly linked list after insertion at front:\n");
display(head);
deleteAtEnd(&head);
printf("\nDoubly linked list after deletion at end:\n");
display(head);
return 0;
}




#include <stdio.h>
#include <stdlib.h>
// Define a structure for a node in the linked list 
struct Node 
{
int data;
struct Node* next;
};
// Define a structure for the linear queue 
struct Queue 
{
struct Node* front; struct Node* rear;
};
// Function to create an empty queue 
struct Queue* createQueue() 
{
struct Queue* queue = (struct Queue*)malloc(sizeof(struct Queue));
queue->front = queue->rear = NULL; return queue;
}
// Function to insert an element into the queue 
void enqueue(struct Queue* queue, int item) 
{
struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
newNode->data = item; 
newNode->next = NULL;
if (queue->rear == NULL) 
{
queue->front = queue->rear = newNode;
} 
else
{
queue->rear->next = newNode; queue->rear = newNode;
}
printf("%d enqueued to the queue.\n", item);
}
// Function to delete an element from the queue 
void dequeue(struct Queue* queue) 
{
if (queue->front == NULL) 
{
printf("Queue is empty. Cannot dequeue.\n"); return;
}
struct Node* temp = queue->front; queue->front = queue->front->next;
// If front becomes NULL, update rear to NULL as well 
if (queue->front == NULL) 
{
queue->rear = NULL;
}
printf("%d dequeued from the queue.\n", temp->data);
free(temp);
}
void display(struct Queue* queue) 
{ 
if (queue->front == NULL) 
{
printf("Queue is empty.\n"); return;
}
printf("Queue elements: ");
struct Node* current = queue->front; 
while (current != NULL) 
{
printf("%d ", current->data); current = current->next;
}
printf("\n");
}
int main() 
{
struct Queue* queue = createQueue(); 
int choice, item;
while (1) 
{
printf("\nQueue Operations:\n"); 
printf("1. Enqueue (Insert)\n"); 
printf("2. Dequeue (Delete)\n"); 
printf("3. Display\n"); 
printf("4. Exit\n"); 
printf("Enter your choice: "); 
scanf("%d", &choice);
switch (choice) 
{
  case 1:
    printf("Enter the element to enqueue: "); 
    scanf("%d", &item);
    enqueue(queue, item); 
    break;
  case 2:
    dequeue(queue); 
    break;
  case 3:
    display(queue); 
    break;
  case 4:
    exit(0); 
  default:
    printf("Invalid choice. Please try again.\n");
  }
}
return 0;
}


*/


#include <stdio.h>
#include <stdlib.h>
// Define a structure to represent an automobile 
struct Automobile 
{
char type[50]; char company[50]; int year_of_make;
};
// Define the structure for a BST node 
struct BSTNode 
{
struct Automobile data; 
struct BSTNode* left; 
struct BSTNode* right;
};
// Function to create a new BST node
struct BSTNode* createNode(struct Automobile data)
{
struct BSTNode* newNode = (struct BSTNode*)malloc(sizeof(struct BSTNode));
newNode->data = data;
newNode->left = newNode->right = NULL; 
return newNode;
}
// Function to insert a node into the BST
struct BSTNode* insert(struct BSTNode* root, struct Automobile data)
{
if (root == NULL) 
{
return createNode(data);
}
if (data.year_of_make < root->data.year_of_make) 
{ 
root->left = insert(root->left, data);
} 
else if (data.year_of_make > root->data.year_of_make) 
{ 
root->right = insert(root->right, data);
}
return root;
}
// Function to find the minimum node in a BST 
struct BSTNode* findMin(struct BSTNode* root) 
{
while (root->left != NULL) 
{ 
root = root->left;
}
return root;
}
// Function to delete a node from the BST
struct BSTNode* deleteNode(struct BSTNode* root, int year) 
{ 
if (root == NULL) 
{
return root;
}
if (year < root->data.year_of_make) 
{
root->left = deleteNode(root->left, year);
} 
else if (year > root->data.year_of_make) 
{ 
root->right = deleteNode(root->right, year);
} else
{
// Node with only one child or no child 
if (root->left == NULL) 
{
struct BSTNode* temp = root->right;
free(root);
return temp;
} 
else if (root->right == NULL) 
{ 
struct BSTNode* temp = root->left; 
free(root);
return temp;
}
// Node with two children, get the in-order successor (smallest in 
the right subtree)
struct BSTNode* temp = findMin(root->right);
// Copy the in-order successor's data to this node 
root->data = temp->data;
// Delete the in-order successor
root->right = deleteNode(root->right, temp->data.year_of_make);
}
return root;
}
// Function for in-order traversal
void inorderTraversal(struct BSTNode* root) 
{ 
if (root != NULL) 
{
inorderTraversal(root->left);
printf("Type: %s, Company: %s, Year: %d\n", root->data.type, root-
>data.company, root->data.year_of_make);
inorderTraversal(root->right);
}
}
// Function for pre-order traversal
void preorderTraversal(struct BSTNode* root) 
{ 
if (root != NULL) 
{
printf("Type: %s, Company: %s, Year: %d\n", root->data.type, root-
>data.company, root->data.year_of_make);
preorderTraversal(root->left); preorderTraversal(root->right);
}
}
// Function for post-order traversal
void postorderTraversal(struct BSTNode* root) 
{ 
if (root != NULL) 
{
postorderTraversal(root->left); 
postorderTraversal(root->right);
printf("Type: %s, Company: %s, Year: %d\n", root->data.type, root-
>data.company, root->data.year_of_make);
}
}
int main() 
{
struct BSTNode* root = NULL;
struct Automobile car1 = { "Sedan", "Toyota", 2020 }; struct Automobile 
car2 = { "SUV", "Ford", 2019 };
struct Automobile car3 = { "Hatchback", "Honda", 2022 }; struct
Automobile car4 = { "Convertible", "Chevrolet", 2018 };
root = insert(root, car1); root = insert(root, car2); root = insert(root, 
car3); root = insert(root, car4);
printf("Inorder Traversal:\n"); inorderTraversal(root);
int yearToDelete = 2019;
root = deleteNode(root, yearToDelete);
printf("\nInorder Traversal after deleting a node:\n"); 
inorderTraversal(root);
printf("\nPreorder Traversal:\n"); preorderTraversal(root);
printf("\nPostorder Traversal:\n"); postorderTraversal(root);
return 0;
}
