function splitArray (array) {
	var midPoint = Math.floor(array.length / 2);
	var leftArray = array.slice(0,midPoint);
	var rightArray = array.slice(midPoint);
	return [leftArray, rightArray];
}