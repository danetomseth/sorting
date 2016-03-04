describe('Bubble Sort', function(){
	beforeEach(function() {
        spyOn(window, 'compare').and.callThrough();

    });
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles an single array', function(){
        expect( bubbleSort([3]) ).toEqual( [3] );
    });
    it('handles an array', function(){
        expect( bubbleSort([9, 5, 8, 4, 2]) ).toEqual([2, 4, 5, 8, 9]);  
    });
    it('Compares elements more times than array length', function(){
        bubbleSort([9, 5, 8, 4, 2]); 
        expect(compare.calls.count()).toBeGreaterThan(5);
    });
});

//keep track of comapres and swaps 