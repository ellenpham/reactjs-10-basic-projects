import { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log('hello there');
  };

  sayHello();

  // useEffect takes 2 arguments: first is a call backfunction (arrow function) and second is the dependency array
  // by default, the call back function is invoked after every render if no dependency array provided 
  // if dependency array is an empty array [], then the code will run once after the initial render (when the component mounts)
  useEffect( () => {
    console.log('hello from useEffect');
  }, []);

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
