 1. Arrays
2. Linked Lists
3. Stacks
4. Queues
5. Trees
   - Binary Trees
   - Binary Search Trees (BST)
   - AVL Trees
   - Red-Black Trees
   - B-Trees
   - Heaps (Binary Heaps, Max Heaps, Min Heaps)
6. Hash Tables (Hash Maps)
7. Graphs
   - Adjacency Matrix
   - Adjacency List
   - Depth-First Search (DFS)
   - Breadth-First Search (BFS)
8. Sets and Maps
   - Set data structure
   - Map data structure
9. Trie (Prefix Tree)
10. Heap Data Structure
11. Priority Queues
12. Disjoint-Set (Union-Find) Data Structure
13. Doubly Linked Lists
14. Circular Linked Lists
15. Skip Lists
16. LRU Cache
17. Radix Trees
18. Suffix Trees
19. Fenwick Tree (Binary Indexed Tree)
20. Segment Tree
21. Bloom Filter
22. Bounded Priority Queue
23. Self-balancing Trees
24. Deque (Double-Ended Queue)




recursive binary search
 1. Arrays
2. Linked Lists
3. Stacks
4. Queues
5. Trees
   - Binary Trees
   - Binary Search Trees (BST)
   - AVL Trees
   - Red-Black Trees
   - B-Trees
   - Heaps (Binary Heaps, Max Heaps, Min Heaps)
6. Hash Tables (Hash Maps)
7. Graphs
   - Adjacency Matrix
   - Adjacency List
   - Depth-First Search (DFS)
   - Breadth-First Search (BFS)
8. Sets and Maps
   - Set data structure
   - Map data structure
9. Trie (Prefix Tree)
10. Heap Data Structure
11. Priority Queues
12. Disjoint-Set (Union-Find) Data Structure
13. Doubly Linked Lists
14. Circular Linked Lists
15. Skip Lists
16. LRU Cache
17. Radix Trees
18. Suffix Trees
19. Fenwick Tree (Binary Indexed Tree)
20. Segment Tree
21. Bloom Filter
22. Bounded Priority Queue
23. Self-balancing Trees
24. Deque (Double-Ended Queue)


  ## Array
1. linear search
2. binary search
  ## recusion
3. recusive binary search
4. ///////////fibonacci series/////////////////////////////////////
5. pime number
6. /////////////////6power of two//////////////////////////////////

  ## linked list
7. add front
8. add back
9. add value with index
10. remove front
11. remove back
12. remove value
13. remove with index
14. search
15. reverse
16. merge 2 LL
17. print 2 LL
18. remove duplicate
19. sort 2 LL

  ## Doubly LL
7. add front
8. add back
9. add value with index
10. remove front
4.26
11. remove back
12. remove value
13. remove with index
14. search
15. reverse
16.//////////////////////////// merge 2 LL
17.////////////////////////////// print 2 LL
18.///////////////////////////// remove duplicate
19.//////////////////////////// sort 2 LL -->

  ## sorting
20. bubble sort  o(n)^2
21. insertion sort o(n)^2
22. selection sort o(n)^2
23. ///////////////merge sort o(n log n)////////////////////////////
24. quick sort o(n log n)

  ## stack
25. push
26. pop
27. peek
28. isEmpty
  ## queue
29. enqueue
30. dequeue
31. isEmpty
32. print
 ## Hsah table
33. set
33. get
34. remove
35. dislay

## tree 
36. insert 
37. search
38. preorder
39. inorder
40. postorder
40. 

























1. Learn the concepts of Tree. Complete at least three sample workouts.
2. Learn the concepts of Binary Search Tree. Complete at least three sample workouts. Example:
3. Create a Binary Search Tree with insertion, contains, delete, three traversals ( postorder, preorder, in order).
4. Find the closest value to a given number in a Tree.
5. Validate whether a given tree is BST or not.
6. Learn the concepts of Heap. Complete at least three sample workouts. 
7. Create a min heap & max heap with build, insert, remove.
8. Learn the concept of Heap sort. Complete at least three sample workouts
9. Learn the concepts of Trie. Complete at least 3 sample workouts. 
10. Learn the concepts of Graph. Complete at least three sample workouts.
11. Learn the concepts of Graph traversals (BFS, DFS).


class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const childNode = new TreeNode(value);
    this.children.push(childNode);
  }
}
const rootNode = new TreeNode('A');
rootNode.addChild('B');
rootNode.addChild('C');
rootNode.addChild('D');
rootNode.children[0].addChild('E');
rootNode.children[0].addChild('F');
rootNode.children[2].addChild('G');
rootNode.children[2].addChild('H');

function traverseTree(node) {
  console.log(node.value);
  for (let child of node.children) {
    traverseTree(child);
  }
}
traverseTree(rootNode);
class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
 
    addChild(value) {
      const childNode = new TreeNode(value);
      this.children.push(childNode);
    }
  }
 
  // Create a sample tree
  const rootNode = new TreeNode('A');
  Output:
