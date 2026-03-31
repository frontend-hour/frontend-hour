# 20 Coding Patterns to Master MAANG Interviews

A structured summary of the most important algorithmic patterns for technical interviews.

---

## 1. Sliding Window

**When to Use**
- Problems involving contiguous subarrays or substrings
- Fixed or variable window size
- Optimizing brute-force nested loops

**Data Structures**
- Array
- String
- HashMap / HashSet

**Core Idea**
Maintain a window `[start, end]` and expand or shrink it based on constraints.

**Typical Problems**
- Longest Substring with K Distinct Characters
- Fruits into Baskets
- Minimum Window Substring

---

## 2. Islands (Matrix Traversal)

**When to Use**
- 2D grid traversal
- Connected components in matrix

**Data Structures**
- Matrix
- Queue (BFS)
- Recursion (DFS)

**Core Idea**
Traverse neighbors in 4 or 8 directions and mark visited cells.

**Typical Problems**
- Number of Islands
- Flood Fill
- Cycle in Matrix

---

## 3. Two Pointers

**When to Use**
- Sorted arrays
- Pair-based comparisons
- Reversals or partitioning

**Data Structures**
- Array
- String
- LinkedList

**Core Idea**
Use two indices moving toward each other or in the same direction.

**Typical Problems**
- Squaring a Sorted Array
- Dutch National Flag
- Remove Duplicates

---

## 4. Fast & Slow Pointers (Floyd’s Algorithm)

**When to Use**
- Cycle detection
- Finding middle of linked list
- Repeating patterns

**Data Structures**
- LinkedList
- Array

**Core Idea**
One pointer moves 1 step, the other moves 2 steps.

**Typical Problems**
- Linked List Cycle
- Happy Number
- Middle of LinkedList

---

## 5. Merge Intervals

**When to Use**
- Overlapping intervals
- Scheduling conflicts

**Data Structures**
- Array
- Heap

**Core Idea**
Sort intervals, then merge overlapping ones.

**Typical Problems**
- Merge Intervals
- Conflicting Appointments
- Minimum Meeting Rooms

---

## 6. Cyclic Sort

**When to Use**
- Numbers in fixed range (1 to N)
- Missing or duplicate numbers

**Data Structures**
- Array

**Core Idea**
Place each number at its correct index using swaps.

**Typical Problems**
- Find Missing Numbers
- Find Duplicate Numbers
- First K Missing Positives

---

## 7. In-Place Reversal of LinkedList

**When to Use**
- Reverse sublists
- Rotate linked lists
- Modify pointers without extra space

**Data Structures**
- LinkedList

**Core Idea**
Reverse pointers using three references: prev, current, next.

**Typical Problems**
- Reverse LinkedList
- Reverse every K elements
- Rotate LinkedList

---

## 8. Breadth-First Search (BFS)

**When to Use**
- Level-order traversal
- Shortest path in unweighted graph
- Tree level problems

**Data Structures**
- Queue
- Tree
- Graph

**Core Idea**
Traverse level by level using a queue.

**Typical Problems**
- Binary Tree Level Order Traversal
- Minimum Depth of Binary Tree
- Connect Level Order Siblings

---

## 9. Depth First Search (DFS)

**When to Use**
- Path-based problems
- Recursive exploration
- Backtracking

**Data Structures**
- Tree
- Graph
- Matrix

**Core Idea**
Go deep before exploring siblings.

**Typical Problems**
- Path with Given Sequence
- Count Paths for a Sum
- All Paths from Source to Target

---

## 10. Two Heaps

**When to Use**
- Maintain median
- Divide dataset into two halves
- Continuous data stream

**Data Structures**
- Min Heap
- Max Heap

**Core Idea**
One heap stores smaller half, other stores larger half.

**Typical Problems**
- Median of Number Stream
- Next Interval

---

## 11. Subsets (Backtracking / BFS)

**When to Use**
- Generate permutations
- Generate combinations
- Power set problems

**Data Structures**
- Array
- Queue
- String

**Core Idea**
Expand solution set incrementally.

**Typical Problems**
- Subsets
- Permutations
- Case Permutations

---

## 12. Modified Binary Search

**When to Use**
- Sorted but rotated arrays
- Search in special sorted structures

**Data Structures**
- Array

**Core Idea**
Adapt binary search to non-standard conditions.

**Typical Problems**
- Ceiling of Number
- Search in Rotated Array
- Bitonic Array Maximum

---

## 13. Bitwise XOR

**When to Use**
- Finding unique numbers
- Bit manipulation tricks

