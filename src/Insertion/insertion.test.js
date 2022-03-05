const insertion = require('./insertionSort.js');
test('test insertion',()=>{
    expect(insertion([2,1])).toEqual([1,2]);
}
);