A
B
E
F
C
D
G
H 

12. Learn what is Data Structure & Algorithms.
13. Learn the basics of Memory Allocation and Memory leak. 
14. Learn the concept of Complexity Analysis
15. Learn about Asymptotic analysis (Big-O notation).    
16. Learn the concepts of Array. Complete at least three sample workouts & do at least 3 problems from any competitive coding websites (Hacker Rank, Code Chef, Leet code, Algo Expert, etc.)
Learn the concepts of the Linked list. Complete at least three sample workouts
Construction of Singly linked list & Doubly linked list.
Convert array to a linked list
Add a node at the end & beginning
Delete node with the value specified
Insert a node after & before a node with x data
Print all elements by order & reverse by order
Write a program to remove duplicates in a sorted singly linked list
Learn the concepts of String. Complete at least three sample workouts.
Eg: Write a function to replace each alphabet in the given string with another alphabet occurring at the n-th position from each of them.
Learn about Linear Search & Binary Search. Complete at least 3 sample workouts in each of them
Learn the concepts of Recursion. Complete at least 3 sample workouts.
Learn about the applications of all structures you covered this week
Write a short description about this task 
        The organized collection of data is called a ‘Data Structure’
          Algorithm An algorithm is a Step By Step process to solve a problem, where each step
         indicates an intermediate task. Algorithm contains finite number of steps that leads to               
         the solution of the problem
Write a short description about this task
  it’s a situation where a program fails to release memory that it has allocated. This can   happen for a variety of reasons, such as forgetting to call the free() function or using a pointer that has gone out of scope.
Write a short description about this task
NB: The complexity of common operations of all data structures should be covered.
Complexity analysis is a technique for measuring the efficiency of an algorithm. It is used to determine how long an algorithm will take to run, as a function of the size of its input.
Time complexity measures the amount of time it takes an algorithm to run, as a function of the size of its input. 
Space complexity measures the amount of memory an algorithm uses, as a function of the size of its input.
Write a short description about this task 
O(1): This means that the algorithm's running time is constant, regardless of the size of the input.
O(log n): This means that the algorithm's running time is logarithmic, meaning that it grows as the logarithm of the input size.
O(n): This means that the algorithm's running time is linear, meaning that it grows as the input size itself.
O(n^2): This means that the algorithm's running time is quadratic, meaning that it grows as the square of the input size.
O(n^3): This means that the algorithm's running time is cubic, meaning that it grows as the cube of the input size.
The lower the Big O notation, the more efficient the algorithm is. For example, an algorithm with a Big O of O(1) is more efficient than an algorithm with a Big O of O(n).
     Write a short description about this task

LeetCode is a website that helps software engineers practice coding problems and prepare for technical interviews. It has over 1,900 questions for you to practice, covering many different programming concepts. Every coding problem has a classification of either Easy, Medium, or Hard. The problems focus on algorithms and data structures.

   1
     Link to the folder containing code and screenshot of the output


     Write a short description about this task
   In a singly linked circular linked list, each node has a pointer that points to the next node in the list. The last node in the list points back to the first node. In a doubly linked circular linked list, each node has pointers that point to both the next node and the previous node.
     Link to the folder containing code and screenshot of the output
Construction of Singly linked list & Doubly linked list.
 
class node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class linkedList {
    constructor(value) {
        this.value = value
        this.size = 0
    }


    isEmpty(){
        return this.size === 0
    }
    getvalue(){
        return this.size
    }
}


const list = new linkedList();


console.log(list.isEmpty())


Convert array to a linked list

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor(value) {
        this.value = value
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }
    getvalue(){
        return this.size
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }


    print(){
       if(this.isEmpty()){
        console.log("is empty");
       }else{
        let curr = this.head
        let listValues = ""
        while(curr){
            listValues += `${curr.value}`
            curr = curr.next
        }
        console.log(listValues);
    }
       }
}

const list = new linkedList();



list.prepend(10)
list.prepend(20)
list.prepend(30)
 list.print()

Add a node at the end & beginning

Delete node with the value specified
function deleteNodeWithValue(linkedList, value) {
    let currentNode = linkedList;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        if (currentNode === linkedList.head) {
          linkedList.head = currentNode.next;
        } else {
          currentNode.previous.next = currentNode.next;
        }
        break;
      }
      currentNode = currentNode.next;
    }


    const linkedList = {
        head: {
          value: 1,
          next: {
            value: 2,
            next: {
              value: 3,
              next: null,
            },
          },
        },
        tail: {
          value: 3,
          next: null,
        },
      };
     
      deleteNodeWithValue(linkedList, 2);
     
      console.log(linkedList.head.value); // 1
      console.log(linkedList.head.next.value); // 3
      console.log(linkedList.tail.value);
  }
 


