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

