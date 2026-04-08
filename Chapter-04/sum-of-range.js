function Range(start, end) {
    const limitedArray = [];
    for (let i = start; i <= end; i++) {
        limitedArray.push(i);
    }
    return limitedArray;
}


function sum(array) {
    let arrayCounter = 0;
    for (let i = 0; i < array.length; i++) {
        arrayCounter += array[i];
    }
    return arrayCounter;
}


function Range(start, end, step = start < end ? 1 : -1) {
    const limitedArray = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            limitedArray.push(i);
        }
    } else if (step < 0) {
        for (let i = start; i >= end; i += step) {
            limitedArray.push(i);
        }
    } else {
        console.log("Step cannot be zero");
    }
    return limitedArray;
}