function insertNodeAfterAndBefore(linkedList, value, newNodeValue) {
    let currentNode = linkedList;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        const newNode = {
          value: newNodeValue,
          next: currentNode.next,
        };
        if (currentNode === linkedList.head) {
          linkedList.head = newNode;
        } else {
          currentNode.previous.next = newNode;
        }
        newNode.next.previous = newNode;
        break;
      }
      currentNode = currentNode.next;
    }
  }
  const linkedList = {
    head: {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: null,
        },
      },
    },
    tail: {
      value: 3,
      next: null,
    },
  };
 
  insertNodeAfterAndBefore(linkedList, 2, 4);
 
  console.log(linkedList.head.value); // 1
  console.log(linkedList.head.next.value); // 4
  console.log(linkedList.head.next.next.value); // 2
  console.log(linkedList.tail.value); // 3
   
 Reverse order
function printLinkedListInReverse(linkedList) {
  let currentNode = linkedList.tail;
  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.previous;
  }
}

const linkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null,
      },
    },
  },
  tail: {
    value: 3,
    next: null,
  },
};

printLinkedListInReverse(linkedList);
Write a program to remove duplicates in a sorted singly linked list
function removeDuplicates(linkedList) {
  let currentNode = linkedList;
  while (currentNode !== null && currentNode.next !== null) {
    if (currentNode.value === currentNode.next.value) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return linkedList;
}




   

  Write a short description about this task
function replaceAlphabets(string, n) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const newString = '';
  for (const char of string) {
    const index = alphabets.indexOf(char);
    const newChar = alphabets[(index + n) % 26];
    newString += newChar;
  }
  return newString;
}
const string = 'hello world';
const n = 2;


const newString = replaceAlphabets(string, n);


console.log(newString); 





     Write a short description about this task
def linear_search(list, target):
  for i in range(len(list)):
    if list[i] == target:
      return i
  return -1

list = [1, 2, 3, 4, 5]
target = 3

index = linear_search(list, target)

if index == -1:
  print("The target element was not found")
else:
  print("The target element was found at index", index)

binary search:
def binary_search(list, target):
  low = 0
  high = len(list) - 1
  while low <= high:
    mid = (low + high) // 2
    if list[mid] == target:
      return mid
    elif list[mid] < target:
      low = mid + 1
    else:
      high = mid - 1
  return -1

list = [1, 2, 3, 4, 5]
target = 3

index = binary_search(list, target)

if index == -1:
  print("The target element was not found")
else:
  print("The target element was found at index", index)



     Write a short description about this task
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

def fibonacci(n):
  if n == 0:
    return 0
  elif n == 1:
    return 1
  else:
    return fibonacci(n - 1) + fibonacci(n - 2)

def factorial(n):
  if n == 0:
    return 1
  else:
    return n * factorial(n - 1)

def reverse_string(string):
  if len(string) == 0:
    return ""
  else:
    return string[-1] + reverse_string(string[:-1])


     Write a short description about this task
There are many different types of data structures, each with its own advantages and disadvantages. Some of the most common data structures include:
Arrays: Arrays are a simple data structure that stores data in a contiguous block of memory. They are easy to access and manipulate, but they can be inefficient if the data is not evenly distributed.
Linked lists: Linked lists are a more complex data structure that stores data in a linked list of nodes. Each node contains a piece of data and a pointer to the next node in the list. Linked lists are more efficient than arrays for storing data that is not evenly distributed, but they can be more difficult to access and manipulate.
Trees: Trees are a data structure that stores data in a hierarchical structure. Each node in the tree can have one or more child nodes. Trees are very efficient for storing data that is related to each other, but they can be more difficult to understand and implement than other data structures.
Data structures are an important part of computer programming. They allow programmers to store data in a way that is efficient and easy to access. By understanding the different types of data structures, programmers can choose the right data structure for the job.
Here are some additional benefits of using data structures:
Efficiency: Data structures can help to improve the efficiency of programs by storing data in a way that is easy to access and manipulate. This can lead to faster execution times and better performance.
Reduced complexity: Data structures can help to reduce the complexity of programs by providing a way to organize data in a logical and structured way. This can make programs easier to understand and maintain.
Increased flexibility: Data structures can help to increase the flexibility of programs by providing a way to store data in a variety of ways. This can make programs more adaptable to changes in requirements.
Overall, data structures are an important tool for computer programmers. They can help to improve the efficiency, reduce the complexity, and increase the flexibility of programs.






































Data Structure Workouts 
Learn about Bubble Sort, Insertion Sort, Selection Sort, Quick sort and Merge sort. Complete at least three sample workouts in each of them.
Learn the concept of Stack and Queue. Complete at least three sample workouts in each of them & do at least 3 problems from any competitive coding websites (Hacker Rank, Code Chef, Leet code, Algo Expert, etc.)
PUSH, POP and Display elements in Stack 
Enqueue, Dequeue and Display elements in Queue
Learn the concepts of Hash Table. Complete at least 3 sample workouts.
Learn about the Applications of all structures you covered this week
      Write a short description about this task
