function compare(valLeft, valRight) {

    return valLeft > valRight
}

function bubbleSort(array) {

    /* your code here */
    for (var i = array.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (compare(array[j], array[j + 1])) {
                function swap() {
                    var temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
                swap();
            }
        }
    }
    return array;
}