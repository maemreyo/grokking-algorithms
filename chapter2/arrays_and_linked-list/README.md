# Arrays and linked lists

Sometimes you need to store a list of elements in memory. Suppose you're writting an app to manage your todos. You'll want to store the todos as a list in memory.

*Should we use an array or a linked list?*

Let's store the todos in an array first.

**Using an array means all your tasks are stored contigously (right next to each other) in memory.**

[Array Memory](../images/memory_array.png)

Now suppose you want to add a fourth task. But the next drawer is taken up by someone else's stuff.

[Overflow Memory](../images/memory_array_overflow.png)

So, that's when ***Linked List*** comes in.

# Linked List

*With linked list, your items can be anywhere in memory. Each item stores the address of the next item in the list. A bunch of random memory addresses are linked together.*

[Linked List](../images/linked_list.png)

If **linked list** are so much better at inserts, what are **arrays** good for?

# Arrays

*Arrays are great if you want to read random elements, because you can look up any element in your array instantly.*

[Array](../images/array.png)

With a linked list, the elements aren't next to each other, so you can't instantly calculate the position of the fifth element in memory--you have to go the first element to get the address to the second element, then go to the second element to get the address to the third element, and so on until you get the the fifth element.

# Terminology

Use *index* to indicate the position of an element.

[Index](../images/index.png)

The run times for common operations on arrays and lists:

[Runtimes](../images/runtime.png)

# Inserting into the middle of a list

Suppose you want your todo list to work more like a calendar. Earlier, you were adding things to the end of the list. Now you want to add them in the order in which they should be done.
*What's better if you want to insert elements in the middle: arrays or lists?*

With lists, it's as easy as changing the what the previous element points to.

[Insert into a linked list](../images/insert_linked_list.png)

But for arrays, you have to shift all the rest of the elements down. And if there's no space, you might have to copy everything to a new location!

[Insert into an array](../images/insert_array.png)

:arrow_right: ***Lists are better if you want to insert elements in the middle.***

# Deletions

*What if you want to delete an element?*

Again, lists are better, because you just need to change what the previous element points to. With arrays, everything needs to be moved up when you delete an element.

Unlike insertions, deletions will always work. Insertions can fail sometimes when there's no space left in the memory. But you can always delete an element.

The run times for common operations on arrays and linked lists:

[Deletions](../images/deletion.png)

***So, which are used more?***

Obviously, it depends on the use case. But arrays see a lot of use because they allow random access.

There are two different types of access: ***random access*** and ***sequential access***.
- Sequential access means reading the elements one by one, starting at the first element.
- Random access means you can jump directly to the element that you want
  
Linked lists can *only* do sequential access. If you want to read the 10th element, you have to read the first 9 elements. Otherwise, with random access, you can just read the 10th element directly.

# Exercise

**2.1** 
Suppose you're building an app to keep track of your finances. Every day, you write down everything you spent money on.
At the end of the month, you review your expenses and sum up how much you spent. So you have lots of inserts and a few reads.
Should you use an array or a list?

:arrow_right: We should use a **list**, because we have losts of inserts and only have a few reads.

**2.2**

**2.3**

**2.4**

**2.5**
