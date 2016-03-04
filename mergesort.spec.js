describe('Merge Sort', function() {
    beforeEach(function() {
        spyOn(window, 'mergeSort').and.callThrough();
    });


    it('handles an single array', function() {
        expect(mergeSort([3])).toEqual([3]);
    });
    it('handles an array', function() {
        expect(mergeSort([9, 5, 8, 4, 2])).toEqual([2, 4, 5, 8, 9]);
    });
    it('Runs Resursively', function() {
        mergeSort([9, 5, 8, 4, 2]);
        expect(mergeSort.calls.count()).toBeGreaterThan(5);
        //console.log(mergeSort.calls.count());
    });
});

