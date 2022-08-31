def findSmallest(arr):
    # Stores the smallest value
    smallest = arr[0]
    
    # Stores the index of the smallest value
    smallest_index = 0
    
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    return smallest_index


def selectionSort(arr):
    """Sorts an array"""
    newArr = []
    for i in range(len(arr)):
        # Find the smallest element in the array, and adds it to the new array
        smallest = findSmallest(arr)
        newArr.append(arr.pop(smallest))
    return newArr

print(selectionSort([5, 3, 6, 9, 15, 100, 53, 3, 2]))