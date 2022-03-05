const insertionSort = arr => {
    const l = arr.length;
    let j, temp;
  
    for ( let i = 1; i < l; i++ ) {
      j = i;
      temp = arr[ i ];
      while ( j > 0 && arr[ j - 1 ] > temp ) {
        arr[ j ] = arr[ j - 1 ];
        j--;
      }
      arr[ j ] = temp;
    }
  
    return arr;
  };
  module.exports = insertionSort;