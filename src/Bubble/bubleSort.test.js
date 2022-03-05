
const bubbleSort = require('./bubbleSort.js');
test('test buble',()=>{
    expect(bubbleSort([2,1])).toEqual([1,2]);
});