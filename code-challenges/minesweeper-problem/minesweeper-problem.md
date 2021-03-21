## The Minesweeper Problem

>Given the position of bombs, number of rows and number of columns, prepare the mine field for the minesweeper game.

```
input:
    position of bombs - [[0, 0], [0, 1]]
    number of columns in mine field = 4
    number of rows in mine field = 4
output:
[
    [-1, -1, 1, 0],
    [ 2,  2, 1, 0],
    [ 0,  0, 0, 0],
    [ 0,  0, 0, 0]
]
```
#### Please Note that
> Positions having -1 represents a bomb
0 indicates no bomb in vicinity
any other positive number n represents n bombs in the vicinity
Vicinity includes direct horizontal/vertical/diagonal neighboring position