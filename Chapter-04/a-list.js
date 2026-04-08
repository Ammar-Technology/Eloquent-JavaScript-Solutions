function arrayToList(Array) {
    let list = null;
    for (let i = Array.length-1 ; i >= 0; i--) {
        let object = {
            value: null,
            rest: null,
        }
        object.value = Array[i];
        object.rest = list;
        list = object;
    }
    return list;
}
