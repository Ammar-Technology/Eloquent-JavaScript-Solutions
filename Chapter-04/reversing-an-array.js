function reverseArray(originalArray) {
    let newArray = [];
    for (let i = originalArray.length - 1; i >= 0; i--) {
        newArray.push(originalArray[i]);
    }
    return newArray;
}