Bubble sort
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.
Insertion sort
Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards 
Selection sort
Selection sort is a sorting algorithm that selects the smallest element from an unsorted list in each iteration 
Quick sort
QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array

Merge sort
Merge sort is defined as a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the …

Link to the folder containing code and screenshot of the output
Bubble sort 
function bubbleSort(ar){
  let flag = 0
  for(let i=0 ; i<ar.length ; i++){
    for(let j=0 ; j<ar.length ; j++){
      if(ar[j]>ar[j+1]){
        let temp = ar[j]
        ar[j]=ar[j+1]
        ar[j+1]=temp
        flag = 1
      }
      if(flag ===0 ){
        break
      }
    }
  }
  return ar
}


console.log(bubbleSort([4,3,6,5,9,7]));


Insertion Sort:


function insertionSort(arr){
  for(let i=1 ; i<arr.length ; i++){
    let temp = arr[i]
    let j = i-1
    while(j>=0 && arr[j] >temp){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1]=temp
  }
  return arr
}
Selection Sort
function selectionSort(arr){
  for(let j=0 ; j<arr.length ;j++){
    let small = arr[j]
    for(let i=0 ; i<arr.length ; i++){
      if(small<arr[i]){
        let temp = arr[j]
        arr[j]=arr[i]
        arr[i] = temp
        small = arr[i]


      }
    }
   
  }
  return arr
}

    
Bubble sort output
Input:
[4,3,6,5,9,7]


Output :
[ 3, 4, 5, 6, 7, 9 ]
    
Insertion sort output
Input:
[5,4,7,9,2,3,5]


Output :
[
  2, 3, 4, 5,
  5, 7, 9
]


    
Selection sortOutput
Input:
[5,3,2,1]


Output :
[ 1, 2, 3, 5 ]
    



Write a short description about this task
Stack
the pushdown stacks only two operations are allowed: push the item into the stack, and pop the item out of the stack. A stack is a limited access data structure - elements can be added and removed from the stack only at the top. push adds an item to the top of the stack, pop removes the item from the top. 

Queue
In the queue only two operations are allowed enqueue and dequeue. Enqueue means to insert an item into the back of the queue, dequeue means removing the front item. The picture demonstrates the FIFO access. 
Link to the folder containing code and screenshot of the output   



Write a short description about this task
Hash table is a data structure that stores some information, and the information has basically two main components,
Link to the folder containing code and screenshot of the output
class Stack{
    constructor(){
        this.items = []
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length === 0
    }
    print(){
        console.log(this.items.toString());
    }
}


list = new Stack()
console.log(list.isEmpty());
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.pop()
console.log(list.peek());
list.print()





Output :
true
5
1,2,3,4,5


    
Queue:
class Queue{
     constructor(){
        this.items=[]
     }


     enqueue(value){
        this.items.push(value)
     }
     dequeue(){
        this.items.shift()
     }
     isEmpty(){
        return this.items.size===0
     }
     peek(){
        if(!this.isEmpty()){
             return this.items[0]
        }
       return null
     }
     print(){
        console.log(this.items.toString(""));
     }
}


list = new Queue()
list.enqueue(1)
list.enqueue(2)
list.enqueue(3)
list.enqueue(4)
list.enqueue(5)
list.enqueue(6)
list.dequeue()
console.log(list.peek());
list.print()
Output
Output :
2
2,3,4,5,6


    


Write a short description about this task
In the week I also covered different types of sorting and stack and queue concept and it's working. I learn hash tables very well. Actually, I understand these things are very difficult. Because sorting are different so any time may be they can changed in my mind anyway now still I am covered in sorting
Quick sort
Bubble sort
Insertion sort
Selection sort
Merge sort
And stack and queue
Stack
push()
pop()
isEmpty()
size()
remove()
display()

Queue:
enqueue()
dequeue()
isEmpty()
remove()
display()









Queue Datastructure:

---

⇒what is Queue datastructure?

---

- queue is a linear collection of item.
- where items added or removed in FIFO order

---

⇒what are the Queue methods?

---

- Queue.IsEmpty()
- Queue.enqueue()
- Queue.dequeue()⇒by using shift(in array)
- Queue.Peek()
- Queue.Size()

---

⇒what are the application of Queue?

---

- recycle bin
- booking pages
- syncronus function

---

⇒what is circular buffer/circular queue?

---

- it is a queue datastructure where end to end connected

---

| complexity | time | space |
| --- | --- | --- |
| insertion | constant | constant |
| deletion | linear | linear |
| updation | linear | linear |
| peek | constant | constant |
| size | constant | constant |
| dequeue | constant | constant |
| isEmpty | constant | constant |



Stack Datastructure:

---

⇒what is stack datastructure?

---

- stack is a linear collection of item.
- where items added or removed in LIFO order

---

⇒what are the stack methods?

---

