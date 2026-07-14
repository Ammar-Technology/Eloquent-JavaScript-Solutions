function myLoop(start, test, update, action) {
    for (let i = start; test(i); i = update(i)) {
        action(i);
    }
}

myLoop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
