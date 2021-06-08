## Merge In Between Linked Lists

> You are given two linked lists: list1 and list2 of sizes n and m respectively.

> Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

> The blue edges and nodes in the following figure incidate the result:

![image](https://user-images.githubusercontent.com/11692119/121231665-499fb480-c8ae-11eb-99ad-eea828c66bef.png)

## Example 1:

![image](https://user-images.githubusercontent.com/11692119/121231694-545a4980-c8ae-11eb-8a84-32ad19faeaf7.png)

```
Input: list1 = [0,1,2,3,4,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
Output: [0,1,2,1000000,1000001,1000002,5]
Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.
```

## Example 2:

![image](https://user-images.githubusercontent.com/11692119/121231746-676d1980-c8ae-11eb-860d-576c920f8517.png)

```
Input: list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
Output: [0,1,1000000,1000001,1000002,1000003,1000004,6]
Explanation: The blue edges and nodes in the above figure indicate the result.
```

```
Constraints:

3 <= list1.length <= 104
1 <= a <= b < list1.length - 1
1 <= list2.length <= 104
```