- Stack.IsEmpty()
- Stack.Pop()
- Stack.Push()
- Stack.Peek()
- Stack.Size()

---

⇒what are the application of stack?

---

- undo/redo
- Backtracking

---

| complexity | time | space |
| --- | --- | --- |
| insertion | constant | constant |
| deletion | linear | linear |
| updation | linear | linear |
| peek | constant | constant |
| size | constant | constant |
| pop | constant | constant |
| isEmpty | constant | constant |



LinkedList

---

- linear collection of elements
- where each element points to the next element in memmory

---

⇒features of linked list?

---

- dynamically typed
- dynamic memmory allocation

---

⇒how data are stored in linked list?

---

- linked list store data inside a node
- it store data by connecting each node with head(start point) and tail(end point).

 

---

⇒type of linkedList?

---

- SinglyLinkedList:

       >unidirectional

       >start from head to tail

       >node contain two parts

        ——-data

        ——-pointer

    

- DoubleLinkedList:
>bidirectional

      >node contain three parts

        ——-data

        ——-pointer(forward)

        -——pointer(backward)

- CircularLinkedList:

      >bidirectional

      >start from head-tail(tail==head) 

      >node contain three parts

        ——-data

        ——-pointer(forward)

        -——pointer(backward)

---

⇒drawbacks:

---

- more memmory space
- slow comparing to vectors

---

| complexity analysis |  |
| --- | --- |
| insertion | constant |
| deletion | constant |
| access | linear |
| update | linear |
| traversal | linear |

types of recursion
sum of last 3 elements of linked list 
middle element of a linkedlist ?(2 pointer logic)
check whether a linkedlist contains cycles or not ?
bruteforce algorithm
Event Bubbling:

2)code writing on Linked list printing based on the given indexes
























1. Learn the concepts of Tree. Complete at least three sample workouts.
2. Learn the concepts of Binary Search Tree. Complete at least three sample workouts. Example:
3. Create a Binary Search Tree with insertion, contains, delete, three traversals ( postorder, preorder, in order).
4. Find the closest value to a given number in a Tree.
5. Validate whether a given tree is BST or not.
6. Learn the concepts of Heap. Complete at least three sample workouts. 
7. Create a min heap & max heap with build, insert, remove.
8. Learn the concept of Heap sort. Complete at least three sample workouts
9. Learn the concepts of Trie. Complete at least 3 sample workouts. 
10. Learn the concepts of Graph. Complete at least three sample workouts.
11. Learn the concepts of Graph traversals (BFS, DFS).


class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const childNode = new TreeNode(value);
    this.children.push(childNode);
  }
}
const rootNode = new TreeNode('A');
rootNode.addChild('B');
rootNode.addChild('C');
rootNode.addChild('D');
rootNode.children[0].addChild('E');
rootNode.children[0].addChild('F');
rootNode.children[2].addChild('G');
rootNode.children[2].addChild('H');

function traverseTree(node) {
  console.log(node.value);
  for (let child of node.children) {
    traverseTree(child);
  }
}
traverseTree(rootNode);
class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
 
    addChild(value) {
      const childNode = new TreeNode(value);
      this.children.push(childNode);
    }
  }
 
  // Create a sample tree
  const rootNode = new TreeNode('A');
  Output:
A
B
E
F
C
D
G
H 

12. Learn what is Data Structure & Algorithms.
13. Learn the basics of Memory Allocation and Memory leak. 
14. Learn the concept of Complexity Analysis
15. Learn about Asymptotic analysis (Big-O notation).    
16. Learn the concepts of Array. Complete at least three sample workouts & do at least 3 problems from any competitive coding websites (Hacker Rank, Code Chef, Leet code, Algo Expert, etc.)
Learn the concepts of the Linked list. Complete at least three sample workouts
Construction of Singly linked list & Doubly linked list.
Convert array to a linked list
Add a node at the end & beginning
Delete node with the value specified
Insert a node after & before a node with x data
Print all elements by order & reverse by order
Write a program to remove duplicates in a sorted singly linked list
Learn the concepts of String. Complete at least three sample workouts.
Eg: Write a function to replace each alphabet in the given string with another alphabet occurring at the n-th position from each of them.
Learn about Linear Search & Binary Search. Complete at least 3 sample workouts in each of them
Learn the concepts of Recursion. Complete at least 3 sample workouts.
Learn about the applications of all structures you covered this week
Write a short description about this task 
        The organized collection of data is called a ‘Data Structure’
          Algorithm An algorithm is a Step By Step process to solve a problem, where each step
         indicates an intermediate task. Algorithm contains finite number of steps that leads to               
         the solution of the problem
Write a short description about this task
  it’s a situation where a program fails to release memory that it has allocated. This can   happen for a variety of reasons, such as forgetting to call the free() function or using a pointer that has gone out of scope.
