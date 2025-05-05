function showAllTypes() {
  /* Create a function that outputs the typeof for:
  objects, arrays, strings, numbers, booleans, null, undefined, and NaN It should 
  return an object containing all these types */
  // const answer = showAllTypes();

//The data types of Javascript are Object, Array, String, Number, Boolean, Null, Undefined, NaN ok ok

// typeof 'thisIsAString';

const Answers1 = 'string';

  console.log(typeof Answers1);

  const Answers2 = 10;

  console.log(typeof Answers2);

  const Answers3 = true;

  console.log(typeof Answers3);
  
  const Answers4 = '+';


  console.log(typeof Answers4);

  const Answers5 = [];

  console.log(typeof Answers5);

  const Answers6 = undefined;


  console.log(typeof Answers6);

  const Answers7 = ' Null ';

  console.log(typeof Answers7);


  // const Answers8 = 'object';

  // expect(Answers8).toHaveProperty('object');
  
  // expect(Answers8.object).toBe('object');
  // console.log(typeof Answers8);




}



module.exports = showAllTypes;



/* the Key is the name of the data type, and value is the type of data type
{

}
*/


/*
const showAllTypes = require('../../exercises/easy/ex2-type-checker');

describe('Show All Types function', () => {
  test('should return an object with all the types', () => {
    const result = showAllTypes();
    
    expect(result).toHaveProperty('object');
    expect(result).toHaveProperty('array');
    expect(result).toHaveProperty('string');
    expect(result).toHaveProperty('number');
    expect(result).toHaveProperty('boolean');
    expect(result).toHaveProperty('null');
    expect(result).toHaveProperty('undefined');
    expect(result).toHaveProperty('nan');
    
    expect(result.object).toBe('object');
    expect(result.array).toBe('object');
    expect(result.string).toBe('string');
    expect(result.number).toBe('number');
    expect(result.boolean).toBe('boolean');
    expect(result.null).toBe('object');
    expect(result.undefined).toBe('undefined');
    expect(result.nan).toBe('number');
  });
});






*/



