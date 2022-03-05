function quickSort  ( [ x = [], ...xs ] )  {
    return ( x.length === 0 ) ? [] : [
      ...quickSort( xs.filter( y => y <= x ) ),
      x,
      ...quickSort( xs.filter( y => y > x ) )
    ];
  }
  module.exports = quickSort;