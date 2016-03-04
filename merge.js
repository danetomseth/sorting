function merge (left, right) {
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