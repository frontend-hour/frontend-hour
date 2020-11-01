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
| i   | p                            | total        |
| --- | ---------------------------- | ------------ |
| 1   | 0 + 1                        | 0 + 1 = 1    |
| 2   | 0 + 1 + 2                    | 1 + 2 = 3    |
| 3   | 0 + 1 + 2 + 3                | 3 + 3 = 6    |
| 4   | 0 + 1 + 2 + 3 + 4            | 6 + 4 = 10   |
| '   | '                            | '            |
| '   | '                            | '            |
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
    for(i = 1; i < n; i = i * 2)
    {
        statement;
    }
    __________________________________________________
        k = log(n)
```
| i     | total   |
| ----- | ------- |
| 1     | 1  = 2⁰ |
| 1 * 2 | 2 = 2¹  |
| 2 * 2 | 4 = 2²  |
| 4 * 2 | 8 = 2³  |
| 8 * 2 | 16 = 2⁴ |
| '     | '       |
| '     | '       |
| 2^k   |         |

> Condition will break at i >= n

> Lets say condition failed at i = 2^k

> 2^k >= n

> k = log(n)

> log(n) will give decimal values - we can ceil or floor values

> Lets suppose n = 8 i.e log(8) = 3

> Let n = 10 i.e log(10) = 3.2 -> ceil value is 4

> ⌈log(n)⌉ - ceil of log(n)

#### Example 8
```c
    for(i = n; i >= 1; i = i / 2)
    {
        statement;
    }
    __________________________________________________
        k = log(n)
```
| i       |
| ------- |
| n       |
| n / 2   |
| n / 2²  |
| n / 2³  |
| n / 2⁴  |
| '       |
| '       |
| n / 2^k |

> Loop will break at i < 1

> Assume therefore i < 1 i.e (n/2^k) < 1

> Equating (n/2^k) = 1 i.e n = 2^k

> k = log(n) with base 2

> which is O(log(n))

#### Example 9
```c
    for(i = 0; i * i < n; i++)
    {
        statement;
    }
    __________________________________________________
        k = √n
```
| i   | i * i |
| --- | ----- |
| 0   | 0     |
| 1   | 1     |
| 2   | 4     |
| 3   | 9     |
| 4   | 16    |
| '   | '     |
| '   | '     |
| k   | k²    |

> Loop will break at i² >= n 

> Let us suppose condition break at i = k

> k²>= n i.e k² = n

> k = √n

#### Example 10
```c
    for(i = 0; i < n; i++)
    {
        statement; ---- n
    }
    for(j = 0; j < n; i++)
    {
        statement; ---- n
    }
    _____________________
        n + n = 2n O(n)
```

#### Example 11
```c
    p = 0;
    for(i = 1; i < n; i = i * 2)
    {
        p ++; ---- log(n)
    }
    for(j = 1; j < p; j = j * 2)
    {
        statement; ---- log(p)
    }
    _____________________
        O(log₂ log₂(n))
```
> Here p executes for log(n) times

> p will be incremented for log(n)

> That is why it will be O(log log(n))

#### Example 12
```c
    for(i = 0; i < n; i ++) ---- (n + 1)
    {
        for(j = 1; j < n; j = j * 2) ---- n * (log₂(n))
        {
            statement; ---- n*log₂(n)
        }
    }
    _____________________________
    2nlog₂(n) + n + 1 = O(nlog₂(n))
```
| Condition                    | Complexity |
| ---------------------------- | ---------- |
| for(i = 0; i < n; i++)       | O(n)       |
| for(i = 0; i < n; i = i + 2) | n/2 = O(n) |
| for(i = n; i > 1; i --)      | O(n)       |
| for(i = 1; i < n; i = i * 2) | O(log₂(n)) |
| for(i = 1; i < n; i = i * 3) | O(log₃(n)) |
| for(i = n; i > 1; i = i / 2) | O(log₂(n)) |

### Analysis of IF & WHILE

#### Types of loops
```
for i = 1 to n
{
    statement; ---- n times
} 

