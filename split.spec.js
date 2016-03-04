describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(splitArray([2, 4, 5, 8, 9])).toEqual([[2, 4], [5, 8, 9]]);
  });
  it('is able to split an array into two halves', function() {
    expect(splitArray([2, 4, 5, 8, 9, 15])).toEqual([[2, 4, 5], [8, 9, 15]]);
  });
});