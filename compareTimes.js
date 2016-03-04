for (var i = 9; i <= 12; i++) {
  var numItems = Math.pow(2, i);
  var nativeTestArray = [];

  for(var j = 0; j < numItems; j++) {
    var rand = Math.floor(Math.random() * numItems);
    nativeTestArray.push(rand);
  }

  var bTestArray = nativeTestArray.slice(0);
  var mTestArray = nativeTestArray.slice(0);

  console.time(numItems + ' native');
  nativeTestArray.sort(function(a, b){ return a - b; });
  console.timeEnd(numItems + ' native');

  console.time(numItems + ' bubble');
  bubbleSort(bTestArray);
  console.timeEnd(numItems + ' bubble');

  console.time(numItems + ' merge');
  mergeSort(mTestArray);
  console.timeEnd(numItems + ' merge');
}



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


function mergeSort (array) {
  if(array.length < 2) {
    return array;
  }
  var midPoint = Math.floor(array.length / 2);
  var leftArray = array.slice(0,midPoint);
  var rightArray = array.slice(midPoint);
  return mergeArrays(mergeSort(leftArray), mergeSort(rightArray));
}


function mergeArrays (left, right) {
  var mergedArr = [];
  leftCount = 0;
  rightCount = 0;
  while(leftCount < left.length && rightCount < right.length) {
    if(left[leftCount] < right[rightCount]) {
      mergedArr.push(left[leftCount++]);
    }
    else {
      mergedArr.push(right[rightCount++])
    }
  }
  return mergedArr.concat(left.slice(leftCount)).concat(right.slice(rightCount));
}