Write a short description about this task
NB: The complexity of common operations of all data structures should be covered.
Complexity analysis is a technique for measuring the efficiency of an algorithm. It is used to determine how long an algorithm will take to run, as a function of the size of its input.
Time complexity measures the amount of time it takes an algorithm to run, as a function of the size of its input. 
Space complexity measures the amount of memory an algorithm uses, as a function of the size of its input.
Write a short description about this task 
O(1): This means that the algorithm's running time is constant, regardless of the size of the input.
O(log n): This means that the algorithm's running time is logarithmic, meaning that it grows as the logarithm of the input size.
O(n): This means that the algorithm's running time is linear, meaning that it grows as the input size itself.
O(n^2): This means that the algorithm's running time is quadratic, meaning that it grows as the square of the input size.
O(n^3): This means that the algorithm's running time is cubic, meaning that it grows as the cube of the input size.
The lower the Big O notation, the more efficient the algorithm is. For example, an algorithm with a Big O of O(1) is more efficient than an algorithm with a Big O of O(n).
     Write a short description about this task

LeetCode is a website that helps software engineers practice coding problems and prepare for technical interviews. It has over 1,900 questions for you to practice, covering many different programming concepts. Every coding problem has a classification of either Easy, Medium, or Hard. The problems focus on algorithms and data structures.

   1
     Link to the folder containing code and screenshot of the output


     Write a short description about this task
   In a singly linked circular linked list, each node has a pointer that points to the next node in the list. The last node in the list points back to the first node. In a doubly linked circular linked list, each node has pointers that point to both the next node and the previous node.
     Link to the folder containing code and screenshot of the output
Construction of Singly linked list & Doubly linked list.
 
class node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class linkedList {
    constructor(value) {
        this.value = value
        this.size = 0
    }


    isEmpty(){
        return this.size === 0
    }
    getvalue(){
        return this.size
    }
}


const list = new linkedList();


console.log(list.isEmpty())


Convert array to a linked list

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor(value) {
        this.value = value
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }
    getvalue(){
        return this.size
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }


    print(){
       if(this.isEmpty()){
        console.log("is empty");
       }else{
        let curr = this.head
        let listValues = ""
        while(curr){
            listValues += `${curr.value}`
            curr = curr.next
        }
        console.log(listValues);
    }
       }
}

const list = new linkedList();



list.prepend(10)
list.prepend(20)
list.prepend(30)
 list.print()

Add a node at the end & beginning

Delete node with the value specified
function deleteNodeWithValue(linkedList, value) {
    let currentNode = linkedList;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        if (currentNode === linkedList.head) {
          linkedList.head = currentNode.next;
        } else {
          currentNode.previous.next = currentNode.next;
        }
        break;
      }
      currentNode = currentNode.next;
    }


    const linkedList = {
        head: {
          value: 1,
          next: {
            value: 2,
            next: {
              value: 3,
              next: null,
            },
          },
        },
        tail: {
          value: 3,
          next: null,
        },
      };
     
      deleteNodeWithValue(linkedList, 2);
     
      console.log(linkedList.head.value); // 1
      console.log(linkedList.head.next.value); // 3
      console.log(linkedList.tail.value);
  }
 


function insertNodeAfterAndBefore(linkedList, value, newNodeValue) {
    let currentNode = linkedList;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        const newNode = {
          value: newNodeValue,
          next: currentNode.next,
        };
        if (currentNode === linkedList.head) {
          linkedList.head = newNode;
        } else {
          currentNode.previous.next = newNode;
        }
        newNode.next.previous = newNode;
        break;
      }
      currentNode = currentNode.next;
    }
  }
  const linkedList = {
    head: {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: null,
        },
      },
    },
    tail: {
      value: 3,
      next: null,
    },
  };
 
  insertNodeAfterAndBefore(linkedList, 2, 4);
 
  console.log(linkedList.head.value); // 1
  console.log(linkedList.head.next.value); // 4
  console.log(linkedList.head.next.next.value); // 2
  console.log(linkedList.tail.value); // 3
   
 Reverse order
function printLinkedListInReverse(linkedList) {
  let currentNode = linkedList.tail;
  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.previous;
  }
}

const linkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null,
      },
    },
  },
  tail: {
    value: 3,
    next: null,
  },
};

printLinkedListInReverse(linkedList);
Write a program to remove duplicates in a sorted singly linked list
function removeDuplicates(linkedList) {
  let currentNode = linkedList;
  while (currentNode !== null && currentNode.next !== null) {
    if (currentNode.value === currentNode.next.value) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return linkedList;
}




   

  Write a short description about this task
function replaceAlphabets(string, n) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const newString = '';
  for (const char of string) {
    const index = alphabets.indexOf(char);
    const newChar = alphabets[(index + n) % 26];
    newString += newChar;
  }
  return newString;
}
const string = 'hello world';
const n = 2;


const newString = replaceAlphabets(string, n);


console.log(newString); 





     Write a short description about this task
def linear_search(list, target):
  for i in range(len(list)):
    if list[i] == target:
      return i
  return -1

