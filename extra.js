// 1. get the min and max value from an array using only reduce

const getMinAndMax =  array => array.reduce(  ( acc, value ) => {
	acc[0] = acc[0] < value ? acc[0] : value;
    acc[1] = acc[1] > value ? acc[1] : value;
    return acc;

}, [] );

console.log( getMinAndMax( array ) );

// 2. implement map using reduce

const map = ( array, func ) => array.reduce( ( acc, current ) => {
    return acc.concat( func( current ) );
}, [] );

const addOne = ( elem ) => elem + 1;
console.log( map( array, addOne ) );

// 3. implement filter using reduce

const filter = ( array, test ) => array.reduce( ( acc, current ) => {
	return test( current ) ? acc.concat( current ) : acc;
}, [] );

const isEven = ( item ) => item % 2 == 0;
console.log( filter( array, isEven ) );
