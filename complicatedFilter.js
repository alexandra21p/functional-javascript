// filter with partial application and composition
function leftApplication( f, ...fixedArgs ) {
    return function( ...restArgs ) {
        return f( ...fixedArgs, ...restArgs )
    }
}

const pipe = ( ...rest ) => x => rest.reduce( ( arg, func ) => func( arg ), x );

const customFilter = ( fn, array ) => array.filter( fn );
const getValueForProperty = ( property ) => ( object ) => object[property];
const filterByProperty = ( value ) => ( property ) => property === value;

const filterCriterion = pipe( getValueForProperty( "status" ), filterByProperty( "Resolved" ) );
const complicatedFilter = leftApplication( customFilter, filterCriterion );

// console.log( complicatedFilter( issues ) );