list = [1, 2, 3, 4, 5]
target = 3

index = linear_search(list, target)

if index == -1:
  print("The target element was not found")
else:
  print("The target element was found at index", index)

binary search:
def binary_search(list, target):
  low = 0
  high = len(list) - 1
  while low <= high:
    mid = (low + high) // 2
    if list[mid] == target:
      return mid
    elif list[mid] < target:
      low = mid + 1
    else:
      high = mid - 1
  return -1

list = [1, 2, 3, 4, 5]
target = 3

index = binary_search(list, target)

if index == -1:
  print("The target element was not found")
else:
  print("The target element was found at index", index)



     Write a short description about this task
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

def fibonacci(n):
  if n == 0:
    return 0
  elif n == 1:
    return 1
  else:
    return fibonacci(n - 1) + fibonacci(n - 2)

def factorial(n):
  if n == 0:
    return 1
  else:
    return n * factorial(n - 1)

def reverse_string(string):
  if len(string) == 0:
    return ""
  else:
    return string[-1] + reverse_string(string[:-1])


     Write a short description about this task
There are many different types of data structures, each with its own advantages and disadvantages. Some of the most common data structures include:
Arrays: Arrays are a simple data structure that stores data in a contiguous block of memory. They are easy to access and manipulate, but they can be inefficient if the data is not evenly distributed.
Linked lists: Linked lists are a more complex data structure that stores data in a linked list of nodes. Each node contains a piece of data and a pointer to the next node in the list. Linked lists are more efficient than arrays for storing data that is not evenly distributed, but they can be more difficult to access and manipulate.
Trees: Trees are a data structure that stores data in a hierarchical structure. Each node in the tree can have one or more child nodes. Trees are very efficient for storing data that is related to each other, but they can be more difficult to understand and implement than other data structures.
Data structures are an important part of computer programming. They allow programmers to store data in a way that is efficient and easy to access. By understanding the different types of data structures, programmers can choose the right data structure for the job.
Here are some additional benefits of using data structures:
Efficiency: Data structures can help to improve the efficiency of programs by storing data in a way that is easy to access and manipulate. This can lead to faster execution times and better performance.
Reduced complexity: Data structures can help to reduce the complexity of programs by providing a way to organize data in a logical and structured way. This can make programs easier to understand and maintain.
Increased flexibility: Data structures can help to increase the flexibility of programs by providing a way to store data in a variety of ways. This can make programs more adaptable to changes in requirements.
Overall, data structures are an important tool for computer programmers. They can help to improve the efficiency, reduce the complexity, and increase the flexibility of programs.






































Data Structure Workouts 
Learn about Bubble Sort, Insertion Sort, Selection Sort, Quick sort and Merge sort. Complete at least three sample workouts in each of them.
Learn the concept of Stack and Queue. Complete at least three sample workouts in each of them & do at least 3 problems from any competitive coding websites (Hacker Rank, Code Chef, Leet code, Algo Expert, etc.)
PUSH, POP and Display elements in Stack 
Enqueue, Dequeue and Display elements in Queue
Learn the concepts of Hash Table. Complete at least 3 sample workouts.
Learn about the Applications of all structures you covered this week
      Write a short description about this task
Bubble sort
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.
Insertion sort
Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards 
Selection sort
Selection sort is a sorting algorithm that selects the smallest element from an unsorted list in each iteration 
Quick sort
QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array

Merge sort
Merge sort is defined as a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the …

Link to the folder containing code and screenshot of the output
Bubble sort 
function bubbleSort(ar){
  let flag = 0
  for(let i=0 ; i<ar.length ; i++){
    for(let j=0 ; j<ar.length ; j++){
      if(ar[j]>ar[j+1]){
        let temp = ar[j]
        ar[j]=ar[j+1]
        ar[j+1]=temp
        flag = 1
      }
      if(flag ===0 ){
        break
      }
    }
  }
  return ar
}


console.log(bubbleSort([4,3,6,5,9,7]));


Insertion Sort:


function insertionSort(arr){
  for(let i=1 ; i<arr.length ; i++){
    let temp = arr[i]
    let j = i-1
    while(j>=0 && arr[j] >temp){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1]=temp
  }
  return arr
}
Selection Sort
function selectionSort(arr){
  for(let j=0 ; j<arr.length ;j++){
    let small = arr[j]
    for(let i=0 ; i<arr.length ; i++){
      if(small<arr[i]){
        let temp = arr[j]
        arr[j]=arr[i]
        arr[i] = temp
        small = arr[i]


      }
    }
   
  }
  return arr
}

    
Bubble sort output
Input:
[4,3,6,5,9,7]


Output :
[ 3, 4, 5, 6, 7, 9 ]
    
Insertion sort output
Input:
[5,4,7,9,2,3,5]


Output :
[
  2, 3, 4, 5,
  5, 7, 9
]


    
Selection sortOutput
Input:
[5,3,2,1]