while(condition) {
    statements;
}

do
{
    statements;
} while(condition)

> Atleast one time  it executes before checking the condition

repeat
{
    statements;
} util(condition)
> Similar to do while but it repeats until condition failed
```

#### while loop

```c
i = 0; ---- 1 time
while(i < n) ---- n + 1 times
{
    statements; ---- n times
    i++
}
_____________________________
    f(n) = 3n +2  = O(n)
```

#### Example

```c
a = 1;
while(a < b)
{
    statements;
    a = a * 2;
}
_______________
    O(log₂(n))
```
| a       |
| ------- |
| 1 = 2⁰  |
| 2 = 2¹  |
| 4 = 2²  |
| 8 = 2³  |
| 16 = 2⁴ |
| 32 = 2⁵ |
| '       |
| '       |
| 2^k     |

> Loop will break at a >= b

> Lets suppose condition a >= b at a = 2^k

> 2^k = b

> k = log₂(b)

```c
i = n;
while(i > 1)
{
    statements;
    i = i / 2;
}
________________
   O(log₂(n))
```

```c
i = 1;
k = 1;
while(k < n)
{
    statements;
    k = k + i;
    i++;
}
________________
    m = √n
```

| i   | k                        |
| --- | ------------------------ |
| 1   | 1                        |
| 2   | 1 + 1 = 2                |
| 3   | 2 + 2 = 4                |
| 4   | 2 + 2 + 3 = 8            |
| 5   | 2 + 2 + 3 + 4 = 11       |
| '   | '                        |
| '   | '                        |
| x   | 2 + 2 + 3 + 4 + .... + m |

> loop breaks at k >= n

> 2 + 2 + 3 + 4 + .... + m this is sum of n natural numbers if the number in series is 1 

> m(m + 1)/2 = n

> m = √n

```c
while(m != n)
{
    if(m > n)
        m = m - n;
    else 
        n = n - m;
}
_______________
 O(n)
```

| m = 16 | n = 2 |
| ------ | ----- |
| 14     | 2     |
| 12     | 2     |
| 10     | 2     |
| 8      | 2     |
| 6      | 2     |
| 4      | 2     |
| 2      | 2     |

> It will execute for 8 times i.e 16 / 2

> i .e m / 2 = O(n)

> minimum times O(1) and meximum time is O(n)

```javascript
Algorithm Test(n)
{
    if(n < 5)
    {
        console.log(n); ---- 1 time
    }
    else
    {
        for(i = 0; i < n; i ++)
        {
            console.log(i); ---- n times
        }
    }
}
________________________________
    O(n)

Algorithm Test(n)
{
    if(n < 5)
    {
        for(i = 0; i < n; i ++)
        {
            console.log(i); ---- n times
        }
    }
}
________________________________
    O(n)
```

> In best case it executes for O(1) and in worst case it executes for O(n)

### Types of time functions

| Order            | Function Name |
| ---------------- | ------------- |
| O(1)             | Constant      |
| O(log(n))        | Logarithemic  |
| O(n)             | Linear        |
| O(n²)            | Quadratic     |
| O(n³)            | Cubic         |
| O(2ⁿ) also O(nⁿ) | Exponentail   |

#### Classes of functions in their increasing order of weightage

`1 < log(n) < √n < n < nlog(n) < n² < n³ < ... < 2ⁿ < 3ⁿ < ... nⁿ`

| log(n) | n   | n²  | 2ⁿ  |
| ------ | --- | --- | --- |
| 0      | 1   | 1   | 2   |
| 1      | 2   | 4   | 4   |
| 2      | 4   | 16  | 16  |
| 3      | 8   | 64  | 256 |
| 3.1    | 9   | 81  | 512 |

`n^100 < 2^n`

`n^k < 2^n`

![time graph](./time-graph.png "Time Graph")

### Asymptotic Notations

| Notation    | Name          |
| ----------- | ------------- |
| O big-oh    | Upper bound   |
| Ω big-omega | Lower bound   |
| θ Theta     | Average bound |