const issues = [
    {
        id: 954,
        type: "Features",
        name: "first feature",
        sprint: "1",
        createdBy: 357,
        asignee: "admin",
        description: "this is the first feature",
        status: "New",
        tasks: [],
        comments: "first comment",
        updatedAt: "2017/11/2",
        createdAt: "2017/11/2"
    },
    {
        id: 452,
        type: "Bug",
        name: "first bug",
        sprint: "2",
        createdBy: 357,
        asignee: "admin",
        description: "this is the first bug",
        status: "In progress",
        tasks: [],
        comments: "second comment",
        updatedAt: "2017/11/2",
        createdAt: "2017/11/2"
    },
    {
        id: 123,
        type: "Task",
        name: "first task",
        sprint: "2",
        createdBy: 357,
        asignee: "admin",
        description: "this is the first task",
        status: "New",
        tasks: [],
        comments: "first comment",
        updatedAt: "2017/11/2",
        createdAt: "2017/11/2"
    },
    {
        id: 76,
        type: "Bug",
        name: "nasty bug",
        sprint: "3",
        createdBy: 357,
        asignee: "admin",
        description: "pls fix",
        status: "Resolved",
        tasks: [],
        comments: "first comment",
        updatedAt: "2017/11/2",
        createdAt: "2017/11/2"
    },
    {
        id: 786,
        type: "Features",
        name: "another feature",
        sprint: "1",
        createdBy: 357,
        asignee: "admin",
        description: "cool feature",
        status: "Resolved",
        tasks: [],
        comments: "first comment",
        updatedAt: "2017/11/2",
        createdAt: "2017/11/2"
    },

];


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
