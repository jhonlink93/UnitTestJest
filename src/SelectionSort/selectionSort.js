function selectionSort  (arr)  {
    for ( let j = 0; j < arr.length; ++j ) {
      let i = iMin = j;
      for ( ++i; i < arr.length; ++i ) {
        ( arr[ i ] < arr[ iMin ] ) && ( iMin = i );
      }
      [ arr[ j ], arr[ iMin ] ] = [ arr[ iMin ], arr[ j ] ];
    }
  
    return arr;
  }
  module.exports = selectionSort;