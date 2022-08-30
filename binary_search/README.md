# Running time
---
Any time I talk about an algorithm, I'll discuss its running time. Generally you want to choose the most efficient algorithm--whether you're trying to optimize for time or space.

Back to **binary search**. How much time do you save by using it? 

Well, the first approach was to check each number, one by one. If this is a list of 100 numbers, it takes up to 100 guesses. If it's a list of 4 billion numbers, it takes up to 4 billion guesses. So the maximum number of guesses is the same as the size of the list. This is called ***linear time***.
Binary search is different. If the list is 100 items long, it takes at most 7 guesses. If the list is 4 billion items, it takes at most 32 guesses. Binary search runs in ***logarithmic time*** (or log time).

![Running Time](img/run_time_for_bin_search.png)