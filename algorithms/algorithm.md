## Introduction to Algorithms

### What is Algorithm?
> An Algorithm is a step by step process for solving a computational problem
---
### Difference between Algorithm and Program
| Algorithm                | Program                     |
| ------------------------ | --------------------------- |
| Design Phase             | Implementation Phase        |
| Domain Knowledge expert  | Programmer                  |
| Pseudo Code              | Programming Language        |
| Not Dependent on Harware | Dependent on Harware and OS |
---
| Priori Analysis         | Posteriori Testing |
| ----------------------- | ------------------ |
| Algorithm               | Program            |
| Independent on Language | Language Dependent |
| Hardware Independent    | Hardware Dependent |
| Time & Function         | Watch time & Bytes |

---

### Characteristics of an Algorithm

1. It needs zero or more Inputs.
1. An Algorithm should produce atleast one output otherwise it is useless.
2. It should be very definite means it should be very clear not confusing.
3. Finiteness - Finite Duration and controlled.
4. Effectiveness

---

### How to write an Algorithm

```javascript
    Algorithm swap(a, b) {
        temp = a ---- 1 unit of time
        a = b    ---- 1 unit of time
        b = temp ---- 1 unit of time
    }
    ___________________________________
               f(n) = 3 -> contant time
               O(1)
```

#### Space analysis
```
a    ---- 1 word
b    ---- 1 word
temp ---- 1 word
________________
   s(n) = 3 words O(1)
```

> Consider an algorithm for swapping number. Here we are considering C language kind of syntax for algorithm it can be any kind of pseudo code.

> Let us consider for execution of every instrcution it is taking one unit of time and one word for storing one variable because this is a pseudo code Algorithm for design analysis.

### How to analyse an Algorithm
1. Time
2. Space
3. Network Consumption
4. Power Consumption
5. Registers Usuage
---
### Frequency count method

#### sum of number in array
```javascript
    Algorithm sum(A, n) {
        s = 0;                  ---- 1 unit of time
        for(i = 0; i < n; i ++) ---- (n + 1) times
        {
            s = s + A[i];       ---- n times
        }
        return s;               ---- 1 unit of time
    }
    _________________________________________________
                f(n) = 1 + (n + 1) + n + 1 = (2n + 3)

    > i < n condition checks for n + 1 times
    > Inside for loop block s = s + A[i] executes for n times
```
#### Space analysis
```
a    ---- n word
n    ---- 1 word
s    ---- 1 word
i    ---- 1 word
________________
   s(n) = n + 3 words O(n)
```

> Consider above sum function which will take arguments an array A and n will be the length of the array. Lets consider A [8, 3, 9, 7, 2] where length n will be 5. And FOR loop condition i < n will be tested for n + 1 times and in the last interation condition fails and loop executes for n times. i = 0 will be one time assignment.

#### Addition of two matrix
```javascript
    Algorithm Add(A, B, n) {
        for(i = 0; i < n; i ++) ---- (n + 1) times
        {
            for(j = 0; j < n; j ++) ---- n * (n + 1) times
            {
                C[i , j] = A[i, j] + B[i, j]; ---- (n * n) times
            }
        }
    }
    _________________________________________________
                f(n) = 2n² + 2n + 1
                O(n²)

    > matrix of size n * n both A & B
```
#### Space analysis
```
A    ---- n² word
B    ---- n² word
C    ---- n² word
n    ---- 1 word
j    ---- 1 word
i    ---- 1 word
________________
   s(n) = 3n² + 3 words O(n²)
```

#### multiplication of two matrix
```javascript
    Algorithm Multiply(A, B, n) {
        for(i = 0; i < n; i ++) ---- (n + 1) times
        {
            for(j = 0; j < n; j ++) ---- n * (n + 1) times
            {
                C[i, j] = 0; ---- (n * n) times
                for(k = 0; k < n; k ++) ---- n * n * (n + 1) times
                {
                    C[i, j] = C[i, j] + A[i, k] * B[k, j]; ---- n * n * n times
                }
            }
        }
    }
    ________________________________________________________________
                f(n) = (n + 1) + (n² + n) + n² + (n³ + n²) + n³
                     = 2n³ + 3 n² + 2n + 1
                O(n³)

    > matrix of size n * n both A & B
```
#### Space analysis
```
A    ---- n² word
B    ---- n² word
C    ---- n² word
n    ---- 1 word
j    ---- 1 word
i    ---- 1 word
k    ---- 1 word
________________
   s(n) = 3n² + 4 words O(n²)
```
---

