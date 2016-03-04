describe('Merge Sort', function(){
    it('handles an empty array', function(){
        expect( mergeSort([]) ).toEqual( [] );
    });
    it('handles an single array', function(){
        expect( mergeSort([3]) ).toEqual( [3] );
    });
    it('handles an array', function(){
        expect( mergeSort([9, 5, 8, 4, 2]) ).toEqual([2, 4, 5, 8, 9]);
    });
});