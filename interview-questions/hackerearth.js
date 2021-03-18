// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
var myArgs = '';

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    myArgs+=String(input);
    // process.stdout.write(myArgs.split('\n').join(' '));       // Writing output to STDOUT
    console.log(compareLikesAndDislikes(myArgs.split('\n')[0], myArgs.split('\n')[1]));
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

// Write your code here


function compareLikesAndDislikes(A, P) {
    let commonLikesDislikes = 0;
    for(let i = 0; i < A.length; i++) {
        if(A[i] === P[i]) {
            commonLikesDislikes++;
        }
    }
    return commonLikesDislikes;
}