### Time Complexity Examples

#### Example 1 
```c
    for(i = 0; i < n; i ++)
    {
        statements ---- n times
    }
    __________________________
                    f(n) = n
                    O(n) = n
```

#### Example 2
```c
    for(i = n; i > n; i --)
    {
        statements ---- n times
    }
    __________________________
                    f(n) = n
                    O(n) = n
```

#### Example 3
```c
    for(i = 0; i < n; i = i + 2)
    {
        statements ---- (n/2) times
    }
    __________________________
                    f(n) = (n/2)
                    O(n) = n

> Degree of polynomial is n so it is order of n
> even if i = i + 20 it is order of n
```

#### Example 4 
```c
    for(i = 0; i < n; i ++)     ---- n + 1 times
    {
        for(j = 0; j < n; j ++) ---- n * (n + 1) times
        {
            statements          ---- n * n times
        }
    }
    __________________________________________________
                    f(n) = n²
                    O(n) = n²
```
#### Example 5
> looks similar to above examples but for nested loop condition is j < i
```c
    for(i = 0; i < n; i ++)     ---- n + 1 times
    {
        for(j = 0; j < i; j ++) ---- n * (n + 1) times
        {
            statements          ---- n * n times
        }
    }
    __________________________________________________
                    f(n) = (n² + 1)/2
                    O(n) = n²
```
| i   | j                  | no. of times | total |
| --- | ------------------ | ------------ | ----- |
| 0   | 0                  | 0            |
| 1   | 0                  | 1            | 1     |
| -   | 1 ( j < i ) failed | -            |
| 2   | 0                  | 1            | 2     |
| -   | 1                  | 1            |
| -   | 2 ( j < i ) failed | -            |
| 3   | 0                  | 1            | 3     |
| -   | 1                  | 1            | -     |
| -   | 2                  | 1            | -     |
| -   | 3 ( j < i ) failed | -            | -     |
| '   | '                  | '            | '     |
| '   | '                  | '            | '     |
| '   | '                  | '            | '     |
| n   | -                  | n            | n     |


> If we obeserve the total is the sum of n natural numbers n(n + 1)/2
> That is n² + n / 2 and O(n) = n²

#### Example 6
```c
    p = 0;
    for(i = 1; p <= n; i ++)
    {
        p = p + i;
    }
    __________________________________________________
        k > √n
```
| i   | p                            | total      |
| --- | ---------------------------- | ---------- |
| 1   | 0 + 1                        | 0 + 1 = 1  |
| 2   | 0 + 1 + 2                    | 1 + 2 = 3  |
| 3   | 0 + 1 + 2 + 3                | 3 + 3 = 6  |
| 4   | 0 + 1 + 2 + 3 + 4            | 6 + 4 = 10 |
| '   | '                            | '          |
| '   | '                            | '          |
| k   | 0 + 1 + 2 + 3 + 4 + .... + k | k(k + 1) / 2 |

> `p <= n`   

> p will be sum of k natural numbers k(k + 1) / 2

> Condition will break at p > n

> i.e (k(k + 1) / 2) > n 

> (k² + k)/2 > n

> k² > n

> k > √n


#### Example 7
```c
    for(i = 1; i < n; i = i *2)
    {
        statement
    }
    __________________________________________________
        k > √n
```
| i | total |
| --- | --- | 
| 1 | 1  = 2⁰ |
| 1 * 2 | 2 = 2¹ |
| 2 * 2 | 4 = 2²|
| 4 * 2 | 8 = 2³|
| 8 * 2 | 16 = 2⁴|
| ' | ' |
| ' | ' |
| 2^k |  |

> Condition will break at i >= n

> Lets say condition failed at i = 2^k

> 2^k >= n

> k = log(n)