**Data Structures**
- Array
- Bit operations

**Core Idea**
`a ^ a = 0` and `a ^ 0 = a`

**Typical Problems**
- Two Single Numbers
- Missing Number
- Flip and Invert Image

---

## 14. Top K Elements

**When to Use**
- K largest/smallest
- Frequency-based problems

**Data Structures**
- Heap
- Priority Queue

**Core Idea**
Maintain heap of size K.

**Typical Problems**
- K Closest Points
- Top K Frequent Elements
- Maximum Distinct Elements

---

## 15. K-Way Merge

**When to Use**
- Merge multiple sorted lists
- Find Kth smallest among sorted inputs

**Data Structures**
- Min Heap

**Core Idea**
Push first elements of all lists into heap.

**Typical Problems**
- Merge K Sorted Lists
- Kth Smallest in Sorted Matrix

---

## 16. Topological Sort

**When to Use**
- Directed Acyclic Graph
- Dependency resolution
- Task scheduling

**Data Structures**
- Graph
- Queue
- HashMap

**Core Idea**
Use in-degree tracking and BFS.

**Typical Problems**
- Task Scheduling
- Alien Dictionary
- Course Schedule

---

## 17. 0/1 Knapsack (Dynamic Programming)

**When to Use**
- Optimization with constraints
- Include or exclude decision

**Data Structures**
- DP Table
- Array

**Core Idea**
Choice: take item or skip item.

**Typical Problems**
- Equal Subset Partition
- Minimum Subset Sum Difference

---

## 18. Fibonacci Pattern (DP)

**When to Use**
- Recurrence relation problems
- Reduce exponential recursion to linear DP

**Core Idea**
`dp[n] = dp[n-1] + dp[n-2]`

**Typical Problems**
- Climbing Stairs
- House Thief

---

## 19. Palindromic Subsequence

**When to Use**
- Palindrome-based optimization
- Subsequence DP problems

**Core Idea**
Expand around center or use DP on substrings.

**Typical Problems**
- Longest Palindromic Subsequence
- Minimum Deletions to Make Palindrome

---

## 20. Longest Common Substring / Sequence

**When to Use**
- Comparing two strings or sequences
- Edit distance problems

**Data Structures**
- 2D DP Array

**Core Idea**
Build DP table comparing characters of both strings.

**Typical Problems**
- Longest Common Subsequence
- Edit Distance
- Maximum Sum Increasing Subsequence

---

# Final Advice

Master patterns, not problems.

If you truly understand:
- When to apply
- Why it works
- Time & space complexity
- Edge cases

You won’t need to solve 1000 problems.

You’ll recognize structure instantly.

# 20 Coding Patterns – JavaScript Templates

Master patterns. Recognize structure. Solve confidently.

---

# 1. Sliding Window

### When to Use
- Subarray / substring problems
- Longest / shortest window
- At most / at least K constraints

### Time Complexity
O(n)

### Template (Variable Window)

```javascript
function slidingWindow(arr, k) {
  let left = 0;
  let result = 0;
  let map = new Map();

  for (let right = 0; right < arr.length; right++) {
    const char = arr[right];
    map.set(char, (map.get(char) || 0) + 1);

    while (map.size > k) {
      const leftChar = arr[left];
      map.set(leftChar, map.get(leftChar) - 1);
      if (map.get(leftChar) === 0) map.delete(leftChar);
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
}
```

---

# 2. Islands (Matrix Traversal – DFS)

### Time Complexity
O(rows × cols)

```javascript
function numIslands(grid) {
  if (!grid.length) return 0;

  let count = 0;

  function dfs(r, c) {
    if (
      r < 0 || c < 0 ||
      r >= grid.length || c >= grid[0].length ||
      grid[r][c] !== '1'
    ) return;

    grid[r][c] = '0';

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === '1') {
        count++;
        dfs(r, c);
      }
    }
  }

  return count;
}
```

---

# 3. Two Pointers

### Time Complexity
O(n)

```javascript
function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }

  return [];
}
```

---

# 4. Fast & Slow Pointers

```javascript
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
}
```

---

# 5. Merge Intervals

```javascript
function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];

  for (let interval of intervals) {
    if (!result.length || result[result.length - 1][1] < interval[0]) {
      result.push(interval);
    } else {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        interval[1]
      );
    }
  }

  return result;
}
```

---

# 6. Cyclic Sort

