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

function ListToarray(list) {
    let Array = [];
    for (let node = list; node != null; node = node.rest) {

        Array.push(node.value)

    }
    return Array;

}

function prepend(element, list) {
    return {
        value: element,
        rest: list
    } ;
}
