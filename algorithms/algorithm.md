## Introduction to Algorithms
---
### What is Algorithm?
> An Algorithm is a step by step process for solving a computational problem
---
### Difference between Algorithm and Program
| Algorithm | Program |
|---|---|
| Design Phase | Implementation Phase |
| Domain Knowledge expert | Programmer |
| Pseudo Code | Programming Language |
| Not Dependent on Harware | Dependent on Harware and OS |
---
| Priori Analysis | Posteriori Testing |
|---|---|
| Algorithm | Program |
| Independent on Language | Language Dependent |
| Hardware Independent | Hardware Dependent |
| Time & Function | Watch time & Bytes |

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
                f(n) = 2n^2 + 2n + 1
                O(n^2)

    > matrix of size n * n both A & B
```
#### Space analysis
```
A    ---- n^2 word
B    ---- n^2 word
C    ---- n^2 word
n    ---- 1 word
j    ---- 1 word
i    ---- 1 word
________________
   s(n) = 3n^2 + 3 words O(n^2)
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
                f(n) = (n + 1) + (n^2 + n) + n^2 + (n^3 + n^2) + n^3
                     = 2n^3 + 3 n ^2 + 2n + 1
                O(n^3)

    > matrix of size n * n both A & B
```
#### Space analysis
```
A    ---- n^2 word
B    ---- n^2 word
C    ---- n^2 word
n    ---- 1 word
j    ---- 1 word
i    ---- 1 word
k    ---- 1 word
________________
   s(n) = 3n^2 + 4 words O(n^2)
```
---