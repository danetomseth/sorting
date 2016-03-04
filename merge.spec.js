describe('Merge Array function', function() {
    it('is able to merge two sorted arrays', function() {
        expect(merge([2, 4, 5, 8, 9],[1,3,6,8,10])).toEqual([1, 2, 3, 4, 5, 6, 8, 8, 9, 10]);
    });
    it('is able to merge two sorted arrays of different lengths', function() {
        expect(merge([1, 2, 4], [3, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
});