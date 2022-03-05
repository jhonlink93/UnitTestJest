const linearSearch = require('./linearSearch.js');
test('test linearSearch',()=>{
    expect(linearSearch(1,[2,1,3,4,5])).toEqual(1);
}
);