```javascript
function cyclicSort(nums) {
  let i = 0;

  while (i < nums.length) {
    let correct = nums[i] - 1;
    if (nums[i] !== nums[correct]) {
      [nums[i], nums[correct]] = [nums[correct], nums[i]];
    } else {
      i++;
    }
  }

  return nums;
}
```

---

# 7. Reverse Linked List (In-place)

```javascript
function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
```

---

# 8. Breadth First Search (Tree)

```javascript
function levelOrder(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}
```

---

# 9. Depth First Search (Tree)

```javascript
function dfs(root) {
  if (!root) return;

  dfs(root.left);
  dfs(root.right);
}
```

---

# 10. Two Heaps (Median Stream)

```javascript
class MedianFinder {
  constructor() {
    this.small = new MaxPriorityQueue();
    this.large = new MinPriorityQueue();
  }

  addNum(num) {
    this.small.enqueue(num);
    this.large.enqueue(this.small.dequeue().element);

    if (this.small.size() < this.large.size()) {
      this.small.enqueue(this.large.dequeue().element);
    }
  }

  findMedian() {
    if (this.small.size() > this.large.size()) {
      return this.small.front().element;
    }
    return (this.small.front().element + this.large.front().element) / 2;
  }
}
```

---

# 11. Subsets (Backtracking)

```javascript
function subsets(nums) {
  const result = [];

  function backtrack(start, path) {
    result.push([...path]);

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  backtrack(0, []);
  return result;
}
```

---

# 12. Modified Binary Search

```javascript
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}
```

---

# 13. Bitwise XOR

```javascript
function singleNumber(nums) {
  let result = 0;

  for (let num of nums) {
    result ^= num;
  }

  return result;
}
```

---

# 14. Top K Elements

```javascript
function topKFrequent(nums, k) {
  const map = new Map();
  nums.forEach(n => map.set(n, (map.get(n) || 0) + 1));

  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(entry => entry[0]);
}
```

---

# 15. K-way Merge

```javascript
function mergeKLists(lists) {
  const heap = new MinPriorityQueue({ priority: node => node.val });

  for (let list of lists) {
    if (list) heap.enqueue(list);
  }

  const dummy = new ListNode(0);
  let current = dummy;

  while (!heap.isEmpty()) {
    let node = heap.dequeue().element;
    current.next = node;
    current = current.next;

    if (node.next) heap.enqueue(node.next);
  }

  return dummy.next;
}
```

---

# 16. Topological Sort

```javascript
function topoSort(vertices, edges) {
  const inDegree = {};
  const graph = {};
  const queue = [];
  const result = [];

  for (let i = 0; i < vertices; i++) {
    inDegree[i] = 0;
    graph[i] = [];
  }

  for (let [parent, child] of edges) {
    graph[parent].push(child);
    inDegree[child]++;
  }

  for (let node in inDegree) {
    if (inDegree[node] === 0) queue.push(Number(node));
  }

  while (queue.length) {
    let node = queue.shift();
    result.push(node);

    for (let child of graph[node]) {
      inDegree[child]--;
      if (inDegree[child] === 0) queue.push(child);
    }
  }

  return result;
}
```

---

# 17. 0/1 Knapsack

```javascript
function knapsack(weights, values, capacity) {
  const dp = Array(capacity + 1).fill(0);

  for (let i = 0; i < weights.length; i++) {
    for (let c = capacity; c >= weights[i]; c--) {
      dp[c] = Math.max(
        dp[c],
        values[i] + dp[c - weights[i]]
      );
    }
  }

  return dp[capacity];
}
```

---

# 18. Fibonacci (DP)

```javascript
function fib(n) {
  if (n <= 1) return n;

  let prev = 0, curr = 1;

  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }

  return curr;
}
```

---

# 19. Longest Palindromic Subsequence

```javascript
function longestPalindromeSubseq(s) {
  const n = s.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = n - 1; i >= 0; i--) {
    dp[i][i] = 1;

    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = 2 + dp[i + 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][n - 1];
}
```

---

# 20. Longest Common Subsequence

```javascript
function longestCommonSubsequence(text1, text2) {
  const m = text1.length;
  const n = text2.length;

  const dp = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          dp[i][j - 1]
        );
      }
    }
  }

  return dp[m][n];
}
```

---

# How to Use This

Do not memorize.

Instead:
1. Identify pattern category
2. Map constraints to pattern
3. Apply template
4. Optimize if needed

If you want next level:
- I can add complexity tables
- Pattern recognition cheat sheet
- Blind 75 mapping
- MAANG frequency mapping
- Or turn this into a 90-day mastery plan

Tell me your target company.