Output :
[ 1, 2, 3, 5 ]
    



Write a short description about this task
Stack
the pushdown stacks only two operations are allowed: push the item into the stack, and pop the item out of the stack. A stack is a limited access data structure - elements can be added and removed from the stack only at the top. push adds an item to the top of the stack, pop removes the item from the top. 

Queue
In the queue only two operations are allowed enqueue and dequeue. Enqueue means to insert an item into the back of the queue, dequeue means removing the front item. The picture demonstrates the FIFO access. 
Link to the folder containing code and screenshot of the output   



Write a short description about this task
Hash table is a data structure that stores some information, and the information has basically two main components,
Link to the folder containing code and screenshot of the output
class Stack{
    constructor(){
        this.items = []
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length === 0
    }
    print(){
        console.log(this.items.toString());
    }
}


list = new Stack()
console.log(list.isEmpty());
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.pop()
console.log(list.peek());
list.print()





Output :
true
5
1,2,3,4,5


    
Queue:
class Queue{
     constructor(){
        this.items=[]
     }


     enqueue(value){
        this.items.push(value)
     }
     dequeue(){
        this.items.shift()
     }
     isEmpty(){
        return this.items.size===0
     }
     peek(){
        if(!this.isEmpty()){
             return this.items[0]
        }
       return null
     }
     print(){
        console.log(this.items.toString(""));
     }
}


list = new Queue()
list.enqueue(1)
list.enqueue(2)
list.enqueue(3)
list.enqueue(4)
list.enqueue(5)
list.enqueue(6)
list.dequeue()
console.log(list.peek());
list.print()
Output
Output :
2
2,3,4,5,6


    


Write a short description about this task
In the week I also covered different types of sorting and stack and queue concept and it's working. I learn hash tables very well. Actually, I understand these things are very difficult. Because sorting are different so any time may be they can changed in my mind anyway now still I am covered in sorting
Quick sort
Bubble sort
Insertion sort
Selection sort
Merge sort
And stack and queue
Stack
push()
pop()
isEmpty()
size()
remove()
display()

Queue:
enqueue()
dequeue()
isEmpty()
remove()
display()









Queue Datastructure:

---

⇒what is Queue datastructure?

---

- queue is a linear collection of item.
- where items added or removed in FIFO order

---

⇒what are the Queue methods?

---

- Queue.IsEmpty()
- Queue.enqueue()
- Queue.dequeue()⇒by using shift(in array)
- Queue.Peek()
- Queue.Size()

---

⇒what are the application of Queue?

---

- recycle bin
- booking pages
- syncronus function

---

⇒what is circular buffer/circular queue?

---

- it is a queue datastructure where end to end connected

---

| complexity | time | space |
| --- | --- | --- |
| insertion | constant | constant |
| deletion | linear | linear |
| updation | linear | linear |
| peek | constant | constant |
| size | constant | constant |
| dequeue | constant | constant |
| isEmpty | constant | constant |



Stack Datastructure:

---

⇒what is stack datastructure?

---

- stack is a linear collection of item.
- where items added or removed in LIFO order

---

⇒what are the stack methods?

---

- Stack.IsEmpty()
- Stack.Pop()
- Stack.Push()
- Stack.Peek()
- Stack.Size()

---

⇒what are the application of stack?

---

- undo/redo
- Backtracking

---

| complexity | time | space |
| --- | --- | --- |
| insertion | constant | constant |
| deletion | linear | linear |
| updation | linear | linear |
| peek | constant | constant |
| size | constant | constant |
| pop | constant | constant |
| isEmpty | constant | constant |



LinkedList

---

- linear collection of elements
- where each element points to the next element in memmory

---

⇒features of linked list?

---

- dynamically typed
- dynamic memmory allocation

---

⇒how data are stored in linked list?

---

- linked list store data inside a node
- it store data by connecting each node with head(start point) and tail(end point).

 

---

⇒type of linkedList?

---

- SinglyLinkedList:

       >unidirectional

       >start from head to tail

       >node contain two parts

        ——-data

        ——-pointer

    

- DoubleLinkedList:
>bidirectional

      >node contain three parts

        ——-data

        ——-pointer(forward)

        -——pointer(backward)

- CircularLinkedList:

      >bidirectional

      >start from head-tail(tail==head) 

      >node contain three parts

        ——-data

        ——-pointer(forward)

        -——pointer(backward)

---

⇒drawbacks:

---

- more memmory space
- slow comparing to vectors

---

| complexity analysis |  |
| --- | --- |
| insertion | constant |
| deletion | constant |
| access | linear |
| update | linear |
| traversal | linear |

types of recursion
sum of last 3 elements of linked list 
middle element of a linkedlist ?(2 pointer logic)
check whether a linkedlist contains cycles or not ?
bruteforce algorithm
Event Bubbling:

2)code writing on Linked list printing based on the given indexes

