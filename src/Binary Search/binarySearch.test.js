const binarySearch = require('./binarySearch.js');
test('test binarySearch',()=>{
    expect(binarySearch(5,[1,2,3,4,5,6,7,8,9,10])).toEqual(4);
}
);
