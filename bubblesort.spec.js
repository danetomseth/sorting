describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles an single array', function(){
        expect( bubbleSort([3]) ).toEqual( [3] );
    });
    it('handles an array', function(){
        expect( bubbleSort([9, 5, 8, 4, 2]) ).toEqual([2, 4, 5, 8, 9]);
    });
});

//keep track of comapres and swaps 