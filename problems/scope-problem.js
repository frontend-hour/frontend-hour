let i;
for(i = 0; i < 3; i++) {
    const Log = () => {
        console.log(i);
    }

    setTimeout(Log, 100);
}

// 100 - 3
// 101 - 3
// 102 - 3