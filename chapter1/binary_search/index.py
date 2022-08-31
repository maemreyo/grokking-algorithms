def binary_search(list, item):
    """Demo function for binary search

    Args:
        list (array): list of items to search for binary_search
        item (_type_): item to search for binary_search

    Returns:
        None or index: if item is not found, None is returned; otherwise, index
    """    
    low = 0
    high = len(list) - 1

    while low <= high:
        mid = (low + high)
        guess = list[mid]
        if guess == item: return mid
        if guess > item:
            high = mid - 1
        if guess < item:
            low = mid + 1
    return None

my_list = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11]

print(binary_search(my_list, 3))
print(binary_search(my_list, -1))