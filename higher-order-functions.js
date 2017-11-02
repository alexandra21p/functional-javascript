// 1. SUM the numeric values from the following array using only map, reduce, filter
const values = [ 0, 1, undefined, -10, "0", 42 ];

function sumNumericValues( array ) {
    return array
        .map( elem => parseInt( elem ) )
    	.filter( elem => !isNaN( elem ) )
        .reduce( ( acc, current ) => acc + current );
}

// or
const numericSum = ( array ) => {
	return array
    	.map( elem => parseInt( elem ) )
    	.filter( elem => !isNaN( elem ) )
        .reduce( ( acc, current ) => acc + current );
};

console.log( sumNumericValues( values ) );
console.log( numericSum( values ) );


// 2. SUM all the values in the following structure
const nested = [ 1, 2, [ 3, 4 ], [ [ 5 ], [ 6, 7 ] ], 8 ];

function sumNestedValues( array ) {
	return array
  	.reduce( ( acc, current ) => {
  		if ( Array.isArray( current ) ) {
    		return acc.concat( sumNestedValues( current ) );
    	}
  		return acc.concat( current );
  	}, [] )
    .reduce( ( sum, value ) => sum + value );
};

console.log( sumNestedValues( nested ) );


// 3. TEST if the value 42 exists inside an array (HINT: with map and reduce)
const array = [ 101, 67, 213, 94, 59, 42, 62, 40 ];

function checkIfExists( array, value ) {
	return array
  	.map( item => item === value )
    .reduce( ( acc, current ) => acc || current )
}

const isInArray = ( array, value ) => {
    return array
  	.map( item => item === value )
    .reduce( ( acc, current ) => acc || current )
};

console.log( checkIfExists( array, 42 ) );
console.log( isInArray( array, 42 ) );
